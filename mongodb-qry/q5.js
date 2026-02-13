//to display all the documents of HR employees
db.employees.find({department:"HR"})
//to find salary
db.employees.find(
    {department:"HR"}    
)

db.employees.find(
    {department:{$eq:"HR"}}
)
//$eq=equal to 
db.employees.find(
    {salary:{$eq:3000}}
)

//$gt=greater than
db.employees.find(
    {salary:{$gt:3000}}
)
//$ne=not equal
db.employees.find(
    {salary:{$ne:3000}}
)
//$gte=greater than equal to
db.employees.find(
    {salary:{$gte:3000}}
)
//$lte=less than equal to
db.employees.find(
    {salary:{$lte:3000}}
)

//both the conditions should be followed thats why we use $and 
db.employees.find(
    {$and:[{department:"HR"},{salary:{$gt:3000}}]}
)
//either id would be hr or salary would be greater than 3000
db.employees.find(
    {$or:[{department:"HR"},{salary:{$gt:3000}}]}
)

db.employees.find(
    {$or:[{department:"HR"},{salary:{$gt:3000}}]},
    {name:1,email:1,department:1}
)
//used to update what we want to 
db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$set:{salary:3500}}
)
//$inc=increment only of cathy 
db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$inc:{salary:3500}}
)
//will increment of all by 1000
db.employees.updateMany(
    {},
    {$inc:{salary:3500}}
)
//If points field already exists → its value becomes 1
db.employees.updateMany(
    {},
    {$set:{points:1}}
)
//will update 
db.employees.updateOne(
    {email:"brian@gmail.com"},
    {$set:{points:10}}
)
//if the email exit it will update otherwise make a new email and update
db.employees.updateOne(
    {email:"abc@gmail.com"},
    {$set:{points:10}},
    {upsert:true}
);

//will show all the names
db.employees.find({},{name:1})
//will delete the required email
db.employees.deleteOne(
    {email:"abc@gmail.com"}
)