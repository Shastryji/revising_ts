interface Camel{
    name: string,
    age: number,
    id: string,
    password: string
}

// now let say you have to create another interface or type with some value of Camel interface
// interface Camel1{
//     name: string,
//     age: number,
//     id:string
// }
//the problem here is that if you change age nunber to string you have to do changes in both the interfaces we can write it using the 
// PICK and we can pick the variables

type cammel = Pick<Camel, 'name' | 'id' | 'password'> // we picked the name id and password from the camel interface
// interface cammell = Pick<Camel, 'name' | 'id' | 'password'> // this we can not do because we are assigning here so it has to be type only

type cammell = Partial<Camel> // this will create a partial type which can have the values or not also CAmel = {name?:string} //something like this

function printCamel(updatesCamel:cammel):string{
return updatesCamel.id
}

console.log(printCamel({name:"shivam",id:"sam12",password:"shivam"}))

