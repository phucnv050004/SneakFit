import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const BillPage = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      title: "Sản phẩm A",
      price: 100000,
      quantity: 2,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "Sản phẩm B",
      price: 200000,
      quantity: 1,
      image: "https://picsum.photos/200/300",
    },
  ]);

  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    paymentMethod: "COD", // Default payment method
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBillingDetails({
      ...billingDetails,
      [name]: value,
    });
  };

  const handleQuantityChange = (id: number, increment: boolean) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: increment
              ? item.quantity + 1
              : Math.max(item.quantity - 1, 1),
          }
        : item
    );
    setCart(updatedCart);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert(
        "Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán."
      );
      return;
    }
    alert(
      `Thanh toán thành công bằng phương thức: ${billingDetails.paymentMethod}`
    );
    navigate("/");
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-10">
        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-lg overflow-x-auto  ">
          <h4 className="text-lg font-bold mb-4 text-center  ">
            Thông Tin Khách Hàng
          </h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              name="fullName"
              value={billingDetails.fullName}
              onChange={handleInputChange}
              placeholder="Nhập họ và tên"
              required
            />
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              name="address"
              value={billingDetails.address}
              onChange={handleInputChange}
              placeholder="Nhập địa chỉ"
              required
            />
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              name="phoneNumber"
              value={billingDetails.phoneNumber}
              onChange={handleInputChange}
              placeholder="Nhập số điện thoại"
              required
            />
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              name="email"
              value={billingDetails.email}
              onChange={handleInputChange}
              placeholder="Nhập email"
              required
            />
            <select
              name="paymentMethod"
              value={billingDetails.paymentMethod}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="COD">Nhận Hàng Khi Thanh Toán (COD)</option>
              <option value="CreditCard">Thanh Toán Bằng Thẻ Tín Dụng</option>
            </select>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md"
            >
              Hoàn Tất Thanh Toán
            </button>
          </form>
        </div>

        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-lg w-full overflow-x-auto">
          <h4 className="text-lg font-bold mb-4 text-center">
            Chi Tiết Đơn Hàng
          </h4>
          
            <table className=" w-full text-sm">
              <thead>
                <tr className="text-left bg-gray-200">
                  <th className="py-2 px-3">Hình Ảnh</th>
                  <th className="py-2 px-3">Sản Phẩm</th>
                  <th className="py-2 px-3">Số Lượng</th>
                  <th className="py-2 px-3">Giá</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 px-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="py-2 px-3">{item.title}</td>
                    <td className="py-2 px-3">
                      <div className="flex items-center justify-center">
                        <button
                          className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                          onClick={() => handleQuantityChange(item.id, false)}
                        >
                          -
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                          onClick={() => handleQuantityChange(item.id, true)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-2 px-3">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.price * item.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex justify-between font-semibold">
              <span>Tổng Cộng:</span>
              <span>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(totalAmount)}
              </span>
            </div>
            <button
              className="w-full bg-gray-500 text-white py-2 rounded-md mt-4"
              onClick={() => navigate("/cart")}
            >
              Quay Lại Giỏ Hàng
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default BillPage;
