import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const breadcrumbItems = [
  {
    title: (
      <Link className="text-black" to="/">
        <p className="text-black">Trang chủ</p>
      </Link>
    ),
  },
  {
    title: <p className="text-black">Liên hệ</p>,
  },
];
const Banner = () => {
  return (
    <>
       <Breadcrumb
            items={breadcrumbItems}
            className="text-black mt-[20px] ml-[2%] text-sm md:text-base lg:text-lg"
          />
      <div className="container mx-auto max-w-[1900px] px-6 lg:px-[75px] mt-10 md:mt-20">
        <div className="line-banner-bottom flex flex-col lg:flex-row mb-8">
          <div className="col-banner media-banner flex-1 mb-4 lg:mb-0">
            <a href="" aria-label="Trang trí phòng khách">
              <picture>
                <img
                  className="w-full lazyloaded"
                  src="https://theme.hstatic.net/200000306687/1000886682/14/page-about-new-image-1.png?v=153"
                  alt="Trang trí phòng khách"
                />
              </picture>
            </a>
          </div>
          <div className="col-banner text-banner flex-1 lg:ml-4 my-auto">
            <div className="info-banner-bottom text-center p-5   ">
              <div className="title-text-banner mb-4 text-center">
                <h4 className="lg:text-5xl text-2xl font-normal text-black">
                  <a href="" aria-label="Trang trí phòng khách">
                    Về Chúng Tôi
                  </a>
                </h4>
              </div>
              <p className="text-[#252a2b] lg:text-[18px] text-sm mt-2 leading-relaxed mx-5">
                Hệ thống giày F1GENZ-SHOES chuyên thiết kế và kinh doanh các mặt
                hàng giày dép cho giới trẻ, là cấu nối cho bạn trẻ cả nước tiếp
                cận với xu hướng thời trang giày trên thế giới. "Chúng tôi mang
                đến sự khác biệt!" - Cùng với xu hướng thời trang của thế giới
                Hệ thống F1GEN-SHOES đã và đang không ngừng đổi mới để mang đến
                cho các bạn trẻ các mẫu giày thời trang độc đáo, mới lạ, để tiên
                phong cho một phong cách thời trang mới, một phong cách biểu
                tượng cho giới trẻ trên cả nước. Vì thế F1GEN-SHOES đang dần trở
                thành một cái tên quen thuộc với tất cả các bạn trẻ với những
                phong cách thời trang hoàn toàn mới lạ, khẳng định cá tính của
                chính mình.
              </p>
            </div>
          </div>
        </div>
        <div className="line-banner-bottom flex flex-col lg:flex-row">
          <div className="col-banner text-banner text-center flex-1 lg:mr-4">
            <div className="info-banner-bottom  p-5">
              <div className="title-text-banner mb-4">
                <h4 className="lg:text-5xl text-2xl font-normal text-black">
                  <a href="" aria-label="Trang trí sân vườn">
                    Liên hệ
                  </a>
                </h4>
              </div>
              <p className="text-[#252a2b] lg:text-[18px] text-sm mt-2 leading-relaxed mx-5">
                Là một tín đồ mê giày Converse thì bạn không thể không biết đến
                shop giày F1GENZ-SHOES. Đây là một trong những shop bán giày thể
                thao Converse VNXK có mẫu mã đa dạng và nổi tiếng nhất nhì tại
                Sài Gòn với mức giá khá rẻ. Tại đây không chỉ có mỗi Converse,
                bạn cũng có thể tìm thấy những đôi giày custom khác nhau.
              </p>
              <p className="text-[#252a2b] lg:text-[18px] text-sm mt-2 leading-relaxed mx-5">
                SneakFit có địa chỉ nằm tại: 182 Lê Đại Hành, P.15, Quận 11,
                Tp.hcm
              </p>
            </div>
          </div>
          <div className="col-banner media-banner flex-1 mt-4 lg:-mt-8 lg:-ml-7">
            <a href="" aria-label="Trang trí sân vườn">
              <picture>
                <img
                  className="w-full lazyloaded"
                  src="https://theme.hstatic.net/200000306687/1000886682/14/page-about-new-image-2.png?v=153"
                  alt="Trang trí sân vườn"
                />
              </picture>
            </a>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Banner;
