import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding: 10px;
text-align: center;

`
const Title = styled.h1`
color: #10a7ff;
    font-size: 50px;
    font-weight: 500;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 30px;
`

const Header = () => {
return (
    <Container>
        <Title>Memories 📝 </Title>
    </Container>
)
}

export default Header