import React from 'react'
import styled from 'styled-components';
import image_product_1 from '../images/image-product-1.jpg'
import image_product_2 from '../images/image-product-2.jpg'
import image_product_3 from '../images/image-product-3.jpg'
import image_product_4 from '../images/image-product-4.jpg'
import Picture from './Picture';



function ItemPictures() {
    const [pictures, setPictures] = React.useState([]);

    React.useEffect(() => {
        setPictures([image_product_1, image_product_2, image_product_3, image_product_4]);

    }, []);

    return (
        <ItemPicturesSectionStyle>
           {pictures.map((pic, index) => <Picture key={index} pic={pic}/>  )}
        </ItemPicturesSectionStyle>
            
        
    )
}

const ItemPicturesSectionStyle = styled.div `
    background-color: lightcyan;
    
`

export default ItemPictures
