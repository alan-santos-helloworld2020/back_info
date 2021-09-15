const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()
const url = require("url")
const port = process.env.PORT || 3000
const router = require('./router/router')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)





app.listen(port, (err) =>
{
   if(err) console.log(err);
   console.log(`http://localhost:${port}`)
})