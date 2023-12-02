import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import { useSelector } from 'react-redux'



const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(2,auto);
gap: 25px;
`

const SpinnerWrapper = styled.div`
width:470px;
position:relative;
`

const Pic = styled.img`
position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%);
    width: 40px;
`

const Posts = ({setChosenPost}) => {


    const allPosts = useSelector(state=>state)
    console.log('posts : ')
    console.log(allPosts)
return (
    <Wrapper>

        {allPosts.length > 0 ? allPosts.map(post=>(
            
                <Post setChosenPost={setChosenPost} key={post._id} post={post}/>
            ))
            :<SpinnerWrapper ><Pic src='spinner.gif' alt='spinner'/></SpinnerWrapper>
        }

    </Wrapper>
)
}

export default Posts