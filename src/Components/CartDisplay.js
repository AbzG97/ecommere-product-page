import React from "react";
import styled from "styled-components";
import ItemInCart from "./ItemInCart";


function CartDisplay({ item_in_cart, setItem_in_cart }) {
  
  return (
    <StyledCartDisplay>
      <p className="cart_title">Items in cart</p>
      <hr></hr>
      {item_in_cart && 
            item_in_cart.map((item, index) => (
              <ItemInCart item={item} key={index} item_in_cart={item_in_cart} setItem_in_cart={setItem_in_cart}/>
      ))}
      

      <button className="checkout_button">Checkout</button>
    </StyledCartDisplay>
  );
}

const StyledCartDisplay = styled.div`
  text-transform: none;
  /* display: none; */
  position: absolute;
  width: 300px;
  background-color: lightcyan;
  border-radius: 15px;
  top: 10%;
  left: 72%;
  -webkit-box-shadow: 0px 0px 16px -3px #000000;
  box-shadow: 0px 0px 16px -3px #000000;
  .cart_title {
    font-weight: bold;
    text-align: left;
    padding: 0.5rem;
  }
  .checkout_button {
    align-items: center;
    background-color: orange;
    border: none;
    margin-top: 5px;
    border-radius: 10px;
    color: white;
    padding: 1rem;
    font-size: 0.75em;
    cursor: pointer;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 1rem;
  }
`;
export default CartDisplay;
