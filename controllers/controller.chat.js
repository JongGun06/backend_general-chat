const { model } = require('mongoose')
let Chat = require('../models/model.chat.js')

let getMessages = async (req,res) => {
    try {
        let messages = await Chat.find({})
        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json({mess: error.message}) 
    }
}
let getMessage = async (req,res) => {
    try {
        let {id} = req.params
        let messages = await Chat.findById(id)
        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json({mess: error.message}) 
    }
}

let createtMessage = async (req,res) => {
    try {
        let messages = await Chat.create(req.body)
        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json({mess: error.message}) 
    }
}

let deleteMessage = async (req,res) => {
    try {
        let {id} = req.params
        let messages = await Chat.findByIdAndDelete(id)
        if(!messages) {
            return res.status(404).json({mess: "product not found"})
        }
        res.status(200).json({mess: "deleted"})
    } catch (error) {
        res.status(500).json({mess: error.message}) 
    }
}

let updateMessage = async (req,res) => {
    try {
        let {id} = req.params
        let messages = await Chat.findByIdAndUpdate(id, req.body)
        if(!messages) {
            return res.status(404).json({mess: "product not found"})
        }
        let deleteMessage = await Chat.findById(id)
        res.status(200).json(deleteMessage)
    } catch (error) {
        res.status(500).json({mess: error.message}) 
    }
}

module.exports = {getMessage,getMessages,createtMessage,deleteMessage,updateMessage}