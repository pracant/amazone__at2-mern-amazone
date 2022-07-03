import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <h1>Feature product</h1>
      <div className="products">
        {data.products.map((product) => (
          <div key={product.slug} className="product">
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product_info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button> Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
