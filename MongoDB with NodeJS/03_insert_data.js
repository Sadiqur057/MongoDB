const dbConnect = require('./00_mongoDB');

const insert= async()=>{
    const db = await dbConnect();
    const result = await db.insertOne({name:"Mahtab",cgpa:3.12})
    
    if(result.acknowledged){
        console.log("record is inserted");
    }
}
insert();
