import mongoose from "mongoose";


const PostSchema  = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    message:String,
    creator:String,
    tags:[String],//array of strings
    selectedFile : String, //image
    likeCount: {type:Number, default:0}

},{timestamps:true})


const modelPosts = mongoose.model('posts',PostSchema)

export default modelPosts