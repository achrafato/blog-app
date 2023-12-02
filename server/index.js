import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

//routes
import postRouter from './routes/posts.js'

const app = express()
const PORT = process.env.PORT || 5000
app.use( cors({origin: 'http://localhost:3000'}) )

//configuration
dotenv.config()

//parses incoming requests with JSON payloads 
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


app.use('/posts',postRouter);




app.listen(PORT,()=>{
    console.log('server created with success')
})



//two arguments useNewUrlParser and useUnifiedTopology are to avoid Mongoose deprecation warnings
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true ,useUnifiedTopology: true})
.then(()=>{
    console.log('dataBase connected with success')
})
.catch(err=>{
    console.log(err)
})


