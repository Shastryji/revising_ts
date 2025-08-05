interface Admin {
    name: string,
    age: number,
    address?: {
        city: string
    }
}
//if we want to make it optional then we need to place address?: this ? means it's optional

let admin1 : Admin = {
    name: "shivam",
    age: 26,
    address: {
        city : "Agra"
    }
}
// this is also working fine as you see
let admin2 : Admin = {
    name: "shastry",
    age : 27
}

function adminDisplay(admin : Admin): boolean
{
    if(admin.age>20)
    {
        return true
    }
    else{
        return false
    }
}

console.log(adminDisplay(admin1))// this is how we can make it optional

console.log(adminDisplay(admin2))