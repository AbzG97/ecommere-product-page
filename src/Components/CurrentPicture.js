import React from 'react'
import styled from 'styled-components';

function CurrentPicture({currentPicture}) {
    return (
        <StyledCurrentPicture>
            <img src={currentPicture} alt="profile picture"/>
        </StyledCurrentPicture>
    )
}

const StyledCurrentPicture = styled.div`
    img {
        margin: 1rem;
        width: 47%;
        border-radius: 15px;
    }
`;

export default CurrentPicture
