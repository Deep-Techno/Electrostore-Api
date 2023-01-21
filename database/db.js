const mongoose=require('mongoose')
require('dotenv').config()
const username = 'baqar2';
const password = '123456789shah'
const cluster = 'cluster0';
const dbname = 'Electro-project';
const uri = `mongodb+srv://${username}:${password}@${cluster}.sqihb0i.mongodb.net/${dbname}?retryWrites=true&w=majority`

const db=mongoose.connect(uri, (error) => {

    if (error) {
        throw error;
    }
    console.log('db is connected')
})

module.exports={db}