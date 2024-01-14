const mongoose = require('mongoose')

require('dotenv/config')

const mongoDBURL = process.env.DBURL

const connect = async () =>{
    await mongoose.connect(mongoDBURL)
    console.log('DB connection was successful');
}

module.exports = connect