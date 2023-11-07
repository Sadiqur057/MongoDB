const dbConnect =  require('./00_mongoDB')

// dbConnect().then((response)=>{
//     response.find({name:"Sadiqur"}).toArray().then((data)=>{
//         console.log(data);
//     })
// })\

const main = async()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}
main();