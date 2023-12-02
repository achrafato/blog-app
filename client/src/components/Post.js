import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {DeletePost} from '../thunk_actions/Posts'

const PostWrapper = styled.div`
background-color:#fff;
width:300px;
border-radius:5px;
overflow: hidden;
margin-bottom:20px;
`

const Photo = styled.div`
background-image:url(${props=> props.selectedFile ? props.selectedFile : 'https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png'});
background-size: cover;
height: 200px;
display: flex;
justify-content: space-between;
margin-bottom: 20px;
padding:10px;
color:#fff;
font-weight: 700;
`

const InfoWrapper = styled.div`
padding:10px
`

const Creator = styled.div`
`
const Edit = styled.div`
cursor:pointer;
`

const Tags = styled.span`
color: #9d9d9d;
`

const Title = styled.h1`
font-weight: 500;
    color: #1e1e1e;
    font-size: 35px;
    margin: 15px 0;
`

const Content = styled.p`
font-weight: 500;
    color: #1e1e1e;
    margin-bottom: 20px;
`

const Butttons = styled.div`
display: flex;
justify-content: space-between;
`

const Like = styled.p`
cursor:pointer
`
const Delete = styled.p`
cursor:pointer
`


const Post = (props) => {
    const {post,setChosenPost} = props

    const dispatch = useDispatch()
    
    //set current post 
    const handleUpdate = ()=>{
        setChosenPost(post)
    }

    const handleDelete = ()=>{
        dispatch(DeletePost(post._id))
    }
    
return (
    <PostWrapper>
        <Photo selectedFile={post.selectedFile}>
            <Creator>
                {post.creator}
            </Creator>
            <Edit onClick={()=>handleUpdate()}>
                ...
            </Edit>
        </Photo>
        
        <InfoWrapper>
        <Tags>
            {post.tags.map(tag=>`#${tag}`)}
        </Tags>
        <Title>
            {post.title}
        </Title>
        <Content>
            {post.message}
        </Content>
        <Butttons>
            <Like>🎟 Like <span>{post.likeCount}</span></Like>
            <Delete onClick={()=>handleDelete()}>🌜 Delete</Delete>
        </Butttons>
        </InfoWrapper>
    </PostWrapper>
)
}

export default Post