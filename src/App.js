import { useEffect, useState } from "react";
import styled from "styled-components";

import Products from "./components/Products";
import Cart from "./components/Cart";
import GlobalStyle from "./components/GlobalStyles";

function App() {
  //States and variables
  const [products, setProducts] = useState();
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState(0);

  let length;

  const getProducts = async () => {
    const response = await fetch(
      "https://web-ge8buw2ff-bird-and-be.vercel.app/api/interview"
    );
    let data = await response.json();
    data = data.products;
    setProducts(data);
    length = await data.length;
    let a = new Array(length).fill(false);
    setCart(a);
    return data;
  };

  useEffect(() => {
    let newValue = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]) {
        newValue += products[i].price;
      }
    }
    setCartValue(newValue);
  }, [cart]);

  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <div />;
  } else {
    return (
      <Main className="App">
        <GlobalStyle />
        <Products products={products} cart={cart} setCart={setCart} />
        <Cart cartValue={cartValue} length={length} setCart={setCart} />
      </Main>
    );
  }
}

//Styled Components
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #e5e5e5;
`;

export default App;
