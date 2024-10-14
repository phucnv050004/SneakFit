import React, { useState } from "react";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState<number>(40); // Lựa chọn kích cỡ mặc định
  const [quantity, setQuantity] = useState<number>(1); // Số lượng sản phẩm

  // Hàm để thay đổi kích cỡ
  const handleSizeChange = (size: number) => {
    setSelectedSize(size);
  };

  // Hàm để thay đổi số lượng
  const handleQuantityChange = (operation: "increase" | "decrease") => {
    if (operation === "increase") {
      setQuantity(quantity + 1);
    } else if (operation === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="container mx-auto mt-10 px-4 md:px-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-20">
          {/* Hộp chứa hình ảnh sản phẩm (Chỉ hiển thị border trên màn hình lớn) */}
          <div className="w-full md:w-2/5 p-4 md:border md:rounded-lg md:shadow-lg bg-white">
            <img
              src="https://product.hstatic.net/200000525917/product/ipad_adidas-forum-exhibit-mid-fo_c13e8d752dda4eb096915727bb1242ce_8b5844d0c5154a49a2a89544492d2b75_grande.jpg"
              alt="Giày Adidas Forum Exhibit"
              className="w-full h-auto rounded-md"
            />
            <div className="flex gap-2 mt-4">
              <img
                src="https://product.hstatic.net/200000525917/product/s-l1600_bbd77165290f4f3b9534ae61d3aec45f_20f0515abf154132b4603398c5a5ebcb_grande.jpg"
                alt="Thumbnail 1"
                className="w-16 h-16 object-cover border rounded-md"
              />
              <img
                src="https://product.hstatic.net/200000525917/product/s-l1600_bbd77165290f4f3b9534ae61d3aec45f_20f0515abf154132b4603398c5a5ebcb_grande.jpg"
                alt="Thumbnail 2"
                className="w-16 h-16 object-cover border rounded-md"
              />
            </div>
          </div>

          {/* Dấu gạch ngang ngăn cách (hiển thị trên mobile) */}
          <hr className="block md:hidden my-4" />

          {/* Hộp chứa thông tin sản phẩm (Chỉ hiển thị border trên màn hình lớn) */}
          <div className="w-full h-auto md:w-3/5 p-4 md:border md:rounded-lg md:shadow-lg bg-white">
            <h1 className="text-2xl font-bold mb-4">
              Giày Adidas Forum Exhibit Mid 'Green White' H01922
            </h1>
            <p className="text-gray-500">
              Thương hiệu: <span className="font-semibold">Adidas</span>
            </p>
            <p className="text-red-500 text-xl font-bold my-2">390,000,000₫</p>

            <div className="mb-4">
              <span className="text-gray-700">Màu sắc: Green White</span>
            </div>

            <div className="mb-4">
              <p>Kích thước: {selectedSize}</p>
              <div className="flex gap-2 mt-2">
                {[40, 41, 42].map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-md ${selectedSize === size ? "bg-blue-500 text-white" : "bg-white text-gray-700"}`}
                    onClick={() => handleSizeChange(size)}
                    aria-label={`Chọn kích cỡ ${size}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center mb-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded-md"
                onClick={() => handleQuantityChange("decrease")}
                aria-label="Giảm số lượng"
                disabled={quantity === 1}
              >
                -
              </button>
              <span className="mx-4">{quantity}</span>
              <button
                className="px-4 py-2 bg-gray-200 rounded-md"
                onClick={() => handleQuantityChange("increase")}
                aria-label="Tăng số lượng"
              >
                +
              </button>
            </div>

            <div className="flex gap-4 mb-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Thêm vào giỏ
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
                Mua ngay
              </button>
            </div>

            {/* Mô tả sản phẩm */}
            <div className="mb-4">
              <h2 className="text-lg font-bold">Mô tả sản phẩm</h2>
              <p>
                Mua Giày Adidas Forum Exhibit Mid 'Green White' H01921 chính
                hãng 100% có sẵn tại Jordan Viet Nam. Giao hàng miễn phí trong 1
                ngày. Cam kết đến tiền X5 nếu phát hiện Fake. Đổi trả miễn phí
                size. FREE vệ sinh giày trọn đời. MUA NGAY!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
