// //getstudentInfo should return name , email and age
// function getStudentInfo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         name: "Anshul",
//         email: "anshul@gmail.com",
//         age: 21
//       });
//     }, 3000); 
//   });
// }

// async function main() {
//   try {
//     console.log("Fetching student info...");
//     const result = await getStudentInfo();  

//     console.log("Student Info:", result);
//     console.log("Program completed");

//   } catch (err) {
//     console.log(err);
//   }
// }

// main();

function getStudentInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userObj = {
        name: "Anshul",
        email: "abc@gmail.com",
        age: 21
      };
      resolve(userObj);
    }, 2000);
  });
}

// display only name
async function displayInfo() {
  const student = await getStudentInfo();
  console.log(student.name);
}

displayInfo();

async function main() {
  const result = await getStudentInfo();
  displayInfo(result);
  console.log("Program Completed Successfully");
}

main();