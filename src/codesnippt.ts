interface People {
    name:string,
    age: number,
    greet:()=>string //this is another way to write funtion inside interfaces
}

let person: People ={
    name: "harkirat",
    age: 21,
    greet: ()=>{
        return "hi"
    }
    //this is how you can use this funtion when writing the interfaces inside implement
}


function prinPeople(person:People): string {
    console.log(person.name)
    return person.greet()
}
console.log(prinPeople(person))