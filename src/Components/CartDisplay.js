import React from 'react'
import styled from 'styled-components'
function CartDisplay() {
    return (
        <StyledCartDisplay>
            <p>Items in cart</p>
        </StyledCartDisplay>
    )
}

const StyledCartDisplay = styled.div`
    font-weight: 300;
    text-transform: none;
    display: none;
    position: absolute;
    width: 180px;
    background-color: lightgreen;

`
export default CartDisplay
