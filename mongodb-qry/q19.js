// q20.js
db.employees.aggregate(
    [{$project: {_id: 0, name:1}},
        {$sort: {name: 1}},
    ]
)

db.employees.aggregate(
  [
    { $project: { _id: 0, name: 1 } },
    { $sort: { name: 1 } }
  ],
  {
    collation: { locale: "en", strength: 2 }
  }
)


//q21.js

db.createCollection("vendors",{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name","age"],
            properties: {
                name:{bsonType: "string"},
                age: {bsonType: "int"},
            },
        },
    },
}),

db.vendors.insertOne({
    name: "John",
    age: 21
})

db.vendors.insertOne({
    age: 21
})

db.vendors.insertOne({
    name: 454535,
    age: "gdgfgd"
})

db.createCollection("vendors",{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name","age"],
            properties: {
                name:{bsonType: "string"},
                age: {bsonType: "int", minimum: 18},
            },
        },
    },
})

//q22.js
db.employees.find({
    name: "John Smith"
})

// $regex is used to find the name similar to the given name. We don't provide the exact name/
db.employees.find({
    name: {$regex: "John"}
})

// To search based on case sensitivity, we use $options: 'i' for case insensitive search
db.employees.find({
    name: {$regex: "john",$options: "i"}
})
//