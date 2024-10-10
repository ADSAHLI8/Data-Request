require('dotenv').config()

const express = require ('express')
const mongoose = require('mongoose')
const requestsRoutes = require('./routes/request')
const cors = require('cors')

// express app
const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/',requestsRoutes)

//connect to db 
mongoose.connect(process.env.MONG_URI)
  .then(()=>{
    // listen for requests
      app.listen(process.env.PORT,()=>{
          console.log('Connected to DB & Listening on port',process.env.PORT)
      })
  })
  .catch((error)=>{
    // Catch error
    console.log(error)
  })

