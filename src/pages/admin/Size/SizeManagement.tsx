import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Select, Input, Button, List, Spin, Form, notification, Popconfirm } from 'antd';

interface Size {
  _id: string;
  size: number;
  quantity: number;
}

interface Product {
  _id: string;
  title: string;
}

const SizeManagement = () => {
  const [products, setProducts] = useState<Product[]>([]);  // Danh sách sản phẩm
  const [selectedProductId, setSelectedProductId] = useState<string>(''); // Sản phẩm đang chọn
  const [sizes, setSizes] = useState<Size[]>([]);  // Danh sách size của sản phẩm
  const [newSize, setNewSize] = useState<{ size: string; quantity: string }>({
    size: '',
    quantity: '',
  });
  const [loading, setLoading] = useState<boolean>(false);  // Thêm trạng thái loading
  const [editingSize, setEditingSize] = useState<Size | null>(null);  // Sản phẩm đang chỉnh sửa

  // Lấy danh sách sản phẩm
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching products', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedProductId]);

  // Lấy danh sách size của sản phẩm
  useEffect(() => {
    if (!selectedProductId) return;
    setSizes([]); // Reset danh sách size khi chọn sản phẩm mới
    const fetchSizes = async () => {
      try {
        const response = await axios.get(`/sizes/product/${selectedProductId}`);
        setSizes(response.data);
      } catch (error) {
        console.log('Error fetching sizes', error);
      }
    };
    fetchSizes();
  }, [selectedProductId]);

  // Thêm size mới cho sản phẩm
  const handleAddSize = async () => {
    if (newSize.size && newSize.quantity && selectedProductId) {
      try {
        const response = await axios.post('/sizes/add', {
          productId: selectedProductId,
          size: newSize.size,
          quantity: newSize.quantity,
        });
        setSizes([...sizes, response.data.size]);  // Cập nhật danh sách size
        setNewSize({ size: '', quantity: '' });
        notification.success({
          message: 'Thêm size thành công!',
        });
      } catch (error) {
        console.log('Error adding size', error);
        notification.error({
          message: 'Có lỗi xảy ra khi thêm size',
        });
      }
    }
  };

  // Xóa size
  const handleDeleteSize = async (sizeId: string) => {
    try {
      await axios.delete(`/sizes/${sizeId}`);
      setSizes(sizes.filter((size) => size._id !== sizeId));
      notification.success({
        message: 'Xóa size thành công!',
      });
    } catch (error) {
      console.log('Error deleting size', error);
      notification.error({
        message: 'Có lỗi xảy ra khi xóa size',
      });
    }
  };

  // Cập nhật size
  const handleEditSize = async () => {
    if (editingSize && newSize.size && newSize.quantity) {
      try {
        const response = await axios.put(`/sizes/${editingSize._id}`, {
          size: newSize.size,
          quantity: newSize.quantity,
        });
        setSizes(sizes.map((size) => (size._id === editingSize._id ? response.data.size : size)));
        setEditingSize(null);  // Reset chỉnh sửa
        setNewSize({ size: '', quantity: '' });
        notification.success({
          message: 'Cập nhật size thành công!',
        });
      } catch (error) {
        console.log('Error editing size', error);
        notification.error({
          message: 'Có lỗi xảy ra khi cập nhật size',
        });
      }
    }
  };

  // Bắt đầu chỉnh sửa size
  const startEditing = (size: Size) => {
    setEditingSize(size);
    setNewSize({ size: String(size.size), quantity: String(size.quantity) });
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Quản lý Size sản phẩm</h3>

      {/* Chọn sản phẩm */}
      <div className="mb-4">
        <label className="block mb-2">Chọn sản phẩm:</label>
        <Select
          value={selectedProductId}
          onChange={(value) => setSelectedProductId(value)}
          className="w-full"
          placeholder="Chọn sản phẩm"
        >
          {products.map((product) => (
            <Select.Option key={product._id} value={product._id}>
              {product.title}
            </Select.Option>
          ))}
        </Select>
      </div>

      {/* Hiển thị danh sách size của sản phẩm */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold">Danh sách size của sản phẩm:</h4>
        {loading ? (
          <Spin size="large" />
        ) : sizes.length === 0 ? (
          <p className="text-gray-500">Không có size cho sản phẩm này</p>
        ) : (
          <List
            bordered
            dataSource={sizes}
            renderItem={(size) => (
              <List.Item key={size._id} className="flex justify-between items-center">
                <div>
                  <strong>Size:</strong> {size.size} - <strong>Số lượng:</strong> {size.quantity}
                </div>
                <div>
                  <Button
                    type="link"
                    onClick={() => startEditing(size)}
                    className="mr-2 text-blue-500"
                  >
                    Sửa
                  </Button>
                  <Popconfirm
                    title="Bạn có chắc muốn xóa size này?"
                    onConfirm={() => handleDeleteSize(size._id)}
                    okText="Có"
                    cancelText="Không"
                  >
                    <Button type="link" className="text-red-500">
                      Xóa
                    </Button>
                  </Popconfirm>
                </div>
              </List.Item>
            )}
          />
        )}
      </div>

      {/* Form thêm size hoặc sửa size */}
      <div>
        <h4 className="text-lg font-semibold mb-2">{editingSize ? 'Chỉnh sửa Size' : 'Thêm Size Mới'}</h4>
        <Form layout="vertical" onFinish={editingSize ? handleEditSize : handleAddSize}>
          <Form.Item label="Size" required>
            <Input
              type="number"
              value={newSize.size}
              onChange={(e) => setNewSize({ ...newSize, size: e.target.value })}
              placeholder="Nhập size"
            />
          </Form.Item>
          <Form.Item label="Số lượng" required>
            <Input
              type="number"
              value={newSize.quantity}
              onChange={(e) => setNewSize({ ...newSize, quantity: e.target.value })}
              placeholder="Nhập số lượng"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            {editingSize ? 'Cập nhật Size' : 'Thêm Size'}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SizeManagement;
