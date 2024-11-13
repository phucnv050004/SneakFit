import { TProduct } from "@/interfaces/TProduct";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";

// Nút tùy chỉnh cho việc điều hướng Previous
function PrevArrow(props: any) {
  const { onClick } = props;
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
  const { onClick } = props;
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

export default function RelatedProduct() {
  const [products, setProducts] = useState<TProduct[]>([]);

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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Hiển thị 4 sản phẩm cùng lúc
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
    <div className="container mx-auto px-20 relative ">
      <h2 className="text-2xl font-bold mb-4">Sản phẩm khác</h2>
      <Slider {...settings}>
        {products.map((product) => (
           <div className="border p-2 rounded-lg shadow-md w-full max-w-xs h-80 mb-10">
           <img
             src={product.image}
             alt="Product 1"
             className="w-full h-48 object-cover mb-2"
           />
           <h3 className="text-sm font-semibold">
             {product.title}
           </h3>
           <p className="text-red-500 text-lg font-bold">{product.price}₫</p>
           <p className="text-gray-500 text-sm line-through">4,500,000₫</p>
         </div>
        ))}
      </Slider>
    </div>
  );
}
