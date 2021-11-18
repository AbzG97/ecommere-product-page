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
        /* margin-top: 3rem; */
        /* margin: 2rem; */
        /* margin-left: 1rem; */
        /* margin-right: 1rem; */
        /* padding: 2rem; */
        width: 40%;
        border-radius: 15px;
        transition:all .2s ease-in-out;
        :hover {
            cursor: pointer;
            border: 7px solid orange;
        }
    }
`;
export default Picture
