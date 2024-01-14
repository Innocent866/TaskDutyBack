const express = require('express')
const app = express()
const port = process.env.PORT||8060
const connect = require('./db connection/mongodb')
const profileRouter = require('./router/profileRouter');
const cors = require('cors');
const morgan = require ("morgan")

// middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// API
app.use('/',profileRouter)

connect()
.then(()=>{
    try{
        app.listen(port, ()=>console.log(`server connected to http://localhost:${port}`))
    }catch(error){
        console.log('invalid database connection');
    }
})

