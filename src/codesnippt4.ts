function greet1(user: {
    name: string,
    age :number
}){
    console.log("hello "+user.name) // this will work as the return type 
}

let user = {
    name: "shivam",
    age: 24
}

greet1(user)