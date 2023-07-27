const express = require("express")

const cors = require("cors")

require("dotenv").config()

const PORT = process.env.PORT||8080

const app = express()

app.use(cors())

const survival = require("./library/survival");
const maths = require("./library/maths")

app.get('/', (request,response)=>response.json("your name is here"))

app.get("/survival",survival)
app.get("/maths",maths)


app.listen(PORT,()=>console.log(`we are listening on port ${PORT}`))