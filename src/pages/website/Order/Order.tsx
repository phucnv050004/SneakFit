/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Typography, Row, Col, Spin, Button, Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

// Đối tượng ánh xạ trạng thái
const orderStatusMap: { [key: string]: string } = {
  Processing: "Đang xử lý",
  Pending: "Chờ xác nhận",
  Confirmed: "Đã xác nhận",
  Shipped: "Đang vận chuyển",
  Delivering: "Đang vận chuyển",
  Delivered: "Giao hàng thành công",
  Canceled: "Đã hủy đơn hàng",
  Completed: "Đơn hàng hoàn thành",
  Returned: "Hoàn trả đơn hàng",
  Refunded: "Hoàn trả đơn hàng và hoàn tiền",
};

const OrderPage = () => {
  const { Title, Text } = Typography;
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  console.log(user);

  const userId = user?.user?._id;

  const [orders, setOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Số đơn hàng mỗi trang

  const orderRefs = useRef<{ [key: string]: any }>({}); // Lưu các ref cho từng đơn hàng

  useEffect(() => {
    // Kiểm tra xem có userId không
    if (!userId) return;

    const fetchOrders = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`orders/user/${userId}`);
        console.log(response);

        setOrders(response.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  useEffect(() => {
    // Tự động cuộn lên đầu trang khi chuyển trang
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (!userId) {
    return (
      <div className="container mx-auto mt-10 mb-10 text-center">
        <Title level={3}>Bạn chưa đăng nhập</Title>
        <Button type="primary" size="large" onClick={() => navigate("/login")}>
          Đăng nhập ngay
        </Button>
      </div>
    );
  }

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (isError) {
    return <div>Đã xảy ra lỗi khi lấy dữ liệu đơn hàng!</div>;
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="container mx-auto mt-10 mb-10 text-center">
        <Title level={3}>Bạn chưa có đơn hàng nào</Title>
        <Button type="primary" size="large" onClick={() => navigate("/")}>
          Tiếp tục mua hàng
        </Button>
      </div>
    );
  }

  // Sắp xếp đơn hàng theo thời gian mới nhất
  const sortedOrders = orders.sort(
    (a: any, b: any) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // Xác định đơn hàng hiển thị theo trang
  const startIndex = (currentPage - 1) * pageSize;
  const currentOrders = sortedOrders.slice(startIndex, startIndex + pageSize);

  const handleOrderClick = (orderId: string) => {
    const orderRef = orderRefs.current[orderId];
    if (orderRef) {
      orderRef.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  console.log(orders);

  return (
    <div className="container mx-auto mt-10 mb-10">
      <Row gutter={16}>
        {/* Chi tiết đơn hàng bên trái */}
        <Col xs={24} md={16}>
          <div className="bg-white p-6 shadow-md">
            {currentOrders.map((order: any) => (
              <div
                key={order._id}
                className="border-b mb-4 pb-4"
                ref={(el) => (orderRefs.current[order._id] = el)} // Gán ref cho từng đơn hàng
                style={{ scrollMarginTop: "100px" }} // Đặt khoảng cách khi cuộn tới
              >
                <Title level={3} className="mt-2">
                  Chi tiết đơn hàng: {order.invoiceId}
                </Title>
                <div className="border-b py-4">
                  <Text className="font-bold">Thông tin sản phẩm</Text>
                  {order.products.map((product: any) => (
                    <div
                      key={product.productId}
                      className="flex items-center mt-2"
                    >
                      <img
                        src={product.product.image}
                        alt={product.product.title}
                        className="w-16 h-16 object-cover mr-4"
                      />
                      <span className="font-bold">{product.product.title}</span>
                      <span className="ml-2">x{product.quantity}</span>
                      <span className="ml-auto font-bold">
                        {product.product.price}₫
                      </span>
                    </div>
                  ))}
                  <div className="mt-5">
                    <Text className="font-bold">Thông tin người nhận</Text>
                    <div className="flex justify-between mt-4">
                      <Text>Ngày đặt hàng:</Text>
                      <Text className="font-bold">
                        {new Date(order.createdAt).toLocaleString()}
                      </Text>
                    </div>
                    <div className="flex justify-between">
                      <Text>Tên người nhận:</Text>
                      <Text className="font-bold">{order.name}</Text>
                    </div>
                    <div className="flex justify-between">
                      <Text>SĐT người nhận:</Text>
                      <Text className="font-bold">{order.phone}</Text>
                    </div>
                    <div className="flex justify-between">
                      <Text>Địa chỉ giao hàng:</Text>
                      <Text className="font-bold">{order.address}</Text>
                    </div>
                    <div className="flex justify-between">
                      <Text>Trạng thái:</Text>
                      <Text className="font-bold">
                        {orderStatusMap[order.status] || "Chưa xác định"}
                      </Text>
                    </div>
                    <div className="flex justify-between">
                      <Text>Phương thức thanh toán:</Text>
                      <Text className="font-bold">{order.payment}</Text>
                    </div>
                    <div className="flex justify-between mt-4">
                      <Text>Tổng cộng:</Text>
                      <Text className="font-bold">{order.totalPrice}₫</Text>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Phân trang */}
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={orders.length}
              onChange={(page) => setCurrentPage(page)}
              className="mt-4 text-center"
            />
          </div>
        </Col>

        {/* Thông tin đơn hàng bên phải */}
        <Col xs={24} md={8}>
          <Card className="bg-gray-100 shadow-md">
            <Title level={4} className="text-green-600">
              Cảm ơn. Đơn hàng của bạn đã được tiếp nhận
            </Title>
            <div className="mt-4">
              {currentOrders.map((order: any) => (
                <div key={order._id} className="mb-4">
                  <div className="flex justify-between">
                    <Text
                      className="font-bold cursor-pointer text-blue-600"
                      onClick={() => handleOrderClick(order._id)} // Thêm sự kiện nhấn
                    >
                      Mã đơn hàng: {order.invoiceId}
                    </Text>
                  </div>
                  <div className="flex justify-between">
                    <Text>Ngày:</Text>
                    <Text className="font-bold">
                      {new Date(order.createdAt).toLocaleString()}
                    </Text>
                  </div>
                  <div className="flex justify-between">
                    <Text>Tên người nhận:</Text>
                    <Text className="font-bold">{order.name}</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text>SĐT người nhận:</Text>
                    <Text className="font-bold">{order.phone}</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text>Địa chỉ giao hàng:</Text>
                    <Text className="font-bold">{order.address}</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text>Tổng cộng:</Text>
                    <Text className="font-bold">{order.totalPrice}₫</Text>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OrderPage;
