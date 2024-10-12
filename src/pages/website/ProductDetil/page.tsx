import React from "react";
import ProductDetail from "./_components/ProductDetail";
import Evaluate from "./_components/Evalute";
import RelatedProduct from "./_components/RelatedProduct";

const pageDetail = () => {
  return (
    <div>
      <ProductDetail />
      <Evaluate />
      <RelatedProduct />
    </div>
  );
};

export default pageDetail;
