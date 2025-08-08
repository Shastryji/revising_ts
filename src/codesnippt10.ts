// create a function that takes either a user or an admin as input and return the user or admin name
interface Admin1 {
    name: string,
    age: number,
}
interface User2 {
    name:string,
    type:string
}

let admin11 : Admin1 = {
    name: "shivam",
    age: 21
}
let user11 : User2 = {
    name: "shastry",
    type: "user"
}

function displayType(displayer : Admin1|User2):string{
    return displayer.name // we can't do displayer.age or displayer.type
}
console.log(displayType(admin11)) //shivam
console.log(displayType(user11)) //shastry