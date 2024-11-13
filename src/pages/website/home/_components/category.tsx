import { TNews } from '@/interfaces/TNews';
import { Card } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const PromotionalProducts = () => {
  const [news, setNews] = useState<TNews[]>([]);

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


  const getNews = async () => {
    try {
      const { data } = await axios.get("/articles");
      console.log(data);
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="p-4 rounded-lg mb-5 mx-4 ">
      <h2 className="text-black text-2xl font-bold ml-2 ">Bài Viết</h2>
      <Slider {...settings} className="mt-4">
        {news.map((article) => (
          <Link to={`/article/${article._id}`}>
            <div className="p-2">
              <Card
                hoverable
                cover={<img alt={article.title} src={article.images} className="w-full h-64 object-cover" />}
              >
                <h3 className="text-lg font-semibold">{article.title.substring(0, 20)}...</h3>
              </Card>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default PromotionalProducts;
