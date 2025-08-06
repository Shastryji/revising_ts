// lets create a class with implements interfaces in typescript it is similar to java

interface Peoples {
    name: string,
    age:number,
}

class Manager implements Peoples{
    name:string; //these values will attach with the Manager class
    age:number;

    constructor(name:string, age:number){
        this.name=name;
        this.age = age;
    }

}

let harkirat = new Manager("harkirat",30)
console.log(harkirat)