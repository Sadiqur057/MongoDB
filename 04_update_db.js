// update and set
db.students.updateOne({ name:"Sadiqur" }, { $set: {cgpa:3.6} })

// update and set with id
db.students.updateOne({ _id:ObjectId("654a47a01280d676fb139fcd") }, { $set: {cgpa:3.4} })

// update all
db.students.updateMany({underGrad:{$exists:false}},{$set:{underGrad:true}})

// unset update
db.students.updateMany({},{$unset:{underGrad:""}})