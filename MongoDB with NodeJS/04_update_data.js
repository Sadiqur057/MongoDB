const dbConnect = require('./00_mongoDB');

const updateData = async ()=>{
    let db = await dbConnect();
    let result = await db.updateOne({name:'Mahtab'},{$set:{cgpa:3.14}})
    console.log(result);
}
updateData()