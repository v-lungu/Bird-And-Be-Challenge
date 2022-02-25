import React from "react";
import Product from "./Product";

function Products({ products, cart, setCart }) {
  return (
    <div className="Products">
      {products.map((product, index) => (
        <Product
          product={product}
          cart={cart}
          index={index}
          setCart={setCart}
        />
      ))}
    </div>
  );
}

export default Products;
