function add(str1: string, str2: string): string {
    return str1 + str2;
}

function func1(a: string): string {
    return a;
}

function func2(b: string): string {
    return b;
}

// Call the functions and pass their results to add
console.log(add(func1("Shivam"), func2("Shastry")));