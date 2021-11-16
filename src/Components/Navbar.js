import styled from 'styled-components';
import profile_pic from '../images/image-avatar.png'


function Navbar() {
    return (
        <StyledNavbar>
            <nav>
                <ul>
                    <li id="Logo">SNEAKERS</li>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li><svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg></li>
                    <li><img src={profile_pic} alt="profile picture"/></li>

                </ul>
            </nav>

        </StyledNavbar>
    );
}

const StyledNavbar = styled.div`
    /* width: 100%; */
    /* background-color: aqua; */
    nav{
        /* display: flex; */
        /* align-items: center; */
        /* justify-content: center; */
        background-color: aqua;
        position: fixed;
        /* height: 20vh; */
        width: 100%;
        
    }
    
    nav > ul {
        /* height: 100%; */
        width: 100%;
        background-color: red;
        /* padding: 2rem; */
        display: flex;
        list-style-type: none;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        border-bottom: 1px solid black;
        #Logo {
            font-weight: bold;
            font-size: 2rem;
            letter-spacing: 5px;
        }
        li {
            cursor: pointer;
            margin: .25rem;
            padding: 1rem;
            background-color: aliceblue;
            transition:all .5s ease-in-out;
            :hover {
                border-bottom:5px solid #002f5b;
            }

            :nth-child(6) {
                margin-right: 20rem;
                /* background-color: blue; */
            }
            img {
                width: 65%;
                height: 65%;
            }
        }

    }

`

export default Navbar;