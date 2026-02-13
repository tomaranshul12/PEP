db.employees.find(
    {email:"brian@gmail.com"}
).explain("executionStats");

//Create index for email field 
db.employees.createIndex({email:1})

//
db.employees.getIndexes()
//
db.employees.dropIndex("email_1")
//
db.employees.find({_id:0,name:1})
//
db.employees.find({_id:0,name:1}).sort({name:1})
//
db.employees.insertMany(
    {name:"abc","cathy","mike"}
)
//
db.employees.find({_id:0,name:1}).collation({locale:'en',strength:2}).sort({name:1})
//


//Q11.js
//
db.employees.aggregate(
    [
        {},
        {},
        {}
    ]
)
//$match → Filter (like find)
db.employees.aggregate(
    [
        { $match: { department: "HR" } }
    ]
)
//$project → Select / reshape fields
db.employees.aggregate(
    [
        { $project: {_id:0,name: 1}}

    ]
)
//it will not show id department and salary baaki sab dikahyega 
db.employees.aggregate(
    [
        { $project: {_id:0,department:0,salary:0}}

    ]
)
//sort by ascending order
db.employees.aggregate(
    [
        {$sort:{name:1}}

    ]
)
//tells us the limit 
db.employees.aggregate(
    [
        {$limit:3}

    ]
)
//
db.employees.aggregate(
    [
        {$match: { department: "HR" } },
        { $project: {name: 1,email:1}},
        {$sort:{name:1}},
        {$limit:3},
        {$skip:1}
        
    ]
)
//
db.employees.aggregate(
    [
        {
            $group:{
            _id:"$department",
            total:{$sum:"$salary"},
            Highest:{$max:"$salary"},
            Lowest:{$min:"$salary"},
            Average:{$avg:"$salary"}
            
            },
            
        },
        {$sort:{ total: -1 }} ,
        {$limit:0}
        
        
    ]
)
//
db.employees.aggregate(
    [
        {$project:{
            _id:0,
            name:1,
            salary:1,
            annualSal:{$multiply:[12,"$salary"]}
            }
        }
    ]
)

// Q13.js
db.employees.aggregate([
    {
        $project:{
            _id:0,
            name:1,
            salary:1
        }
    }
])


//q14.js

//if we want to display dept insted of department 
db.employees.find(
    {},
    {name:1,dept:"$department"},
    
)
//Delete documents where address does NOT exist
db.users.deleteMany({
    address: { $exists: false }
})

 
db.users.insertOne(
    {
        name:"Anshul",
        age:20,
        address:{addr1:"50 Main St",city:"Columbus",state:"OH"}
    }
)
//wRONG WAY TO DISPLAY
db.users.find(
    {},
    {name:1,age:1,"address.city":1}
);
//good way to display city
db.users.find(
    {},
    {
        name:1,
        age:1,
        city:"$address.city"
    }
);
//will display state also 
db.users.find(
    {},
    {
        name:1,
        age:1,
        city:"$address.city",
        state:"$address.state"
    }
);
//add skills array for each users
//and populate java,python
//wrong way to add skills
db.users.updateMany(
    {},
    {$push:{skills:["Python , java"]}}
)
//correct way 
db.users.updateMany(
    {},
    {$set:{skills:["Python , java"]}}
)
//
db.users.insertOne(
    {name:"Anshul"},
    {$push:{Skills:".Net"}}
)
//another way to insert skills in one 
db.users.updateOne(
    {name:"Anshul"},
    {$addToSet:{skills:".Net"}}
)
//will show id name and skills only
db.users.find(
    {},
    {
        _id:0,
        name: 1,
        skills:1
    }
)


//q15.js
//This aggregation shows each employee’s **name and salary** and **assigns Grade A if salary > 4500, otherwise Grade B**.

db.employees.aggregate(
    [
        {$project: {
            _id:0,
            name:1,
            salary:1,
            grade:{
                $cond:[{$gt:["$salary",4500]},"Grade A","Grade B"]
            }
        }},
        
    ]
)

//another way to use if else condition
db.employees.aggregate(
    [
        {$project: {
            _id:0,
            name:1,
            salary:1,
            grade:{
                $cond:{if:{$gt:["$salary",4500]},
                then:"Grade A",
                else:"Grade B"}
            }
        }},
        
    ]
) 
//
db.employees.aggregate(
    [
        {$project: {
            _id:0,
            name:1,
            salary:1,
            grade:{
                $switch:{
                    branches:[
                        {case:{$gt:["$salary",4500]},then:"Grade A"},
                        {case:{$gt:["$salary",3000]},then:"Grade B"},
                    ],
                    default:"Grade C"
                },
            },
               
        }},
        
    ]
) 

//
db.orders.insertOne({
    empid:ObjectId('6980386e5dde662218cebea9'),
    product:"desktop",
    orderValue: 21000
})
db.orders.insertOne({
    empid:ObjectId('6980386e5dde662218cebea9'),
    product:"Watch",
    orderValue: 10000
})

//q15.js
//its shows all the data that be insert
db.orders.aggregate([
    {$project: {
        _id:0,
        empid:1,
        orderValue:1,
    }}
])
//its show which user order what
db.orders.aggregate([
    {$lookup: {
        from:"employees",
        localField:"empid",
        foreignField:"_id",
        as:"users"
    }}
])
//
db.employees.aggregate([
    {$lookup: {
        from:"orders",
        localField:"_id",
        foreignField:"empid",
        as:"orders"
    }},
    {$unwind:"$orders"},
    {$project: {
        name:1,
        orders:1,
    }}
])
//
db.employees.aggregate([
    {$lookup: {
        from:"orders",
        localField:"_id",
        foreignField:"empid",
        as:"orders"
    }},
    {$unwind:"$orders"},
    {$project: {
        name:1,
        product:"$orders.product",
        ordersValue:"$orders.orderValue"
    }}
])
//
db.employees.aggregate([
    {$lookup: {
        from:"orders",
        let:{uid:"_id"},
        pipeline:[{
            $match:{
                $expr:{$eq:["$_id","$$uid"]}
            }
        }],
        as:"orders"

    }},
    
    
])
//
db.employees.aggregate([
    {$lookup: {
        from:"orders",
        let:{uid:"_id"},
        pipeline:[{
            $match:{
                $expr:{$eq:["$_id","$$uid"]}
            }
        }],
        as:"orders"

    }},
    {$project:{
        name:1,
        product:"$orders.product",
        orderValue:"$orders.orderValue"
    }}
    
    
])


