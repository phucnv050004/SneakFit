import { TNews } from "@/interfaces/TNews";
import { Breadcrumb, Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState<TNews[]>([]);

  const getnews = async () => {
    try {
      const { data } = await axios.get("/articles");
      console.log(data);
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getnews();
  }, []);

  // const products = [
  //   {
  //     id: 1,
  //     title: "CONVERSE RENEW CRATER VÀ SỰ CHUYỂN ĐỔI PHÁT TRIỂN VỚI BỀN VỮNG",
  //     date: "04 Thg 11 2021",
  //     category: "THEME SHOES",
  //     description: "Khác với việc chìm đắm trong các hạng mục “đại hạ giá”…",
  //     imageUrl: "https://placehold.co/300x200",
  //   },
  //   {
  //     id: 2,
  //     title: "CONVERSE X KIM JONES",
  //     date: "04 Thg 11 2021",
  //     category: "THEME SHOES",
  //     description: "Khác với việc chìm đắm trong các hạng mục “đại hạ giá”…",
  //     imageUrl: "https://placehold.co/300x200",
  //   },
  //   {
  //     id: 3,
  //     title: "BẮT TAY CÙNG HAI NHÃN STREETWEAR LỚN",
  //     date: "04 Thg 11 2021",
  //     category: "THEME SHOES",
  //     description: "Khác với việc chìm đắm trong các hạng mục “đại hạ giá”…",
  //     imageUrl: "https://placehold.co/300x200",
  //   },
  //   {
  //     id: 4,
  //     title: "CONVERSE X GOLF WANG “FLAMES”",
  //     date: "04 Thg 11 2021",
  //     category: "THEME SHOES",
  //     description: "Khác với việc chìm đắm trong các hạng mục “đại hạ giá”…",
  //     imageUrl: "https://placehold.co/300x200",
  //   },
  //   {
  //     id: 5,
  //     title: "CONVERSE X GOLF WANG “FLAMES”",
  //     date: "04 Thg 11 2021",
  //     category: "THEME SHOES",
  //     description: "Khác với việc chìm đắm trong các hạng mục “đại hạ giá”…",
  //     imageUrl: "https://placehold.co/300x200",
  //   },
  //   {
  //     id: 6,
  //     title: "CONVERSE X GOLF WANG “FLAMES”",
  //     date: "04 Thg 11 2021",
  //     category: "THEME SHOES",
  //     description: "Khác với việc chìm đắm trong các hạng mục “đại hạ giá”…",
  //     imageUrl: "https://placehold.co/300x200",
  //   },
  //   {
  //     id: 7,
  //     title: "CONVERSE X GOLF WANG “FLAMES”",
  //     date: "04 Thg 11 2021",
  //     category: "THEME SHOES",
  //     description: "Khác với việc chìm đắm trong các hạng mục “đại hạ giá”…",
  //     imageUrl: "https://placehold.co/300x200",
  //   },
  //   {
  //     id: 8,
  //     title: "CONVERSE X GOLF WANG “FLAMES”",
  //     date: "04 Thg 11 2021",
  //     category: "THEME SHOES",
  //     description: "Khác với việc chìm đắm trong các hạng mục “đại hạ giá”…",
  //     imageUrl: "https://placehold.co/300x200",
  //   },
  // ];
  const breadcrumbItems = [
    {
      title: (
        <Link className="text-black" to="/">
          <p className="text-black">Trang chủ</p>
        </Link>
      ),
    },
    {
      title: <p className="text-black">Tin tức</p>,
    },
  ];
  return (
    <>
      <Breadcrumb
        items={breadcrumbItems}
        className="text-black mt-[20px] ml-[2%] text-sm md:text-base lg:text-lg"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 px-8">
        {news.map((newItem) => (
          <Link to={`/article/${newItem._id}`}>
            <Card
              key={newItem.id}
              cover={
                <img
                  src={newItem.images}
                  alt={newItem.title}
                  className="w-full h-48 object-cover"
                />
              }
              className="bg-card rounded-lg shadow-md overflow-hidden"
            >
              <Card.Meta
                title={<h3 className="text-lg font-semibold break-words whitespace-normal">{newItem.title}</h3>}
                description={
                  <>
                    <p className="text-muted-foreground text-sm">
                      {newItem.date}
                    </p>
                    <p className="text-secondary">{newItem.category}</p>
                    <p className="text-muted-foreground">{newItem.description}</p>
                  </>
                }
              />
            </Card>
          </Link>

        ))}
      </div>
    </>
  );
};

export default News;
