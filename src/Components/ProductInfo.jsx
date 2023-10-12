import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./ProductsProvider";
import "../Css/ProductInfo.css";

const ProductInfo = () => {
  const { products } = useProductContext();
  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-info-container">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
