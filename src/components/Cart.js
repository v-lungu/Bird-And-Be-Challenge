import React from "react";
import styled from "styled-components";
import CartProduct from "./CartProduct";

function Cart({ cartValue, length, setCart }) {
  const checkoutHandler = (e) => {
    let reset = new Array(length).fill(false);
    setCart(reset);
  };

  return (
    <CartPanel className="Cart">
      <h2>Total: ${cartValue}.00</h2>
      <button onClick={checkoutHandler}>Checkout</button>
    </CartPanel>
  );
}

const CartPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: aliceblue;
  margin: 2rem;
  padding: 2rem;
  width: 50vw;
`;

export default Cart;
