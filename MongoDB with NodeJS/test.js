// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'university'

// async function dbConnect (){
//     let result = await client.connect();
//     let db= result.db(database);
//     let collection = db.collection('students');
//     let response = await collection.find().toArray()
//     console.log(response);
// }
// dbConnect();

const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'university';

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('students');
    let response = await collection.find().toArray();
    console.log(response);
}

dbConnect()