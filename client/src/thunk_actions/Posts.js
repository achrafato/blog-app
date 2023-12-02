import axios from "axios"
import {Fetch_All,Creat_Post,Update_Post,Delete_Post} from '../redux/actions/Posts'

export const FetchPosts = ()=>{
    return async (dispatch)=>{
        try{
            const {data} =await axios.get('http://localhost:5000/posts/')
            dispatch(Fetch_All(data))
        }catch(err){
            console.log(err.message)
        }
    }
}

export const CreatePost = (newPost)=>{
    return async(dispatch)=>{
        try{
            const {data} = await axios.post('http://localhost:5000/posts/create',newPost)
            dispatch(Creat_Post(data))
        }catch(err){
            console.log(err.message)
        }
    }
}

export const UpdatePost = (id,pos)=>{
    return async(dispatch)=>{
        try{
            const {data} = await axios.patch(`http://localhost:5000/posts/update/${id}`,pos)
            console.log('eee')
            dispatch(Update_Post(data))
        }catch(err){
            console.log(err.message)
        }
    }
}


export const DeletePost = (id)=>{
    return async(dispatch)=>{
        try{
            const {data} = await axios.delete(`http://localhost:5000/posts/delete/${id}`)
            dispatch(Delete_Post(data))
        }catch(err){
            console.log(err.message)
        }
    }
}