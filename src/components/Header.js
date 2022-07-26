import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <Logo>
                <a href="#">
                    <img src="/images/logo.svg" alt="" />
                </a>
            </Logo>

            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a href="#" onClick={() => {
                    setBurgerStatus(true)

                }

                }>Menu</a>

            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrap>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrap>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Solar Roof</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Insurance</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Find Us</a></li>
                {/* <li><a href="#">Support</a></li> */}

            </BurgerNav>
        </Container>
    )
}
export default Header;


const Container = styled.div`
    z-index: 1;    //for burger nav 
    height: 60px;
    display: flex;
    position: fixed;
    width: 100vw;
    top: 0;
    align-items: center;
    padding: 0 50px;
    justify-content:space-between;
    a{
        text-decoration:none;
    }
    
    a img
    {
        width: 130px;
        height: 18px;
    }
    
`

const Logo = styled.div`
    display: flex;
`;
const Menu = styled.div`
    display: flex;
    margin-left:60px;
    a
    {
        font-weight: 600;
        text-decoration: none;
        padding: 0px 15px;
        flex-wrap: nowrap;
    }
    @media(max-width:768px)
    {
        display:none;
    }
`
const RightMenu = styled.div`
    a
    {
        
        font-weight: 600;
        text-decoration: none;
        padding: 0px 10px;
        margin-right: 10px;
    }
`
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background: white;
    width:300px;
    z-index: 10;
    list-style: none;
    padding :30px;
    padding-top:60px;
    font-size : 15px;
    padding-left:50px; 
    display: flex;
    flex-direction: column;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition : transform 0.5s;
    li
    {
        padding: 12px 0;
        // border-bottom: 1px solid rgba(0,0,0,0.2);
    }
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrap = styled.div`
    display: flex;
    justify-content: flex-end;

`