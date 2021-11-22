import React from "react";
import styled from "styled-components";
import delete_item_icon from "../images/icon-delete.svg";

function ItemInCart({ item, item_in_cart, setItem_in_cart }) {
  const RemoveItemFromCart = () => {
    console.log(item);
    const filtered = item_in_cart.filter(state => state.id !== item.id );
    setItem_in_cart(filtered);
    // alert(item);
  }
  return (
    <StyledItemInCart>
      <p className="item_in_cart_title">{item["product_title"]}</p>
      <div className="item_in_cart_prices">
        <p className="item_in_cart_price">
          ${item["product_price_after_sale"]}
        </p>
        <p>x</p>
        <p className="item_in_cart_quantity">{item["quantity"]}</p>
        <p className="item_in_cart_final_price">${item["final_price"]}</p>
        <img
          className="delete_item_icon"
          onClick={RemoveItemFromCart}
          src={delete_item_icon}
          alt="delete_icon"
        />
      </div>
    </StyledItemInCart>
  );
}

const StyledItemInCart = styled.div`
    margin: 0;
    padding: .75em;
    align-items: flex-start;
    justify-content: flex-start;
    /* padding: 0.75rem; */
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    color: gray;
    .item_in_cart_title{
        margin: 0;
        margin-bottom: 5px;
        letter-spacing: 1px;
        
    }
    .item_in_cart_prices {
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        p{
            margin: 0;
            margin-right: 10px;
        }
        .item_in_cart_final_price{
            color: black;
            font-weight: bold;
        }
    }
    .delete_item_icon {
        margin-left: 6rem;
        cursor: pointer;
        /* padding: .5rem; */
        /* width: 50%; */
        
        /* transition:all .25s ease-in-out;
        
        :hover {
            border-radius: 15px;
            background-color: orange;
        } */
    }

`;

export default ItemInCart;
