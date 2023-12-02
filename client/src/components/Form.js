import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FileBase from 'react-file-base64'
import {CreatePost,UpdatePost} from '../thunk_actions/Posts'
import { useDispatch } from 'react-redux'



const Container = styled.div`
padding: 20px;
width: 400px;
background-color:#fff;
height: 470px;
border-radius: 5px;
`

const Title = styled.p`
margin-bottom: 19px;
text-align: center;
`

const Input = styled.input`
padding: 7px;
outline: none;
border: 1px solid #ccc;
font-size: 14px;
width:100%;
margin-bottom:10px
`

const Textarea = styled.textarea`
padding: 7px;
outline: none;
border: 1px solid #ccc;
font-size: 14px;
width:100%;
margin-bottom:10px;
height:150px
`

const Submit = styled.input`
width: 100%;
    padding: 5px;
    outline: none;
    border: 1px solid #309da1;
    color: #fff;
    font-size: 18px;
    background-color: #309da1;
    cursor:pointer;
    margin-top:10px
`

const Clear = styled.input`
width: 100%;
    padding: 5px;
    outline: none;
    border: 1px solid #ff1e1e;
    color: #fff;
    font-size: 18px;
    background-color: #ff1e1e;
    margin: 10px 0;
    cursor:pointer
`


const Form = (props) => {

  const {chosenPost,setChosenPost} = props
  
  const dispatch = useDispatch()

  const [data,setData] = useState({creator:'',title:'',message:'',tags:'',selectedFile:''})
  
  useEffect(()=>{
    if(chosenPost !== null){
      const {creator,title,message,tags,selectedFile} = chosenPost
      setData({creator,title,message,tags,selectedFile})//object leterals
    }
  },[chosenPost])

  // Handle on Sumbit
  const HandleSubmit = (e)=>{
    e.preventDefault()

    // if the user chosed post fo updating
    if(chosenPost !== null){

      const {_id} = chosenPost
      dispatch(UpdatePost(_id,data))
      setChosenPost(null)

    }else{
      dispatch(CreatePost(data))
    }

  }

  /// Clear State
  const ClearData =()=>{
    setData({creator:'',title:'',message:'',tags:'',selectedFile:''})
  }

  return (
    <Container>
      <Title>{chosenPost ? "Editing" : "Creating"} <span>post</span></Title>
      <form onSubmit={(e)=>HandleSubmit(e)}>

        <Input type="text" value={data.creator} onChange={(e)=>setData({...data,creator:e.target.value})} placeholder="creator" />
        <Input type="text" value={data.title} onChange={(e)=>setData({...data,title:e.target.value})} placeholder="title" />
        <Textarea type="select" value={data.message} onChange={(e)=>setData({...data,message:e.target.value})} placeholder="message" />
        <Input type="text" value={data.tags} onChange={(e)=>setData({...data,tags:e.target.value})} placeholder="tags" />

        <FileBase
        type="file"
        multiple={false} //Does your component support multiple files?
        onDone={({base64})=> setData({...data,selectedFile:base64})}//onDone return an object of: filename, fileType, base64 data
        />

        <Submit type='submit' value="submit"/>
      </form>

      <Clear type='button' onClick={ClearData} value="clear"/>
    </Container>
  )
}

export default Form


