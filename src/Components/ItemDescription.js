import React from 'react'
import styled from 'styled-components';
import minus_icon from '../images/icon-minus.svg'
import plus_icon from '../images/icon-plus.svg'
import cart_icon from '../images/icon-cart.svg'
import { v4 as uuid } from 'uuid';



function ItemDescription({item_in_cart, setItem_in_cart}) {
    const [quantity, setQuantity] = React.useState(1);

    const AddItemToCart = () => {
        setItem_in_cart([...item_in_cart,{
            "id": uuid(),
            "product_title": "Fall Limited Edition Sneakers",
            "product_price_after_sale": 125.00,
            "quantity": quantity,
            "final_price": quantity * 125.00,
         }]);
    }

    const increment_quantity = () => {
        setQuantity(quantity + 1);
    }

    const decrement_quantity = () => {
        setQuantity(quantity - 1);
    }
    return (
        <ItemDescriptionSectionStyle>
            <h3 className="company_title">SNEAKERS COMPANY</h3>
            <h1 className="product_title">Fall Limited Edition Sneakers</h1>
            <p className="product_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className="sale_price">
                <p className="product_price_after_sale">$125.00</p>
                <p className="sale">50%</p>
            </div>
            <p className="product_price">$250.00</p>
            <div className="add_to_cart">
                <img className="quantity_icons" src={minus_icon} alt="minus_icon" onClick={decrement_quantity}/>
                <p className="quantity_to_be_added">{quantity}</p>
                <img className="quantity_icons" src={plus_icon} alt="plus_icon" onClick={increment_quantity}/>
                <button className="add_to_cart_button" onClick={AddItemToCart}><img className="cart_icon" src={cart_icon} alt="cart_icon"/><span>Add To Cart</span></button>
            </div>
        </ItemDescriptionSectionStyle>
            
        
    )
}

const ItemDescriptionSectionStyle = styled.div `
    /* height: 70vh; */
    /* background-color: lightgreen; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 45%;
    /* padding: 1rem; */
    margin-left: 1rem;
    .company_title {
        color:  orange;
        letter-spacing: 5px;
        font-weight: bold;
        /* margin: 1rem 0 0 0;  */
    }

    .product_title {
        /* color: red; */
        letter-spacing: 5px;
        text-align: left;
        font-weight: bold;
        font-size: 2.6rem;
        margin: 0 0 1rem 0;
    }
    .product_desc {
        margin: 0;
        letter-spacing: 2px;
        text-align: left;
        margin-bottom: 1rem;
    }
    
    .sale_price {
        display: flex;
        flex-direction: row;
        align-items: center;
        .product_price_after_sale{
            /* margin: 0 0 0 1rem; */
            margin: .5rem;
            /* padding: 0.5rem; */
            font-size: 1.5rem;
            font-weight: bold;
            /* background-color: red; */
        }
        .sale {
            color: orange;
            background-color: lightgray;
            margin: 0.5rem;
            padding: 0.25rem;
        }
    }
    .product_price {
        margin: 0 0.5rem 0.5rem .5rem;
        /* padding: 0.5rem; */
        font-size: 1rem;
        font-weight: 700;
        /* background-color: red; */
        text-decoration: line-through;
        color: lightgray;
    }

    .add_to_cart {
        margin-top: 2rem;
        margin-bottom: 2rem;
        align-self: center;
        /* background-color: blueviolet; */
        width: 75%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        .quantity_icons {
            cursor: pointer;
        }
        .quantity_icons, .quantity_to_be_added {
            background-color: lightgray;
            padding: .5rem;
            
        }
        .add_to_cart_button{
            cursor: pointer;
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: orange;
            border: none;
            border-radius: 10px;
            color: white;
            padding: 1rem 3rem 1rem 3rem;
            font-size: 1em;
            letter-spacing: 2px;
            text-align: center;
            -webkit-box-shadow: 0px 0px 16px -3px #000000; 
            box-shadow: 0px 0px 16px -3px #000000;
            .cart_icon {
                margin-right: 1rem;
                /* background-color: black; */
                /* padding: .25rem; */
            }
        }
    } 
`

export default ItemDescription
