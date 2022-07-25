import React from 'react'
import styled from 'styled-components'
function Section(props) {
    return (
        <Wrap bgImage={props.backImg}>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {props.leftBtn}
                    </LeftButton>
                    {props.rightBtn &&
                        <RightButton>
                            {props.rightBtn}
                        </RightButton>
                    }

                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>

        </Wrap >
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
    // background-image:url('/images/model-s.jpg');
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`
const ItemText = styled.div`
    padding-top:15vh;   
    text-align: center;
`
const ButtonGroup = styled.div`
    text-align: center;
    display:flex;
    margin-bottom:10px;
    cursor:pointer;
    @media (max-width: 768px)
    {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    height:40px;
    background-color: rgba(23,26,32,0.8);
    width: 240px;
    color:white;
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius: 100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size: 12px;
    font-weight: bold;
    margin: 10px;
`
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
    font-weight: bold;
`
const DownArrow = styled.img`
    margin-top: 20px;
    margin-bottom:15px;
    height: 40px;
    animation: animateDown infinite 1.5s
    // overflow-x: hidden;
    
`
const Buttons = styled.div`
    display:flex;
    flex-direction:column;
    
`

