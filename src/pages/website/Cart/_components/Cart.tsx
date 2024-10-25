import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pageBill from "../../Bill/pageBill";

const CartPage = () => {
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

  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  }, [cart]);

  const handleRemoveItem = (id: any) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };
  const handleIncreaseQuantity = (id: any) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (id:any) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <>
      <h1 className="text-3xl md:text-5xl font-bold mt-4 text-center">
        Giỏ hàng
      </h1>
      <div className="container mx-auto mt-4 px-4 md:px-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-20">
          {cart.length > 0 ? (
            <div className="w-full bg-white p-4 md:p-8 rounded-lg md:border md:rounded-lg md:shadow-lg bg-white">
              <div className="flex flex-col md:flex-row">
                {/* Phần giỏ hàng (linh hoạt với tỷ lệ màn hình) */}
                <div className="w-full md:w-8/12 pr-4 mb-6 md:mb-0">
                  <div className="cart-items space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="cart-item flex flex-col md:flex-row items-center justify-between bg-gray-50 p-4 shadow-sm rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-24 h-24 object-cover"
                        />
                        <div className="flex-1 text-center md:text-left mt-2 md:mt-0 md:ml-4">
                          <h4 className="text-lg font-semibold">
                            {item.title}
                          </h4>
                          <p className="text-gray-600">
                            Số lượng: {item.quantity}
                          </p>
                          <p className="text-red-500 font-semibold">
                            {item.price.toLocaleString()} ₫
                          </p>
                          <div className="flex items-center justify-center md:justify-start mt-2">
                            <button
                              className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                              onClick={() => handleDecreaseQuantity(item.id)}
                            >
                              -
                            </button>
                            <span className="mx-4">{item.quantity}</span>
                            <button
                              className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                              onClick={() => handleIncreaseQuantity(item.id)}
                            >
                              +
                            </button>
                        </div>
                        </div>
                        <button
                          className="mt-4 md:mt-0 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          Xóa
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phần thông tin đơn hàng */}
                <div className="w-full md:w-4/12 h-auto p-4 md:border md:rounded-lg md:shadow-lg bg-white">
                  <div className="order-info bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">
                      Thông tin đơn hàng
                    </h3>
                    <p className="text-lg mb-2">
                      Tổng tiền:{" "}
                      <span className="font-semibold text-red-500">
                        {totalAmount.toLocaleString()} ₫
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
                      className="block text-center bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800"
                    >
                      THANH TOÁN NGAY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center">
              Giỏ hàng của bạn đang trống. Mời bạn mua thêm sản phẩm{" "}
              <Link to="/" className="text-blue-500 underline">
                tại đây
              </Link>
              .
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
