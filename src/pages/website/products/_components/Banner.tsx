import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const Banner = () => {
  const breadcrumbItems = [
    {
      title: (
        <Link className="text-white" to="/">
          <p className="text-white">Trang chủ</p>
        </Link>
      ),
    },
    {
      title: <p className="text-white">Tất cả sản phẩm</p>,
    },
  ];
  return (
    <div>
      <div className="w-full  mx-auto relative    ">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Image */}
        <div className="w-full h-auto">
          <img
            src="https://theme.hstatic.net/200000306687/1000886682/14/home_about_bot.png?v=153"
            alt="Banner"
            className="w-full lg:h-[500px] h-auto object-cover object-center md:object-[center_top] overflow-hidden shadow-lg"
            style={{ aspectRatio: "16/9" }}
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <h1 className="text-white text-base md:text-2xl lg:text-3xl font-bold">
            SẢN PHẨM
          </h1>
          <Breadcrumb
            items={breadcrumbItems}
            className="text-white mt-2 text-sm md:text-base lg:text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
