import React from 'react'
import styled from 'styled-components';
import ItemDescription from './ItemDescription';
import ItemPictures from './ItemPictures';

function Item() {
    return (
        <ItemSectionStyle>
            <ItemPictures/>
            <ItemDescription/>
        </ItemSectionStyle>
            
        
    )
}

const ItemSectionStyle = styled.div `
    background-color: lightcyan;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`

export default Item