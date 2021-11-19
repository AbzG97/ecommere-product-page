import styled from "styled-components";
import profile_pic from "../images/image-avatar.png";
import delete_item_icon from "../images/icon-delete.svg";
import React from "react";
import CartDisplay from "./CartDisplay";

function Navbar({ item_in_cart, setItem_in_cart }) {
    const [displayCart, setDisplayCart] = React.useState(false);
    const RemoveItemFromCart = (id) => {
        console.log("clicked");
        // const filtered = item_in_cart.filter(state => state !== id );
        // if(filtered){
        //     console.log(filtered)
        // } else {
        //     console.log("not found");
        // }
        // // setItem_in_cart(filtered);
    }
  return (
    <StyledNavbar>
      <p className="nav_item" id="Logo">
        SNEAKERS
      </p>
      <p className="nav_item">Collections</p>
      <p className="nav_item">Men</p>
      <p className="nav_item">Women</p>
      <p className="nav_item">About</p>
      <p className="nav_item">Contact</p>
      <div className="cart" onMouseEnter={() => setDisplayCart(!displayCart)} onMouseLeave={() => setDisplayCart(!displayCart)}>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fill-rule="nonzero"
          />
        </svg>
        { displayCart && <CartDisplay/> }

          {/* {item_in_cart && displayCart &&
            item_in_cart.map((item, index) => (
              <div className="item_in_cart" key={index}>
                <p className="item_in_cart_title">{item["product_title"]}</p>
                <div className="item_in_cart_prices">
                  <p className="item_in_cart_price">
                    ${item["product_price_after_sale"]}
                  </p>
                  <p>x</p>
                  <p className="item_in_cart_quantity">{item["quantity"]}</p>
                  <p className="item_in_cart_final_price">
                    ${item["final_price"]}
                  </p>
                  <img
                   
                    className="delete_item_icon"
                    onClick={RemoveItemFromCart(index)}
                    src={delete_item_icon}
                    alt="delete_icon"
                  />
                </div>
              </div>
            ))} */}
         
      </div>

      <img className="nav_item" src={profile_pic} alt="profile picture" />
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
    display: flex;
    flex-direction: row;
    /* background-color: orange; */
    width: 85%;
    margin: auto;
    padding-bottom: 1rem;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid black;
    align-self: center;
    
    .cart {
        /* :hover {
            .cart_display {
                display: block;
            } */
        }
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
            .item_in_cart {
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
            }
            .checkout_button {
                align-items: center;
                background-color: orange;
                border: none;
                margin-top: 5px;
                border-radius: 10px;
                color: white;
                padding: 1rem;
                font-size: .75em;
                cursor: pointer;
                letter-spacing: 3px;
                text-align: center;
                margin-bottom: 1rem;
            }
            }
        }  
    }


    .nav_item{
        cursor: pointer;
        margin: .25rem;
        padding: 1rem;
        /* background-color: aliceblue; */
        transition:all .25s ease-in-out;
        :hover {
           
            background-color: orange;
            border-radius: 25px;
        }

        :nth-child(6) {
            margin-right: 20rem;
                /* background-color: blue; */
            }
        img {
            width: 60%;
            height: 60%;
        }
    }    
    #Logo {
            font-weight: 700;
            font-size: 2rem;
            /* letter-spacing: 1px; */
    }

`;

export default Navbar;
