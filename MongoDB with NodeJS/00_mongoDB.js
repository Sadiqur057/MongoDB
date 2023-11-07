const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = "university";

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(dbName);
    return db.collection('students');

}

module.exports =  dbConnect;