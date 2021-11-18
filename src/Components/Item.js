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
    display: flex;
    flex-direction: row;
    width: 100%;
    /* padding: 1.5rem; */
    margin-top: 2rem;
    padding-top: 1rem;
    /* margin: 1rem; */
    justify-content: space-evenly;
    align-items: center;
    
`

export default Item
