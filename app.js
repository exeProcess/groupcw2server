//import express node module
const express = require("express")
//create express server
const app = express()

//register middleware 
app.use((req, res ,next) => {
    res.header("Access-Control-Allow-Origin", "*")
    //res.header("Access-Control-Allow-Header", "*")
    next()
})
app.use("/lesson", (req, res) => {
    const lesson = [
        {
            "title": "maths",
            "location": "dubai",
            "price": 100

        },
        {
            "title": "maths",
            "location": "London",
            "price": 80

        },
        {
            "title": "maths",
            "location": "Liverpool",
            "price": 90

        },
        {
            "title": "maths",
            "location": "Oxford",
            "price": 120

        }
    ]

    res.send(lesson)
})
app.use("/user",(req, res) => {
    const user = {
        "email" : "group8@example.com",
        "password": "password"
    }
    res.send(user)
})
app.use("/", (req, res) => {
    res.send("welcome to after school backend")
})
let port = process.env.PORT || 1000
app.listen(port, () => {
    console.log("äpp working");
})