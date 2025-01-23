let mongoose = require('mongoose')

let ChatSchema = mongoose.Schema({
    val:{type:String, required:[true, 'please enter value']},
    userId:{type: String, required: true},
    img:{type: String, required: true}

},
{
    timestamp:true
})

let Chat = mongoose.model('Chat', ChatSchema)

module.exports = Chat

