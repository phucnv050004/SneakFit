import { useProductCart } from "@/hooks/useProductCart";
import { TProduct } from "@/interfaces/TProduct";
import { TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { addToCart } = useProductCart();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [product, setProduct] = useState<TProduct | null>(null);
  const [sizes, setSizes] = useState<{ size: number; quantity: number }[]>([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchProductAndSizes = async () => {
      try {
        const [productResponse, sizesResponse] = await Promise.all([
          axios.get(`/products/${id}`),
          axios.get(`/sizes/product/${id}`),
        ]);

        setProduct(productResponse.data);
        setSizes(sizesResponse.data); // Giả sử API trả về mảng [{ size: 40, quantity: 5 }, ...]
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm hoặc kích thước:", error);
      }
    };

    fetchProductAndSizes();
  }, [id]);
  const handleSizeChange = (size: number) => {
    setSelectedSize(size);
    console.log(size);

  };

  const handleQuantityChange = (operation: "increase" | "decrease") => {
    if (operation === "increase") {
      setQuantity(quantity + 1);
    } else if (operation === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (product: TProduct) => {
    if (quantity <= 0 || !selectedSize) return;
    addToCart({ product, quantity, size: selectedSize });
  };

  return (
    <div className="container mx-auto mt-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row gap-6 md:gap-20">
        <div className="w-full md:w-2/5 p-4 md:border md:rounded-lg md:shadow-lg bg-white">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-auto rounded-md"
          />
        </div>

        <hr className="block md:hidden my-4" />

        <div className="w-full h-auto md:w-3/5 p-4 md:border md:rounded-lg md:shadow-lg bg-white">
          <h1 className="text-2xl font-bold mb-4">{product?.title}</h1>
          <p className="text-red-500 text-xl font-bold my-2">
            {product?.price}$
          </p>

          <div className="mb-4">
            <p>Kích thước: {selectedSize || "Chọn kích thước"}</p>
            <div className="flex gap-2 mt-2">
              {sizes.map((sizeData) => (
                <button
                  key={sizeData.size}
                  className={`px-4 py-2 border rounded-md ${selectedSize === sizeData.size ? "bg-blue-500 text-white" : "bg-white text-gray-700"}`}
                  onClick={() => handleSizeChange(sizeData.size)}
                  aria-label={`Chọn kích cỡ ${sizeData.size}`}
                >
                  {sizeData.size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center mb-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded-md"
              onClick={() => handleQuantityChange("decrease")}
              aria-label="Giảm số lượng"
              disabled={quantity === 1}
            >
              -
            </button>
            <TextField
              id="outlined-basic"
              label="quantity"
              variant="outlined"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button
              className="px-4 py-2 bg-gray-200 rounded-md"
              onClick={() => handleQuantityChange("increase")}
              aria-label="Tăng số lượng"
            >
              +
            </button>
          </div>

          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            onClick={() => product && handleAddToCart(product)}
          >
            Thêm vào giỏ
          </button>
          <div>
            <p className="mt-4 ">Mô tả: {product?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
