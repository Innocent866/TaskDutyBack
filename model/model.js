const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileScehma = new Schema({
        name:{
            type:String,
            require:true
        },
        tag:{
            type:String,
            enum:['Urgent','Important'],
            require:true
        },
        title:{
            type:String,
            require:true
        }
});

const Task = mongoose.model('task',profileScehma)
module.exports = Task