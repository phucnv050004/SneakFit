import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css.css";
import { Card } from "antd";
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const CustomPrevArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      style={{
        ...style,
        width: "40px", // Kích thước của nút
        height: "40px",
        lineHeight: "50px", // Canh giữa nội dung theo chiều dọc
        color: "white", // Màu văn bản
        borderRadius: "50%", // Làm nút thành hình tròn
        display: "flex", // Sử dụng flexbox để căn giữa nội dung
        alignItems: "center", // Căn giữa theo chiều dọc
        justifyContent: "center", // Căn giữa theo chiều ngang
        zIndex: 1000, // Đảm bảo nút nằm trên các phần tử khác
        cursor: "pointer", // Con trỏ chuột để dễ sử dụng
      }}
      onClick={onClick}
    ></div>
  );
};

const CustomNextArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next`}
      style={{
        ...style,
        width: "40px",
        height: "40px",
        lineHeight: "40px",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        cursor: "pointer",
      }}
      onClick={onClick}
    ></div>
  );
};
const PromotionalProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-[1900px] mt-[50px] lg:mt-[100px] mb-10 border border-gray-300 sm:border-red-500 md:border-blue-500 lg:border-green-500 sm:border-dashed lg:border-solid">
     <div className="flex items-center justify-between space-x-8 bg-red-500 p-4">
  <button className="flex flex-row items-center md:flex-row">
    <iframe
      src="https://lottie.host/embed/58de357e-2aa4-4264-9846-8dd4d72f3249/8csrBXskgE.json"
      className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]"
      allowFullScreen
    ></iframe>
    <span className="ml-2 sm:ml-4 font-medium text-sm sm:text-lg md:text-xl lg:text-3xl text-white">
      Sản phẩm khuyến mãi
    </span>
  </button>
</div>
      <div className="mx-auto px-4 lg:px-[75px]">
        <div className="sectionContent px-2">
          <Slider {...settings} className=" py-4 ">
            {/* Item 1 */}
            <div className="item-category p-3 bg-white my-8   ">
              {" "}
              <div className="media-category effect-image">
                <a
                  href="#"
                  aria-label="Giày Nike Jordan 1 Retro High OG SP Black"
                >
                  <img
                    className="w-full"
                    src="https://product.hstatic.net/200000525917/product/air-jordan-1-retro-high-og-sp-ut_e7fa48f652764634877713ed40461226_9a3399cb9df047e59f3d4cac69d02e87_grande.png"
                    alt="loading..."
                  />
                </a>
              </div>
              <div className="title-category text-center mt-4">
                <h4 className="text-xl font-medium">
                  <a
                    href="#"
                    className="text-black no-underline font-normal"
                    aria-label="Nội thất cơ bản"
                  >
                    {/* Kiểm tra độ dài và cắt chuỗi */}
                    {window.innerWidth <= 780
                      ? "Giày Nike Jordan 1 Retro High OG SP 'Utility Stash'".slice(
                          0,
                          20
                        ) + "..."
                      : "Giày Nike Jordan 1 Retro High OG SP 'Utility Stash' DN4336-001v"}
                  </a>
                  <br />
                  <span>1.299.000đ</span>
                </h4>
                <button className="text-white bg-black w-full py-2">
                  Chọn mua
                </button>
              </div>
            </div>
            {/* Item 2 */}
            <div className="item-category p-3 bg-white my-8 ">
              {" "}
              <div className="media-category effect-image">
                <a
                  href="#"
                  aria-label="Giày Nike Jordan 1 Retro High OG SP Black"
                >
                  <img
                    className="w-full"
                    src="https://product.hstatic.net/200000525917/product/air-jordan-1-retro-high-og-sp-ut_e7fa48f652764634877713ed40461226_9a3399cb9df047e59f3d4cac69d02e87_grande.png"
                    alt="loading..."
                  />
                </a>
              </div>
              <div className="title-category text-center mt-4">
                <h4 className="text-xl font-medium">
                  <a
                    href="#"
                    className="text-black no-underline font-normal"
                    aria-label="Nội thất cơ bản"
                  >
                    {/* Kiểm tra độ dài và cắt chuỗi */}
                    {window.innerWidth <= 780
                      ? "Giày Nike Jordan 1 Retro High OG SP 'Utility Stash'".slice(
                          0,
                          20
                        ) + "..."
                      : "Giày Nike Jordan 1 Retro High OG SP 'Utility Stash' DN4336-001v"}
                  </a>
                  <br />
                  <span>1.299.000đ</span>
                </h4>
                <button className="text-white bg-black w-full py-2">
                  Chọn mua
                </button>
              </div>
            </div>
            {/* Item 3 */}
            <div className="item-category p-3 bg-white my-8 ">
              {" "}
              <div className="media-category effect-image">
                <a
                  href="#"
                  aria-label="Giày Nike Jordan 1 Retro High OG SP Black"
                >
                  <img
                    className="w-full"
                    src="https://product.hstatic.net/200000525917/product/air-jordan-1-retro-high-og-sp-ut_e7fa48f652764634877713ed40461226_9a3399cb9df047e59f3d4cac69d02e87_grande.png"
                    alt="loading..."
                  />
                </a>
              </div>
              <div className="title-category text-center mt-4">
                <h4 className="text-xl font-medium">
                  <a
                    href="#"
                    className="text-black no-underline font-normal"
                    aria-label="Nội thất cơ bản"
                  >
                    {/* Kiểm tra độ dài và cắt chuỗi */}
                    {window.innerWidth <= 780
                      ? "Giày Nike Jordan 1 Retro High OG SP 'Utility Stash'".slice(
                          0,
                          20
                        ) + "..."
                      : "Giày Nike Jordan 1 Retro High OG SP 'Utility Stash' DN4336-001v"}
                  </a>
                  <br />
                  <span>1.299.000đ</span>
                </h4>
                <button className="text-white bg-black w-full py-2">
                  Chọn mua
                </button>
              </div>
            </div>
            {/* Item 4 */}
            <div className="item-category p-3 bg-white my-8 ">
              {" "}
              <div className="media-category effect-image">
                <a
                  href="#"
                  aria-label="Giày Nike Jordan 1 Retro High OG SP Black"
                >
                  <img
                    className="w-full"
                    src="https://product.hstatic.net/200000525917/product/air-jordan-1-retro-high-og-sp-ut_e7fa48f652764634877713ed40461226_9a3399cb9df047e59f3d4cac69d02e87_grande.png"
                    alt="loading..."
                  />
                </a>
              </div>
              <div className="title-category text-center mt-4">
                <h4 className="text-xl font-medium">
                  <a
                    href="#"
                    className="text-black no-underline font-normal"
                    aria-label="Nội thất cơ bản"
                  >
                    {/* Kiểm tra độ dài và cắt chuỗi */}
                    {window.innerWidth <= 780
                      ? "Giày Nike Jordan 1 Retro High OG SP 'Utility Stash'".slice(
                          0,
                          20
                        ) + "..."
                      : "Giày Nike Jordan 1 Retro High OG SP 'Utility Stash' DN4336-001v"}
                  </a>
                  <br />
                  <span>1.299.000đ</span>
                </h4>
                <button className="text-white bg-black w-full py-2">
                  Chọn mua
                </button>
              </div>
            </div>
            {/* Item 5 */}
            <div className="item-category p-3 bg-white my-8 ">
              {" "}
              <div className="media-category effect-image">
                <a
                  href="#"
                  aria-label="Giày Nike Jordan 1 Retro High OG SP Black"
                >
                  <img
                    className="w-full"
                    src="https://product.hstatic.net/200000525917/product/air-jordan-1-retro-high-og-sp-ut_e7fa48f652764634877713ed40461226_9a3399cb9df047e59f3d4cac69d02e87_grande.png"
                    alt="loading..."
                  />
                </a>
              </div>
              <div className="title-category text-center mt-4">
                <h4 className="text-xl font-medium">
                  <a
                    href="#"
                    className="text-black no-underline font-normal"
                    aria-label="Nội thất cơ bản"
                  >
                    {/* Kiểm tra độ dài và cắt chuỗi */}
                    {window.innerWidth <= 780
                      ? "Giày Nike Jordan 1 Retro High OG SP 'Utility Stash'".slice(
                          0,
                          20
                        ) + "..."
                      : "Giày Nike Jordan 1 Retro High OG SP 'Utility Stash' DN4336-001v"}
                  </a>
                  <br />
                  <span>1.299.000đ</span>
                </h4>
                <button className="text-white bg-black w-full py-2">
                  Chọn mua
                </button>
              </div>
            </div>
            {/* Item 6 */}
            <div className="item-category p-3 bg-white my-8 ">
              {" "}
              <div className="media-category effect-image">
                <a
                  href="#"
                  aria-label="Giày Nike Jordan 1 Retro High OG SP Black"
                >
                  <img
                    className="w-full"
                    src="https://product.hstatic.net/200000525917/product/air-jordan-1-retro-high-og-sp-ut_e7fa48f652764634877713ed40461226_9a3399cb9df047e59f3d4cac69d02e87_grande.png"
                    alt="loading..."
                  />
                </a>
              </div>
              <div className="title-category text-center mt-4">
                <h4 className="text-xl font-medium">
                  <a
                    href="#"
                    className="text-black no-underline font-normal"
                    aria-label="Nội thất cơ bản"
                  >
                    {/* Kiểm tra độ dài và cắt chuỗi */}
                    {window.innerWidth <= 780
                      ? "Giày Nike Jordan 1 Retro High OG SP 'Utility Stash'".slice(
                          0,
                          20
                        ) + "..."
                      : "Giày Nike Jordan 1 Retro High OG SP 'Utility Stash' DN4336-001v"}
                  </a>
                  <br />
                  <span>1.299.000đ</span>
                </h4>
                <button className="text-white bg-black w-full py-2">
                  Chọn mua
                </button>
              </div>
            </div>
            {/* Các item khác */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PromotionalProducts;
