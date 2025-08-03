// // when you need to define a type of object which take argument inside a funtion that's where interfaces comes in picture
// //eg
// let user = {
//     name:"shivam",
//     age: 24,
//     address: {
//         city: "Agra"
//     }
// }

// function isLegal(user):{ // how gonna u define type of user that's where interfaces comes in picture

// }

//issue : got that right
// to define it's type you use interfaces

interface User {
    name: string,
    age: number,
    address: {
        city: string,
        country: string
    }
}

let user1: User = {
    name:"shivam",
    age: 24,
    address:{
        city: "Agra",
        country: "India"
    }
}

function isLegal(user1: User):boolean{
    if (user1.age>18){
        return true
    }
    else{
        return false
    }
}

console.log(isLegal(user1))