function calling(fn:()=>void)
{
    setTimeout(fn,1000)
}

calling(function()
{
    console.log(("hi there!"))
})

//create a funciton that takes another function as input, and run it after 1 second
// so this is the fuintion  that I created in ts