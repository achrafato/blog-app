import React from 'react'
import Posts from './Posts'
import Form from './Form'
import styled from 'styled-components'

const Container = styled.div`
margin-top:50px;
display: flex;
justify-content: space-between;
`

const PageContent = ({setChosenPost,chosenPost}) => {
return (
    <Container>
        <Posts setChosenPost={setChosenPost}/>
        <Form chosenPost={chosenPost} setChosenPost={setChosenPost}/>
    </Container>
)
}

export default PageContent