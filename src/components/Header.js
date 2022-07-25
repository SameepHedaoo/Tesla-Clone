import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" width={130} height={18} alt="" />
            </a>
            <Menu>
                <ul>
                    <p><a href="#">Model S</a></p>
                    <a href="#">Model 3</a>
                    <a href="#">Model X</a>
                    <a href="#">Model Y</a>
                    <a href="#">Solar Roof</a>
                    <a href="#">Solar Panels</a>
                </ul>
            </Menu>
        </Container>
    )
}
export default Header

const Container = styled.div`
    min-height: 60px;
    position:fixed;
    display: flex;
    align-items: center;
    padding: 0 40px
`
const Menu = styled.div`

`