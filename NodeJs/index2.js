import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("Server Started");

});
app.get("/",(request,response)=>{
    console.log(request.url)
    response.send("Response from server for /")
})