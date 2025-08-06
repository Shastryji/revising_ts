// lets create a class with implements interfaces in typescript it is similar to java

interface People {
    name: string,
    age:number,
    address: {
        city: string,
        pincode: number
    }
}

class Manager implements People{
    name:string; //these values will attach with the Manager class
    age:number;

    constructor(name:string, age:number){

    }
}