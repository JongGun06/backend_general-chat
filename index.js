let express = require('express')
let mongoose = require('mongoose')
let chatRoute = require('./routes/route.chat.js')
let cors = require('cors')
let app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/chat/", chatRoute)

app.get('/', (req,res) => {
    res.send("hello from node api")
})

mongoose.connect("mongodb+srv://tursunarsen20:FAB9JzTanwnBS1xJ@node-api.56jzk.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Node-Api")
.then(() => {
    console.log("mongodb connect");
    app.listen(4000, () => {
        console.log("server run 4000");
        
    })
    
})
.catch(() => {
    console.log("error connect");
    
})

module.exports = app