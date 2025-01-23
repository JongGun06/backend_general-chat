let express = require('express')
let router = express.Router()
let {getMessage,getMessages,createtMessage,deleteMessage,updateMessage} = require('../controllers/controller.chat.js')

router.get('/', getMessages)
router.get('/:id', getMessage)
router.post('/', createtMessage)
router.put('/:id', updateMessage)
router.delete('/:id',deleteMessage)

module.exports = router


