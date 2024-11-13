import React, { useEffect, useState } from 'react';
import { Table, Button, Tag, Modal, Select } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import axios from 'axios';

const { confirm } = Modal;
const { Option } = Select;

interface Product {
  product: string;
  quantity: number;
  size: string;
}

interface Order {
  _id: string;
  name: string;
  address: string;
  phone: string;
  totalPrice: number;
  payment: string;
  status: 'Pending' | 'Shipped' | 'Delivered' ;
  products: Product[];
}

const fetchOrders = async (setOrders: React.Dispatch<React.SetStateAction<Order[]>>) => {
  try {
    const { data } = await axios.get('/orders');
    
    // Đảm bảo trạng thái mặc định là Pending nếu không có trạng thái
    const ordersWithDefaultStatus = data.map((order: Order) => ({
      ...order,
    }));
    
    setOrders(ordersWithDefaultStatus);
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
};

const updateOrderStatus = async (orderId: string, newStatus: Order['status']) => {
    try {
      // Gửi yêu cầu PATCH để cập nhật trạng thái đơn hàng
      await axios.put(`/orders/${orderId}`, { status: newStatus });
      // Sau khi cập nhật, làm mới danh sách đơn hàng
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

const ListOrder: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  



  useEffect(() => {
    setLoading(true);
    fetchOrders(setOrders).finally(() => setLoading(false));
  }, []);

  const handleStatusChange = (orderId: string, newStatus: Order['status']) => {
    confirm({
      title: 'Are you sure you want to change the status?',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        // Cập nhật trạng thái mới cho đơn hàng
        updateOrderStatus(orderId, newStatus);
      },
    });
  };

  const showOrderDetails = (order: Order) => {
    Modal.info({
      title: `Order Details: ${order._id}`,
      content: (
        <div>
          <p><strong>Address:</strong> {order.address}</p>
          <p><strong>Phone:</strong> {order.phone}</p>
          <p><strong>Name:</strong> {order.payment}</p>
          <p><strong>Total Price:</strong> {order.totalPrice.toLocaleString()} VND</p>
        </div>
      ),
      onOk() {},
    });
  };
  

  const columns = [
    {
      title: 'Order ID',
      dataIndex: '_id',
      key: 'id',
      render: (text: string) => <span className="font-medium">{text}</span>,
    },
    {
      title: 'Customer Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: Order['status'], record: Order) => (
        <Select
          defaultValue={status}
          onChange={(value) => handleStatusChange(record._id, value as Order['status'])}
          className="w-full"
        >
          <Option value="Pending">
            <Tag color="yellow">Pending</Tag>
          </Option>
          <Option value="Shipped">
            <Tag color="blue">Shipped</Tag>
          </Option>
          <Option value="Delivered">
            <Tag color="green">Delivered</Tag>
          </Option>
        </Select>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: Order) => (
        <Button
          onClick={() => showOrderDetails(record)}
          type="primary"
          className="bg-blue-500"
        >
          View Details
        </Button>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Order Management</h1>
      <Table
        columns={columns}
        dataSource={orders}
        loading={loading}
        rowKey="_id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default ListOrder;
