//polymorph in ts

function delayedCalling(fn: ()=>void):void;

function delayedCalling(fn: ()=>string):string;

function delayedCalling(fn : ()=> void|string): void|string{
    setTimeout(async()=>{
        const result =fn();
        if(typeof result == "string")
        {
            console.log(result);
        }
    },3000)
}

delayedCalling(()=>{
    console.log("hi there");
})

delayedCalling(()=>{
    return "Hello from delayed call"
})