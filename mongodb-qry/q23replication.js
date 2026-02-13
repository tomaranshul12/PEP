// Create a folder named -: "mongo-replica"
//      Create folders name -: "usa,uk,india" inside "mongo-replica" folder


// Go to terminal -> Type -: " mongod  -replSet rs1 --dbpath "d:\mongo-replica\usa" --port 27018 "
//                  Type -: " mongod  -replSet rs1 --dbpath "d:\mongo-replica\uk" --port 27019 "
//                  Type -: " mongod  -replSet rs1 --dbpath "d:\mongo-replica\india" --port 27020 "
// Run all the three server parallely on a single terminal 


// Open another tab(4th tab) in the terminal and type -: "mongo --port 27018"

// Type the below given code in the 4th tab:
// rs.initiate({
//     _id: "rs1",
//     members: [
//         {_id: 0, host: "127.0.0.1:27018"},
//         {_id: 1, host: "127.0.0.1:27019"}, 
//         {_id : 2, host: "127.0.0.1:27020"}]
// })

// rs.config()

// rs.status()

// Now open another tab(5th tab) in the terminal and type -: "mongosh mongodb:127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020/?replicaSet=rs1"
// Type: "use mydatabase" -> "db.users.insertOne({name: "Sumanth", age: 21}

// Now open another tab(6th tab) in the terminal and type -: "mongosh --port 27018"

//  Now login to port 27019 -: "mongosh --port 27019"
// db.getMongo().setReadPref("secondary")
// use mydatabase
// show collections
// db.users.find()

//  Now login to port 27019 -: "mongosh --port 27019"
// db.getMongo().setReadPref("secondary")
// use mydatabase
// show collections
// db.users.find()

//  Now login to port 27020 -: "mongosh --port 27020"
// db.getMongo().setReadPref("secondary")
// use mydatabase
// show collections
// db.users.find()

// Now again go to 5th tab and type -: "db.users.insertOne({name: "Aman", age: 23}
// Now it will show in both 6th and 7th tab after some time because of replication lag.

//db.shutdownServer()