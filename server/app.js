require("dotenv").config()
const express = require("express")
const app = express()

const PORT = 8005

app.listen(PORT,()=>{
    console.log(`server is running on posrt ${PORT}`)
})