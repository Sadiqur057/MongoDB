// delete selected by value
db.students.deleteOne({name:"abc"})

// delete many by checking existance
db.students.deleteMany({gradStud:true})

// delete many by checking existance and value
db.students.deleteMany({isExists:{ $exists:true}})