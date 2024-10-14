import { Breadcrumb, Card } from "antd";
import { Link } from "react-router-dom";

const News = () => {
  const products = [
    {
      id: 1,
      title: "CONVERSE RENEW CRATER VÀ SỰ CHUYỂN ĐỔI PHÁT TRIỂN VỚI BỀN VỮNG",
      date: "04 Thg 11 2021",
      category: "THEME SHOES",
      description: "Khác với việc chìm đắm trong các hạng mục “đại hạ giá”…",
      imageUrl: "https://placehold.co/300x200",
    },
    {
      id: 2,
      title: "CONVERSE X KIM JONES",
      date: "04 Thg 11 2021",
      category: "THEME SHOES",
      description: "Khác với việc chìm đắm trong các hạng mục “đại hạ giá”…",
      imageUrl: "https://placehold.co/300x200",
    },
    {
      id: 3,
      title: "BẮT TAY CÙNG HAI NHÃN STREETWEAR LỚN",
      date: "04 Thg 11 2021",
      category: "THEME SHOES",
      description: "Khác với việc chìm đắm trong các hạng mục “đại hạ giá”…",
      imageUrl: "https://placehold.co/300x200",
    },
    {
      id: 4,
      title: "CONVERSE X GOLF WANG “FLAMES”",
      date: "04 Thg 11 2021",
      category: "THEME SHOES",
      description: "Khác với việc chìm đắm trong các hạng mục “đại hạ giá”…",
      imageUrl: "https://placehold.co/300x200",
    },
    {
      id: 5,
      title: "CONVERSE X GOLF WANG “FLAMES”",
      date: "04 Thg 11 2021",
      category: "THEME SHOES",
      description: "Khác với việc chìm đắm trong các hạng mục “đại hạ giá”…",
      imageUrl: "https://placehold.co/300x200",
    },
    {
      id: 6,
      title: "CONVERSE X GOLF WANG “FLAMES”",
      date: "04 Thg 11 2021",
      category: "THEME SHOES",
      description: "Khác với việc chìm đắm trong các hạng mục “đại hạ giá”…",
      imageUrl: "https://placehold.co/300x200",
    },
    {
      id: 7,
      title: "CONVERSE X GOLF WANG “FLAMES”",
      date: "04 Thg 11 2021",
      category: "THEME SHOES",
      description: "Khác với việc chìm đắm trong các hạng mục “đại hạ giá”…",
      imageUrl: "https://placehold.co/300x200",
    },
    {
      id: 8,
      title: "CONVERSE X GOLF WANG “FLAMES”",
      date: "04 Thg 11 2021",
      category: "THEME SHOES",
      description: "Khác với việc chìm đắm trong các hạng mục “đại hạ giá”…",
      imageUrl: "https://placehold.co/300x200",
    },
  ];
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
        {products.map((product) => (
          <Card
            key={product.id}
            cover={
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
            }
            className="bg-card rounded-lg shadow-md overflow-hidden"
          >
            <Card.Meta
              title={<h3 className="text-lg font-semibold">{product.title}</h3>}
              description={
                <>
                  <p className="text-muted-foreground text-sm">
                    {product.date}
                  </p>
                  <p className="text-secondary">{product.category}</p>
                  <p className="text-muted-foreground">{product.description}</p>
                </>
              }
            />
          </Card>
        ))}
      </div>
    </>
  );
};

export default News;
