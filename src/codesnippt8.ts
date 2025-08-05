interface address {
    city: string,
    pincode :number
}

interface usermom {
    name: string,
    age: number,
    address: address // this is how we can use interface inside the interface
}

let momadd: usermom = {
    name: "kiran",
    age: 37,
    address: {
        pincode: 282007,
        city: "Agra"
    }
}

 function displayMom(momadd: usermom): boolean{
    if(momadd.age>18)
    {
        console.log("mom is an adult and age is " + momadd.age + " name is "+momadd.name + " address is "+ momadd.address.city)
        return true
    }
    else{
        return false
    }
 }

 console.log(displayMom(momadd))