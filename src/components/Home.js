import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
                title="Model 3"
                desc="Order Online for Touchless Delivery"
                backImg="model-3.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
            />
            <Section
                title="Model Y"
                desc="Order Online for Touchless Delivery"
                backImg="model-y.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
            />
            <Section
                title="Model S"
                desc="Order Online for Touchless Delivery"
                backImg="model-S.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
            />
            <Section
                title="Model X"
                desc="Order Online for Touchless Delivery"
                backImg="model-x.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
            />
            <Section
                title="Solar Panels"
                desc="Lowest Cost Solar Panels in America"
                backImg="solar-panel.jpg"
                leftBtn="Order Now"
                rightBtn="Learn More"
            />
            <Section
                title="Accessories"
                desc=""
                backImg="accessories.jpg"
                leftBtn="Order Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height : 100vh;
`