import styled from "styled-components";
import profile_pic from "../images/image-avatar.png";
import React from "react";
import CartDisplay from "./CartDisplay";
import {Link} from 'react-router-dom';

function Navbar({ item_in_cart, setItem_in_cart }) {
    const [displayCart, setDisplayCart] = React.useState(false);
   
  return (
    <StyledNavbar>
      <p className="nav_item" id="Logo">
        SNEAKERS
      </p>
      <Link to="/collections" className="nav_item">Collections</Link>
      <Link to="/men" className="nav_item">Men</Link>
      <Link to="/women" className="nav_item">Women</Link>
      <Link to="/about" className="nav_item">About</Link>
      <Link to="/contact" className="nav_item">Contact</Link>
      <div className="cart" onMouseEnter={() => setDisplayCart(!displayCart)} onMouseLeave={() => setDisplayCart(!displayCart)}>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fill-rule="nonzero"
          />
        </svg>
        { displayCart && <CartDisplay item_in_cart={item_in_cart} setItem_in_cart={setItem_in_cart}/> }

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
