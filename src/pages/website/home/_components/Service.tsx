import {
  CreditCardOutlined,
  GiftOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

const Service = () => {
  const services = [
    {
      icon: <QuestionCircleOutlined className="text-2xl text-gray-600" />,
      title: "Hỗ trợ 24/7",
      description: "Hotline hỗ trợ 1900.000.XXX",
    },
    {
      icon: <GiftOutlined className="text-2xl text-gray-600" />,
      title: "Giao hàng miễn phí",
      description: "Thời gian giao hàng nhanh chóng, từ 3 - 5 ngày làm việc",
    },
    {
      icon: <CreditCardOutlined className="text-2xl text-gray-600" />,
      title: "Thanh toán đa dạng",
      description: "Chấp nhận thanh toán COD, Momo, Banking",
    },
    {
      icon: <ReloadOutlined className="text-2xl text-gray-600" />,
      title: "Đổi trả hàng dễ dàng",
      description: "Thời gian trả hàng lên tới 30 ngày",
    },
  ];

  return (
    <>
   <div className="relative w-full overflow-hidden mb-5 mt-10 mx-auto max-w-[1900px]">
  <img
    src="https://file.hstatic.net/200000525917/file/banner-wd-desk_eb2d618082d64dd2b38af284e3a0a9ce_2048x2048.jpg"
    alt=""
    className="w-full h-auto"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 px-2 mb-">
    <h5 className="text-xl md:text-4xl font-bold mb-4 md:mb-6 ">Sản phẩm tuyệt vời</h5>
    <p className="text-base md:text-lg mb-4 md:mb-6 text-center">
      Đừng bỏ lỡ cơ hội sở hữu sản phẩm của chúng tôi
    </p>
    <a
      href="#mua-ngay"
      className="bg-red-500 text-white px-4 py-2 md:px-6 md:py-3  rounded-full hover:bg-red-600 transition duration-300 no-underline text-sm md:text-base"
    >
      Mua ngay
    </a>
  </div>
</div>

      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 p-2 text-center mb-20 border ">
        {services.map((service, index) => (
          <div key={index}>
            <div className="flex justify-center mb-4 p-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                {service.icon}
              </div>
            </div>
            <h3 className="text-black text-lg">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
