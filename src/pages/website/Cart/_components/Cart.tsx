import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pageBill from "../../Bill/pageBill";

const CartPage = () => {
  // Giả lập dữ liệu giỏ hàng
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Sản phẩm A",
      price: 500000,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "Sản phẩm B",
      price: 300000,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const [totalAmount, setTotalAmount] = useState(0);

  // Tính tổng tiền khi giỏ hàng thay đổi
  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  }, [cart]);

  // Xóa sản phẩm khỏi giỏ hàng
  const handleRemoveItem = (id: any) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Xử lý sự kiện khi thanh toán
  // const handleCheckout = () => {
  //   alert("Thanh toán thành công!");
  // };

  return (
    <>
      <h1 className="text-5xl font-bold mt-4 text-center">Giỏ hàng</h1>
      <div className="container mx-auto mt-2 px-4 md:px-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-20">
          {cart.length > 0 ? (
            // Box chứa cả giỏ hàng và thông tin đơn hàng
            <div className="w-full  bg-white p-8  rounded-lg">
              <div className="flex  ">
                {/* Phần giỏ hàng (tỷ lệ 8/12) */}
                <div className="w-8/12 mr-5  pr-4 w-full h-auto p-4 md:border md:rounded-lg md:shadow-lg bg-white">
                  <div className="cart-items space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="cart-item flex justify-between items-center bg-gray-50 p-4 shadow-sm rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-24 h-24 object-cover"
                        />
                        <div className="flex-1 ml-4">
                          <h4 className="text-lg font-semibold">
                            {item.title}
                          </h4>
                          <p className="text-gray-600">
                            Số lượng: {item.quantity}
                          </p>
                          <p className="text-red-500 font-semibold">
                            {item.price.toLocaleString()} VND
                          </p>
                        </div>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          Xóa
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phần thông tin đơn hàng (tỷ lệ 4/12) */}
                <div className=" h-auto p-4 md:border md:rounded-lg md:shadow-lg bg-white">
                  <div className="order-info bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">
                      Thông tin đơn hàng
                    </h3>
                    <p className="text-lg mb-2">
                      Tổng tiền:{" "}
                      <span className="font-semibold text-red-500">
                        {totalAmount.toLocaleString()} VND
                      </span>
                    </p>
                    <label className="flex items-center mb-4">
                      <input type="checkbox" className="mr-2" />
                      Xuất hóa đơn
                    </label>
                    <textarea
                      className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                      placeholder="Ghi chú đơn hàng"
                    ></textarea>
                    <Link
                      to={"/bill"}
                      className="bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800"
                    >
                      THANH TOÁN NGAY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>
              Giỏ hàng của bạn đang trống. Mời bạn mua thêm sản phẩm{" "}
              <a href="/" className="text-blue-500 underline">
                tại đây
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
