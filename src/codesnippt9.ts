// lets create a class with implements interfaces in typescript it is similar to java

interface Peoples {
    name: string,
    age:number,
}

class Manager implements Peoples{
    name:string; //these values will attach with the Manager class
    age:number;
    city: string;// we can add extra things but we can't remove the things that define inside interface

    constructor(name:string, age:number){
        this.name=name;
        this.age = age;
        this.city = "Chandighar"
    }

}

let harkirat = new Manager("harkirat",30)
console.log(harkirat)