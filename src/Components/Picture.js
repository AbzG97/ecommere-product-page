import React from 'react'
import styled from 'styled-components';

function Picture({pic, setCurrentPicture}) {
    const ChangeCurrentPicture = () => {
        setCurrentPicture(pic);
    }
    return (
        <StyledPicture>
            <img src={pic} alt="profile picture" onClick={ChangeCurrentPicture} />
        </StyledPicture>
    )
}

const StyledPicture = styled.div`
    img {
        /* background-color: black; */
        margin: 1rem;
        margin-left: 0;
        margin-right: 0;
        padding: 0;
        width: 40%;
        border-radius: 15px;
        :hover {
            cursor: pointer;
        }
    }
`;
export default Picture
