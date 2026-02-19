import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("Server Started");

});
app.get("/",(request,response)=>{
    console.log(request.url)
    response.send("Response from server for /")
});
app.get("/Home",(request,response)=>{
    console.log(request.url)
    response.send("Response from server for /Home")
})
app.get("/Home/page1",(request,response)=>{
    console.log(request.url)
    response.send("Response from server for /Home/page1")
})