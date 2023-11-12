const express = require('express');
const dbConnect = require('./00_dbConnect')
const app = express();


app.get('/',async(req,res)=>{
    let db = await dbConnect();
    let collection = db.collection('students');
    let response = await collection.find().toArray()
    res.send(response)
})

app.listen(80)