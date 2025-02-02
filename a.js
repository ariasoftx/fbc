import * as express from "express"
import * as fs from "fs"
let app = express()
function rdb(){
    return JSON.parse(fs.readFileSync(__dirname+"/db.json","utf8"))
}
app.use(express.static(__dirname+"/"))
app.get("/api/rdb",(req,res)=>{
    res.json(rdb())
})
app.listen(80)