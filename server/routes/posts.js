import express from 'express'
import {getPosts,updatePost,creatPost,deletePost} from '../controllers/posts.js'

const router = express.Router()


//get posts
router.get('/',getPosts)

//update post
router.patch('/update/:id',updatePost)

//create posts
router.post('/create',creatPost)

//Delete post
router.delete('/delete/:id',deletePost)


export default router