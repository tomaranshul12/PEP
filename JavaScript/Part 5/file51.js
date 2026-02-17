const url = "https://jsonplaceholder.typicode.com/users"
async function fetchData(){
const response = await fetch(url);
// const result = JSON.parse(response);
const result = await response.json()
console.log(result)

}

fetchData();