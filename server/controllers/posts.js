import modelPosts from '../models/posts.js'

//Get all posts
export const getPosts = async (req,res)=>{
    try{
        const posts = await modelPosts.find()
        res.status(200).json(posts);
    }catch(err){
        console.log(err.message)
    }
}

// Create post
export const creatPost = async (req,res)=>{

    const newPost = new modelPosts(req.body)
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    }catch(err){
        res.status(400).json(err.message)
    }
}

// Update post
export const updatePost = async(req,res)=>{
    const {id} = req.params
    try{
        const findPost = await modelPosts.findByIdAndUpdate(id,{$set:req.body},{new:true})
        if(findPost){//{new : true}   to get the updated version of this post
            res.status(200).json(findPost)
        }else{
            res.status(404).json('not Found')
        }
        
    }catch(err){
        res.status(500).json(err.message)
    }
}


//delete Post
export const deletePost = async(req,res)=>{
    const {id} = req.params
    try{
        const deletedPost = await modelPosts.findByIdAndDelete(id)
        res.status(200).json(deletedPost)
    }catch(err){
        res.status(500).json(err.message)
    }
}






