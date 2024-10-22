import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import Slider from "react-slick";
import { any } from "zod";

// Nút tùy chỉnh cho việc điều hướng Previous
function PrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <button
      className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-10 h-10 flex justify-center items-center"
      onClick={onClick}
    >
      <LeftOutlined className="text-xl" /> {/* Biểu tượng mũi tên trái */}
    </button>
  );
}

// Nút tùy chỉnh cho việc điều hướng Next
function NextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <button
      className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-10 h-10 flex justify-center items-center"
      onClick={onClick}
    >
      <RightOutlined className="text-xl" />
      {/* Biểu tượng mũi tên phải */}
    </button>
  );
}

export default function ProductViewed() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Hiển thị 3 sản phẩm cùng lúc
    slidesToScroll: 1, // Scroll từng sản phẩm một
    nextArrow: <NextArrow />, // Thêm nút điều hướng Next
    prevArrow: <PrevArrow />, // Thêm nút điều hướng Previous
    centerMode: true,
    centerPadding: "5px",
    responsive: [
      {
        breakpoint: 1024, // Màn hình lớn
        settings: {
          slidesToShow: 3, // Hiển thị 3 sản phẩm
        },
      },
      {
        breakpoint: 768, // Màn hình trung bình (tablet)
        settings: {
          slidesToShow: 2, // Hiển thị 2 sản phẩm
        },
      },
      {
        breakpoint: 640, // Màn hình nhỏ (mobile)
        settings: {
          slidesToShow: 1, // Hiển thị 1 sản phẩm
        },
      },
    ],
  };

  return (
    <div className="container   md:px-16  ">
      <div className="container mx-auto px-20 relative mt-10 rounded-lg p-4 mb-8 md:border md:rounded-lg md:shadow-lg bg-white pb-10    ">
        <h2 className="text-2xl font-bold mb-4">SẢN PHẨM ĐÃ XEM</h2>
        <Slider {...settings}>
          <div className="border mx-5 p-2 rounded-lg shadow-md w-full max-w-xs h-80 mb-10">
            <img
              src="https://product.hstatic.net/200000525917/product/air-jordan-1-mid-white-shadow-55_463d02eab3984bdbb5db82e414a067d0_9876d5096d4f4eb297acf6435e833702_master.png"
              alt="Product 1"
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="text-sm font-semibold">
              Giày Adidas Forum Exhibit Mid 'Cream Pink' H01922
            </h3>
            <p className="text-red-500 text-lg font-bold">3,900,000₫</p>
            <p className="text-gray-500 text-sm line-through">4,500,000₫</p>
          </div>
          <div className="border  p-2 rounded-lg shadow-md w-full max-w-xs h-80 mb-10">
            <img
              src="https://product.hstatic.net/200000525917/product/898584_01.jpg_3fc1d70bb8844be8a4a1d72b2e301832_5fcdc3be2c4742f286444a59a1f548e4_master.png"
              alt="Product 2"
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="text-sm font-semibold">
              Giày Adidas Forum Exhibit Mid 'Green White' H01921
            </h3>
            <p className="text-red-500 text-lg font-bold">390,000,000₫</p>
          </div>
          <div className="border  p-2 rounded-lg shadow-md w-full max-w-xs h-80 mb-10">
            <img
              src="https://product.hstatic.net/200000525917/product/screenshot_2022.05.31_17.51.10.960_8d8bb764f1fe4a65b4461282c788e06c_bafa22c79d7e430a9bafa3bb92d7e22b_grande.png"
              alt="Product 3"
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="text-sm font-semibold">
              Giày Adidas Forum Exhibit Mid 'White Halo Mint' GZ5388
            </h3>
            <p className="text-red-500 text-lg font-bold">390,000,000₫</p>
          </div>
          <div className="border   p-2 rounded-lg shadow-md w-full max-w-xs h-80 mb-10">
            <img
              src="https://product.hstatic.net/200000525917/product/screenshot_2022.05.31_17.51.10.960_8d8bb764f1fe4a65b4461282c788e06c_bafa22c79d7e430a9bafa3bb92d7e22b_grande.png"
              alt="Product 4"
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="text-sm font-semibold">
              Giày Adidas Forum Exhibit Mid GW8921
            </h3>
            <p className="text-red-500 text-lg font-bold">590,000,000₫</p>
          </div>
          <div className="border  p-2 rounded-lg shadow-md w-full max-w-xs h-80 mb-10">
            <img
              src="https://product.hstatic.net/200000525917/product/screenshot_2022.05.31_17.51.10.960_8d8bb764f1fe4a65b4461282c788e06c_bafa22c79d7e430a9bafa3bb92d7e22b_grande.png"
              alt="Product 5"
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="text-sm font-semibold">
              Giày Adidas Forum High 'Xiangi' H04236
            </h3>
            <p className="text-red-500 text-lg font-bold">2,900,000₫</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
