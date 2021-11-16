import React from 'react'
import styled from 'styled-components';
import image_product_1 from '../images/image-product-1.jpg'
import image_product_2 from '../images/image-product-2.jpg'
import image_product_3 from '../images/image-product-3.jpg'
import image_product_4 from '../images/image-product-4.jpg'
import CurrentPicture from './CurrentPicture';
import ItemThumbnails from './ItemThumbnails';
import Picture from './Picture';



function ItemPictures() {
    const [pictures, setPictures] = React.useState([]);
    const [currentPicture, setCurrentPicture] = React.useState(image_product_1);

    React.useEffect(() => {
        setPictures([image_product_1, image_product_2, image_product_3, image_product_4]);


    }, []);

    return (
        <ItemPicturesSectionStyle>
            <CurrentPicture currentPicture={currentPicture}/>
            <ItemThumbnails pictures={pictures} setCurrentPicture={setCurrentPicture}/>
        </ItemPicturesSectionStyle>
            
        
    )
}

const ItemPicturesSectionStyle = styled.div `
    background-color: blue;
    display: flex;
    flex-direction: column;
    width: 50%;
    /* height: 100%; */
    
`

export default ItemPictures
