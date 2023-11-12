const dbConnect = require('./00_dbConnect');
const express = require('express');
const app = express();

// before express 4.6 body.parse is used. but now express.json() is used to get body from request =>body.request
app.use(express.json());

async function getData(){
    let db= await dbConnect();
    let collection = db.collection('students');
    return collection;
}


app.get('/',async(req,res)=>{
    let collection = await getData();
    response = await collection.find().toArray();
    res.send(response);
})

app.post('/',async(req,res)=>{
    let newData = req.body;
    let collection = await getData();
    let result = await collection.insertOne(newData);
    res.send(result)
})

app.listen(80)