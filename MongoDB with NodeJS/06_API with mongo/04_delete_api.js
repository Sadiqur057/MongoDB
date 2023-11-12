const dbConnect = require('./00_dbConnect');
const express = require('express');
const app = express();
const mongoDB = require('mongodb')

app.use(express.json())

async function getData(){
    let db = await dbConnect();
    return db.collection('students');
}

app.delete('/:id', async (req,res)=>{
    const data = await getData();
    const result = await data.deleteOne(
        {_id: new mongoDB.ObjectId(req.params.id)})
    res.send(result);
})

app.listen(80)

