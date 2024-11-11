import { TProduct } from "@/interfaces/TProduct";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CardActions } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductList = () => {
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
  return (
    <>
      <div className="mx-auto container mt-20">
        <h2 className="text-center text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] mb-8 mt-10 text-black">
          Sản phẩm mới ra mắt
        </h2>

        {/* Container sản phẩm với responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mx-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden hover:shadow-lg rounded-lg pb-3 border"
            >
              <Link to={`detail/${product._id}`}>
                <div className="relative">
                  <div className="flex transition-transform ease-in-out duration-500">
                    <img
                      src={product.image}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <FaRegEye
                    className="absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white"
                    title="Xem nhanh"
                  />
                  <span className="absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded">
                    -29%
                  </span>
                </div>
              </Link>

              <div className="mx-2 text-center space-y-2 mt-3">
                <h5 className="text-[14px] md:text-[16px] lg:text-[18px] font-medium">
                  {product.title.substring(0, 25)}...
                </h5>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                  <span className="text-[#FF0000] font-semibold">
                    {product.price}
                  </span>
                  <span className="text-[#878c8f] font-light line-through text-[12px]">
                    1,250,000₫
                  </span>
                </div>
                <button className="flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto">
                  <Link to={`/detail/${product._id}`} className="text-[12px] uppercase font-semibold">
                    xem chi tiết
                  </Link>
                
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
