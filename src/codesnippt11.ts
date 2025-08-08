interface old {
    name: string,
    age: number
}
interface young {
    name: string,
    age: number,
    height: string
}

let older : old = {
    name: "sam",
    age: 80
}
let younger :young = {
    name: "lmao",
    age: 21,
    height: "5ft"
}

function displayuser(userr: old & young): void
{
    console.log(userr.name, userr.age, userr.height) // we need to implement all the aspect inside the old and the young
}

// console.log(displayuser(older)) // this will give us the error that height is not there
console.log(displayuser(younger)) // this will display the younger one all properties 