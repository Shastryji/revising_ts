// lets create a class with implements interfaces in typescript it is similar to java

interface People {
    name: string,
    age:number,
}

class Manager implements People{
    name:string; //these values will attach with the Manager class
    age:number;

    constructor(name:string, age:number){
        this.name=name;
        this.age = age;
    }

}