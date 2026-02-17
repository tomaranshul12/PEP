// const student ={
//     name:"John",
//     age:21
// }

// names = {"John","Cathy","Mike"}
// const {name,age} = student
// console.log(name)
// console.log(age)

// const {n1,n2} = student
// console.log(n1)
// console.log(n2)

// const {name:userName} = student 
// console.log(userName)

// const student = {
//     name:"John",
//     age:21,
//     city:"Jalandar"
// }
// const {city="Amritsar"} = student
// console.log(city)

const student = {
    name:"John",
    age:21,
    marks:{
        maths:60,
        science:90
    }
}
// const {marks={math}} = student
// console.log(math)
const{marks}=student
console.log(marks)
const{marks:{math}}=student
console.log(math)







