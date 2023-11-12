// to update records put_api method is used. post also can be used but put is standard way to update record

let dbConnect = require('./00_dbConnect');
let express = require('express');
let app = express();

app.use(express.json());

async function getData(){
    let db = await dbConnect();
    let collection = db.collection('students');
    return collection;
}

app.put('/', async (req,res)=>{
    let collection = await getData();
    // let result = await collection.updateOne(
    //     {name:"abcdef"},
    //     {$set: {name:'abc'}}
    //     )
    let result = await collection.updateOne(
        {name: req.body.name},
        {$set: req.body}
        )
    res.send(result)
})

// get name through url
app.put('/:name', async (req,res)=>{
    let collection = await getData();
    let result = await collection.updateOne(
        {name: req.params.name},
        {$set: req.body}
        )
    res.send(result)
})
app.listen(80)