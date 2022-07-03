import React from "react";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const params = useParams();
  const { slug } = params;
  return <p>{slug}</p>;
};

export default ProductInfo;
