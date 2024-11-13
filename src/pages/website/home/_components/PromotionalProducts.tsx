import { Card, Badge } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { TProduct } from '@/interfaces/TProduct';
import axios from 'axios';

const PromotionalProducts = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  // Cấu hình của slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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


  const getProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-red-500 p-4 rounded-lg mt-7 mx-4">
      <h2 className="text-white text-lg font-bold">⚡ FLASH SALE</h2>
      <Slider {...settings} className="mt-4">
        {products.map((product) => (
          <div className="p-2">
            <Card
              hoverable
              cover={<img alt={product.title} src={product.image} className="w-full h-64 object-cover" />}
            >
              <h3 className="text-lg font-semibold">{product.title.substring(0, 20)}...</h3>
              <p className="text-green-600 font-bold">Giảm 31%</p>
              <p className="text-zinc-700">
                {product.price}₫ <span className="line-through text-red-500">625,000₫</span>
              </p>
              <Badge.Ribbon text="SIÊU SALE" color="green">
                <Badge.Ribbon text="GIẢM ĐẾN 30% FREESHIP" color="yellow">
                  <span></span>
                </Badge.Ribbon>
              </Badge.Ribbon>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PromotionalProducts;
