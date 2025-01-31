let express = require("express")
let fs = require("fs")
let app = express()
app.use(express.static(__dirname+"/"))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.listen(80)