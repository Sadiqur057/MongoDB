// The following operators can be used in queries to compare values:

// $eq: Values are equal
db.students.find({name:{$eq:"Sadiqur"}})
// $ne: Values are not equal
db.students.find({name:{$ne:"Sadiqur"}})

// $gt: Value is greater than another value
db.students.find({cgpa:{$gt:3.4}})
// $gte: Value is greater than or equal to another value
db.students.find({cgpa:{$gte:3.4}})
// $lt: Value is less than another value
db.students.find({cgpa:{$lt:3.4}})
// $lte: Value is less than or equal to another value
db.students.find({cgpa:{$lte:3.4}})

// $in: Value is matched within an array
db.students.find({name: {$in:["Sadiqur Rahman","Sabbir Rahman","Sadiq"]}})
// $nin: Value is matched within an array
db.students.find({name: {$nin:["Sadiqur Rahman","Sabbir Rahman","Sadiq"]}})


// Logical
// The following operators can logically compare multiple queries.

// $and: Returns documents where both queries match
db.students.find({$and:[{underGrad:true},{cgpa:{$gt:3.3}}]})

// $or: Returns documents where either query matches
db.students.find({$or:[{underGrad:true},{cgpa:{$gt:3.3}}]})

// $nor: Returns documents where both queries fail to match
db.students.find({$nor:[{underGrad:true},{cgpa:{$gt:3.3}}]})
// $not: Returns documents where the query does not match
db.students.find({cgpa:{$not:{$gt:3.3}}})
// Evaluation
// The following operators assist in evaluating documents.
