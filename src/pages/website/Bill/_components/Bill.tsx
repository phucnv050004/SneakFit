import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

const BillPage = () => {
  const navigate = useNavigate();

  // Dữ liệu giỏ hàng tự tạo
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      title: "Sản phẩm A",
      price: 100000,
      quantity: 2,
      thumbnail: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "Sản phẩm B",
      price: 200000,
      quantity: 1,
      thumbnail: "https://via.placeholder.com/100",
    },
  ]);

  // Thông tin khách hàng
  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    paymentMethod: "", // Mặc định là phương thức thanh toán COD
  });

  // Xử lý thay đổi thông tin khách hàng
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBillingDetails({
      ...billingDetails,
      [name]: value,
    });
  };

  // Xử lý thay đổi số lượng sản phẩm
  const handleQuantityChange = (id: number, increment: boolean) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: increment
              ? item.quantity + 1
              : item.quantity > 1
                ? item.quantity - 1
                : 1,
          }
        : item
    );
    setCart(updatedCart);
  };

  // Xử lý sự kiện submit form thanh toán
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Kiểm tra xem giỏ hàng có trống hay không
    if (cart.length === 0) {
      alert(
        "Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán."
      );
      return;
    }

    // Hiển thị thông báo thanh toán thành công
    alert(
      `Thanh toán thành công bằng phương thức: ${billingDetails.paymentMethod}`
    );

    navigate("/");
  };

  // Tính tổng tiền
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="container mx-auto mt-10 flex justify-center mb-10">
        <div className=" flex flex-col border border-gray-300 rounded-lg p-6 bg-white shadow-lg max-w-3xl w-full mx-auto">
          <div className="flex flex-col  ">
            {/* Thông Tin Khách Hàng */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-center">
                Thông Tin Khách Hàng
              </h4>
              <form onSubmit={handleSubmit} className="space-y-4 ">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Họ và Tên
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    name="fullName"
                    value={billingDetails.fullName}
                    onChange={handleInputChange}
                    placeholder="Nhập họ và tên"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Địa Chỉ
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    name="address"
                    value={billingDetails.address}
                    onChange={handleInputChange}
                    placeholder="Nhập địa chỉ"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Số Điện Thoại
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    name="phoneNumber"
                    value={billingDetails.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Nhập số điện thoại"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    name="email"
                    value={billingDetails.email}
                    onChange={handleInputChange}
                    placeholder="Nhập email"
                    required
                  />
                </div>

                {/* Chọn phương thức thanh toán */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Phương Thức Thanh Toán
                  </label>
                  <select
                    name="paymentMethod"
                    value={billingDetails.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="COD">Nhận Hàng Khi Thanh Toán (COD)</option>
                    <option value="CreditCard">
                      Thanh Toán Bằng Thẻ Tín Dụng
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md"
                >
                  Hoàn Tất Thanh Toán
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Chi Tiết Đơn Hàng */}
        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-lg max-w-lg w-full mr-auto">
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-xl font-bold mb-4 text-center">
                Chi Tiết Đơn Hàng
              </h4>
              <div className="p-4 bg-gray-50 rounded-md shadow">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left bg-gray-200">
                      <th className="py-2 px-3">Sản Phẩm</th>
                      <th className="py-2 px-3">Số Lượng</th>
                      <th className="py-2 px-3">Giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td className="py-2 px-3">{item.title}</td>
                        <td className="py-2 px-3">
                          <div className="flex items-center">
                            <button
                              className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                              onClick={() =>
                                handleQuantityChange(item.id, false)
                              }
                            >
                              -
                            </button>
                            <span className="px-4">{item.quantity}</span>
                            <button
                              className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                              onClick={() =>
                                handleQuantityChange(item.id, true)
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-2 px-3">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 flex justify-between font-semibold">
                  <span>Tổng Cộng:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="mt-4">
                  <button
                    className="w-full bg-gray-500 text-white py-2 rounded-md"
                    onClick={() => navigate("/cart")}
                  >
                    Quay Lại Giỏ Hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillPage;
