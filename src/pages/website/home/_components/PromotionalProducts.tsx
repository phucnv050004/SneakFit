import { Card, Badge } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PromotionalProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Số sản phẩm hiển thị cùng lúc
    slidesToScroll: 1, // Số sản phẩm cuộn mỗi lần
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-red-500 p-4 rounded-lg mt-7 mx-4 ">
      <h2 className="text-white text-lg font-bold">⚡ FLASH SALE</h2>
      <Slider {...settings} className="mt-4">
        <div className="p-2">
          <Card
            hoverable
            cover={<img alt="SVR Gel Rửa Mặt" src="https://openui.fly.dev/openui/300x300.svg?text=SVR" className="w-full h-48 object-cover" />}
          >
            <h3 className="text-lg font-semibold">SVR</h3>
            <p className="text-green-600 font-bold">Giảm 31%</p>
            <p className="text-zinc-700">
              429,000₫ <span className="line-through text-red-500">625,000₫</span>
            </p>
            <Badge.Ribbon text="SIÊU SALE" color="green">
              <Badge.Ribbon text="GIẢM ĐẾN 30% FREESHIP" color="yellow">
                <span></span>
              </Badge.Ribbon>
            </Badge.Ribbon>
          </Card>
        </div>

        <div className="p-2">
          <Card
            hoverable
            cover={<img alt="Maybelline Kem Che Khuyết Điểm" src="https://openui.fly.dev/openui/300x300.svg?text=Maybelline" className="w-full h-48 object-cover" />}
          >
            <h3 className="text-lg font-semibold">Maybelline</h3>
            <p className="text-green-600 font-bold">Giảm 49%</p>
            <p className="text-zinc-700">
              600,000₫ <span className="line-through text-red-500">800,000₫</span>
            </p>
            <Badge.Ribbon text="SIÊU SALE" color="green">
              <Badge.Ribbon text="GIẢM ĐẾN 30% FREESHIP" color="yellow">
                <span></span>
              </Badge.Ribbon>
            </Badge.Ribbon>
          </Card>
        </div>

        <div className="p-2">
          <Card
            hoverable
            cover={<img alt="Paula's Choice Kem Dưỡng" src="https://openui.fly.dev/openui/300x300.svg?text=Paula's" className="w-full h-48 object-cover" />}
          >
            <h3 className="text-lg font-semibold">Paula's Choice</h3>
            <p className="text-green-600 font-bold">Giảm 25%</p>
            <p className="text-zinc-700">
              600,000₫ <span className="line-through text-red-500">800,000₫</span>
            </p>
            <Badge.Ribbon text="SIÊU SALE" color="green">
              <Badge.Ribbon text="GIẢM ĐẾN 30% FREESHIP" color="yellow">
                <span></span>
              </Badge.Ribbon>
            </Badge.Ribbon>
          </Card>
        </div>

        <div className="p-2">
          <Card
            hoverable
            cover={<img alt="Maybelline Kem Nền" src="https://openui.fly.dev/openui/300x300.svg?text=Maybelline" className="w-full h-48 object-cover" />}
          >
            <h3 className="text-lg font-semibold">Maybelline</h3>
            <p className="text-green-600 font-bold">Giảm 42%</p>
            <p className="text-zinc-700">
              180,000₫ <span className="line-through text-red-500">240,000₫</span>
            </p>
            <Badge.Ribbon text="SIÊU SALE" color="green">
              <Badge.Ribbon text="GIẢM ĐẾN 30% FREESHIP" color="yellow">
                <span></span>
              </Badge.Ribbon>
            </Badge.Ribbon>
          </Card>
        </div>

        <div className="p-2">
          <Card
            hoverable
            cover={<img alt="Kiehl's Nước Cân Bằng" src="https://openui.fly.dev/openui/300x300.svg?text=Kiehl's" className="w-full h-48 object-cover" />}
          >
            <h3 className="text-lg font-semibold">Kiehl's</h3>
            <p className="text-green-600 font-bold">Giảm 25%</p>
            <p className="text-zinc-700">1,200,000₫</p>
            <Badge.Ribbon text="SIÊU SALE" color="green">
              <Badge.Ribbon text="GIẢM ĐẾN 30% FREESHIP" color="yellow">
                <span></span>
              </Badge.Ribbon>
            </Badge.Ribbon>
          </Card>
        </div>
      </Slider>
    </div>
  );
};

export default PromotionalProducts;
