function p1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("P1 Success")
        },3000)
    })
}

function p2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("P2 Success")
        },1000)
    })
}

function p3(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("P3 Success")
        },3000)
    })
}
async function main(){
    try{
        const result = await Promise.all([
            p1(),
            p2(),
            p3()
        ]);
        console.log(result);
    }catch(e)

}