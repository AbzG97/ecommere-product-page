import React from 'react'
import styled from 'styled-components'
import Picture from './Picture'

function ItemThumbnails({pictures, setCurrentPicture}) {
    return (
        <StyledItemThumbnails>
             {pictures.map((pic, index) => <Picture key={index} pic={pic} setCurrentPicture={setCurrentPicture}/>  )}

        </StyledItemThumbnails>
    )
}

const StyledItemThumbnails = styled.div `
    display: flex;
    flex-direction: row;
    /* background-color: red; */
    align-items: center;
    height: 15vh;
    /* margin: 1rem; */
    /* padding: 1.5rem; */
    justify-content: space-evenly;
    /* padding-right: 12rem; */
    /* padding-left: 12rem; */
`

export default ItemThumbnails
