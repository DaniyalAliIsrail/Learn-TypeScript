// Three main primitives in JavaScript and TypeScript.
// 1:Number 2:String 3:Boolean



let num: number = 10;
let str: string = 'Hello, TypeScript!';
let bool: boolean = true; // true ya false

console.log(num);
console.log(str);
console.log(bool);

// When creating a variable, there are two main ways TypeScript assigns a type:

// Explicit
let value:number = 20; //type define hay to explicit
// Implicit
let word = "string" //type define NHY hay to Implicit

// non-primitive
// 1:array 2:tuples


let arr: number[] = [1, 2, 3,];
let strArr: string[] = ["daniyal","ali"];
console.log(arr);
console.log(strArr);

//tuple 
// tuples are great because they allow each element in the array to be a known type of value.
let tuple : [number, string, boolean] = [10, "hello", true];
tuple.push("hello")
console.log(tuple);



