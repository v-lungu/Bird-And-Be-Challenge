import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

function Product({ product, cart, index, setCart }) {
  const [inCart, setInCart] = useState(false);

  const cartHandler = (e) => {
    let cartCopy = [...cart];
    cartCopy[index] = !cartCopy[index];
    setCart(cartCopy);
    setInCart(cartCopy[index]);
  };

  useEffect(() => {
    setInCart(cart[index]);
  }, [cart]);

  return (
    <ProductPanel className="Product">
      <TitlePanel>
        <h1>{product.name}</h1>
        <img src={product.primary_image.url_standard}></img>
      </TitlePanel>
      <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
      <button onClick={cartHandler}>
        {inCart ? "Remove from cart -- " : "Add to cart --"} ${product.price}
      </button>
    </ProductPanel>
  );
}

const ProductPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  background-color: aliceblue;
  margin: 2rem;
  padding: 2rem;
  width: 50vw;
`;

const TitlePanel = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
  background-color: aliceblue;
  padding: 2rem 0rem;
  width: 100%;
`;

export default Product;
