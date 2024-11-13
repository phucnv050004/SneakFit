import { useEffect, useState } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useProductCart } from '@/hooks/useProductCart';

const CheckOutOrder = () => {
  const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState(false);
  const [order, setOrder] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const orderId = params.get('orderId');

  useEffect(() => {
    // Fetch order data
    const fetchOrder = async () => {
      try {
        const { data } = await axios.get(`/orders/${orderId}`);
        console.log(data);
        
        setOrder(data);
        setIsLoading(false);
      } catch (err) {
        setError('Có lỗi xảy ra khi lấy thông tin đơn hàng.');
        setIsLoading(false);
      }
    };

    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);



  if (isLoading) return <p>Đang tải...</p>;
  if (error) return <p>{error}</p>;

  const columns = [
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (text: string) => <img src={text} alt='product' className='w-16 h-16' />
    },
    { title: 'Tên sp', dataIndex: 'title', key: 'title' },
    { title: 'Số lượng', dataIndex: 'quantity', key: 'quantity' },
    { title: 'Size', dataIndex: 'size', key: 'size' },
    { title: 'Giá', dataIndex: 'price', key: 'price', render: (price: number) => `${price}₫` }
  ];
console.log(order.data.products);

const data = order?.data?.products?.map((item: any, index: number) => ({
    key: index,
    image: item.product.image,
    title: item.product.title,
    quantity: item.quantity,
    price: item.product.price,
    size: item.size,
    
  }));
console.log(data);

  return (
    <div className='mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between pt-10'>
        <div className='lg:w-1/2 lg:p-[66px] px-4 lg:pl-[66px] mb-8 lg:mb-0'>
          <h1 className='text-3xl font-bold'>SneakFit</h1>
          <div className='flex items-center'>
            <div>
              <h2 className='text-xl font-semibold'>Đặt hàng thành công</h2>
              <p className='text-gray-600'>Cảm ơn bạn đã mua hàng!</p>
            </div>
            <div className='flex justify-center items-center w-12 h-12 border-2 mx-5 my-4 border-green-500 rounded-full bg-white cursor-pointer'>
              <CheckOutlined className='text-green-500 text-xl' />
            </div>
          </div>

          <div className='my-4 border-[2px]'>
            <div className='px-2 mt-2'>
              <h3 className='text-xl font-semibold'>Thông tin giao hàng</h3>
            </div>
            <div className='px-2'>
              <p>{order.data.name}</p>
              <p>{order.data.phone}</p>
              <p>{order.data.address}</p>

              <h3 className='text-lg font-semibold mt-4'>Phương thức thanh toán</h3>
              <p>{order.data.payment === 'COD' ? 'Thanh toán khi giao hàng (COD)' : 'Thanh toán online'}</p>
            </div>
          </div>

          <div className='space-x-3'>
            <Button type='primary' href='/' className='mt-6'>
              Tiếp tục mua hàng
            </Button>
            <Button type='primary' href='/orders' className='mt-6'>
              Xem tình trạng đơn hàng
            </Button>
          </div>
          <div className='text-gray-500 mt-4'>
            <p>
              Cần hỗ trợ?{' '}
              <a href='mailto:hminh0555@gmail.com' className='text-blue-500'>
                Liên hệ chúng tôi
              </a>
            </p>
          </div>
        </div>

        {/* Thông tin đơn hàng */}
        <div className='lg:w-1/2 border-l mb-10 px-6'>
          <h2 className='text-lg font-semibold'>Thông tin đơn hàng</h2>

          <div className='block lg:hidden mt-4'>
            <button
              className='w-full text-left bg-gray-200 p-2 rounded'
              onClick={() => setIsOrderDetailsVisible(!isOrderDetailsVisible)}
            >
              {isOrderDetailsVisible ? 'Ẩn chi tiết đơn hàng' : 'Hiện chi tiết đơn hàng'}
            </button>
          </div>

          <div className='hidden lg:block'>
            <Table columns={columns} dataSource={data} pagination={false} className='my-4' />
            <div className='border-t mt-4 pt-4'>
              <div className='flex justify-between mt-4 font-bold text-lg'>
                <span>Tổng cộng đơn hàng</span>
                <span>{order.data.totalPrice}₫</span>
              </div>
            </div>
          </div>

          {isOrderDetailsVisible && (
            <div className='lg:hidden'>
              <Table columns={columns} dataSource={data} pagination={false} className='my-4' />
              <div className='border-t mt-4 pt-4'>
                <div className='flex justify-between mt-4 font-bold text-lg'>
                  <span>Tổng cộng đơn hàng</span>
                  <span>{order.data.totalPrice}₫</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CheckOutOrder;
