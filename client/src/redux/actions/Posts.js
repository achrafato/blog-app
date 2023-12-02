import {CREATE_POST,FETCH_ALL,UPDATE_POST,DELETE_POST} from '../actionTypes/Posts'

export const Fetch_All = (data)=>{
    return{
        type:FETCH_ALL,
        payload:data
    }
}


export const Creat_Post = (data)=>{
    return{
        type:CREATE_POST,
        payload:data
    }
}

export const Update_Post = (data)=>{
    return{
        type:UPDATE_POST,
        payload:data
    }
}

export const Delete_Post = (data)=>{
    return{
        type:DELETE_POST,
        payload:data
    }
}
