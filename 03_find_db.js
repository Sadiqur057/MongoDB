// find documents in collections
db.students.find();

// find with values
db.students.find({name:"Sadiqur Rahman"})

// find with condition => db.students.find({query},{projections})
db.students.find({},{_id:false,name:true})

// find with sorted
db.students.find().sort({name:1}) // alphabetical order

db.students.find().sort({name:-1}) // reverse alphabetical order

// limiting
db.students.find().limit(3)



