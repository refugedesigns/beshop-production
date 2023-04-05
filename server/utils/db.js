const mongoose = require('mongoose');

const connectDB = async(url) => {
    return await mongoose.connect(url).then((db) => {
        console.log('Connected to database ')
        console.log(db)
    }).catch((error) => {
        console.error(error)
        console.log('Failed to connect to database ')
    } )
}

module.exports = connectDB;