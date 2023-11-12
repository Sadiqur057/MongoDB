const dbConnect = require('./00_mongoDB')

async function deleteData(){
    let data = await  dbConnect()
    let result = await data.deleteOne({name: 'Mahtab'});
    console.log(result);
    if(result.deletedCount<1){
        console.log("Nothing to delete")
    }else{
        console.log(`Delected ${result.deletedCount} records`)
    }
}

deleteData()