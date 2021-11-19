import React from "react";
import styled from "styled-components";
function CartDisplay() {
  return (
    <StyledCartDisplay>
      <p>Items in cart</p>
      <button className="checkout_button">Checkout</button>
    </StyledCartDisplay>
  );
}

const StyledCartDisplay = styled.div`
  font-weight: 300;
  text-transform: none;
  display: none;
  position: absolute;
  width: 180px;
  background-color: lightgreen;
  .cart_display {
    text-transform: none;
    /* display: none; */
    position: absolute;
    width: 300px;
    background-color: lightcyan;
    border-radius: 15px;
    top: 11%;
    left: 72%;
    -webkit-box-shadow: 0px 0px 16px -3px #000000;
    box-shadow: 0px 0px 16px -3px #000000;
    .cart_title {
      font-weight: bold;
      text-align: left;
      padding: 0.5rem;
    }
  }
`;
export default CartDisplay;

{
  /* <div className="cart_display">
          <p className="cart_title">Cart</p>
          <hr></hr> 
         
        </div> } */
}
