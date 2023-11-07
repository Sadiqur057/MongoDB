// show all the collections
show collections

// insert documents to collections
db.students.insertOne({name:"Sadiqur Rahman", dept:"CSE", cgpa:3.5})

db.students.insertMany([{name:"Asik Newaz", dept:"CSE",cgpa:3.3},{name:"Asik Newaz", dept:"CSE",cgpa:3.3}])

// DataTypes
db.students.insertOne(
    {
        name:"Sadiqur", // string
        age: 23, // integer
        cgpa: 3.5, // float
        underGrad: true, // boolean
        address: {
            street: "Pa2/1, soutbadda",
            city: "dhaka",
            zip: 1212
        }, // nested
        regDate:new Date(), // date
        gradDate: null, //null
        courses : ["CSE103","CSE110","CSE106"] // arrray
    }) 
