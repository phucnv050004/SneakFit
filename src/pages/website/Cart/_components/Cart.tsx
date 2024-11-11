import { useCart } from "@/contexts/cart";
import { useProductCart } from "@/hooks/useProductCart";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart } = useCart();
  const { removeToCart } = useProductCart();
  const totalPrice = cart && cart.products
    ? cart.products.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      )
    : 0;

  return (
    <>
      <h1 className="text-3xl md:text-5xl font-bold mt-4 text-center">
        Giỏ hàng
      </h1>
      <div className="container mx-auto mt-4 px-4 md:px-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-20">
          {cart && cart.products.length > 0 ? (
            <div className="w-full bg-white p-4 md:p-8 rounded-lg md:border md:rounded-lg md:shadow-lg ">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-8/12 pr-4 mb-6 md:mb-0">
                  <div className="cart-items space-y-4">
                    {cart.products.map((item) => (
                      <div
                        key={item.product._id}
                        className="cart-item flex flex-col md:flex-row items-center justify-between bg-gray-50 p-4 shadow-sm rounded-lg"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="w-24 h-24 object-cover"
                        />
                        <div className="flex-1 text-center md:text-left mt-2 md:mt-0 md:ml-4">
                          <h4 className="text-lg font-semibold">
                            {item.product.title}
                          </h4>
                          <p className="text-gray-600">
                            Số lượng: {item.quantity}
                          </p>
                          <p className="text-red-500 font-semibold">
                            {item.product.price.toLocaleString()} ₫
                          </p>
                        </div>
                        <button
                          className="mt-4 md:mt-0 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                          onClick={() => removeToCart(item.product._id)}
                        >
                          Xóa
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-4/12 h-auto p-4 md:border md:rounded-lg md:shadow-lg bg-white">
                  <div className="order-info bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">
                      
                    </h3>
                    <p className="text-lg mb-2">
                      Tổng tiền:{" "}
                      <span className="font-semibold text-red-500">
                        {totalPrice.toLocaleString()} ₫
                      </span>
                    </p>
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
