import React from "react";
import { BsHeart } from "react-icons/bs";

import "./ProductItem.css";

const ProductItem = (props) => {
  const { product } = props;
  const { id, title, category, description, price, rating, image } = product;

  return (
    <li className="product-item">
      <div className="item-bg">
        <img src={image} alt={title} className="product-image" />
      </div>
      <h4 className="title">{title}</h4>
      <div className="price-section">
        <p className="price">
          Rs <span style={{ color: "#695F67" }}>{price}</span>
        </p>
        <BsHeart />
      </div>
    </li>
  );
};

export default ProductItem;
