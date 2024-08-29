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

// any ;

let anyValue:any;

anyValue = 10;
anyValue = "hello";
console.log(anyValue);

//unknow ;

let example: unknown;
example = "hello";
example = 123;

// unknown may ksy bhy type ka variable use kar sakty hay pr jnb koe method use kray gey to usko cnfm krey gey phlay ksy ye knsa datatype hay...

if (typeof example === "string") {
    console.log(example.toUpperCase());  
}

// TypeScript mein object ek data type hai jo non-primitive values ko represent karta hai, object type kisi bhi aisi cheez ko represent kar sakta hai jismein key-value pairs hoon.

let myObject: object = { name: "Ali", age: 25 };

// -----------------------------------------------------------------------

// enum
//enum k help say chezo ko grp krsakty hay

// Enum ek tarika hai ek set of named constants ko define karne ka.

// Isse aapke code ki readability aur manageability badhti hai.

// Aap enums ko numeric, string, ya mix values ke liye use kar sakte hain.

// Yeh type safety aur consistency ensure karte hain, especially jab aap predefined values ke saath kaam kar rahe ho.

enum direction {
    down = "down",
    left = "right",
    right = "right",
    up = "up",
}

console.log(direction.up);

// enum Status {
//     Active = 1,
//     Inactive = 5,
//     Pending = 10
//   }
  
//   console.log(Status.Active); // Output: 1
//   console.log(Status[5]);     // Output: 'Inactive'
  
// --------------------------------------------------------------------
//* union and intersection

// Union type hai jo multiple data types ko combine kar sakta hai

let unionVar: number | string ;
unionVar = "daniyal";


if(typeof unionVar === "string"){
    console.log(unionVar.toUpperCase());
}
// this part is not run beacuse unionVar is string

// else if(typeof variable === 'number'){
//     console.log(unionVar.toUpperCase());

// }

// ---------------------------------------------------------------------

//Intersection

// Intersection type hai jo multiple data types ko combine kar sakta hai, aur intersection k lie jab koi value common hai to uske liye combine kar rhe hain

type Classmate = {
    section : string
}

type Student = {
    name : string,
    rollNo : number
}

// intersection k lie jab koi value common hai to uske liye combine kar rhe hain


type StudentClassmate = Student & Classmate;

let a:StudentClassmate = {
    name:"akbar",
    section:"B",
    rollNo:123
}



