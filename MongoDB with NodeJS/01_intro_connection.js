const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = "university";

async function getData(){
    let result = await client.connect();
    let db = result.db(dbName);
    let collection = db.collection('students');
    let response = await collection.find({}).toArray()
    console.log(response);
}
getData();