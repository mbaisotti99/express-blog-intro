const express = require("express")
const app = express()
const port = 3000
const arrray = require("./posts.js")

app.get("/", (req, resp) => {
    // resp.send("<h1>Server del mio blog</h1>");
    resp.json(arrray)
})

app.use(express.static("./public"))

app.listen(port, () => {
    console.log("ABCD");
})

