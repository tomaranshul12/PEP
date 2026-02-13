// db.employees.find({},{}) 

// db.employees.find({department:"HR"})

db.employees.find(
    {department:"HR",salary:3000},
    {_id:0,name:1,salary:1}
)

//to show till how much documnet will be shown 
db.employees.find().limit()

//TO skip first 1 document
db.employees.find().skip(1)

// it skip the first document and shows 2nd and 3rd only 
db.employees.find().limit(3).skip(1)

// acending order names 
db.employees.find().sort({ name: 1 }) 

// decending order
db.employees.find().sort({ name: -1 }) 

db.employees.find().limit(3).skip(1).sort({name: -1}) 

// to cound the data
db.employees.find().count() 