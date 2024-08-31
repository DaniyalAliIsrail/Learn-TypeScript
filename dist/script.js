"use strict";
// Three main primitives in JavaScript and TypeScript.
// 1:Number 2:String 3:Boolean
let num = 10;
let str = 'Hello, TypeScript!';
let bool = true; // true ya false
console.log(num);
console.log(str);
console.log(bool);
// When creating a variable, there are two main ways TypeScript assigns a type:
// Explicit
let value = 20; //type define hay to explicit
// Implicit
let word = "string"; //type define NHY hay to Implicit
// non-primitive
// 1:array 2:tuples
let arr = [1, 2, 3,];
let strArr = ["daniyal", "ali"];
console.log(arr);
console.log(strArr);
//tuple 
// tuples are great because they allow each element in the array to be a known type of value.
let tuple = [10, "hello", true];
tuple.push("hello");
console.log(tuple);
// any ;
let anyValue;
anyValue = 10;
anyValue = "hello";
console.log(anyValue);
//unknow ;
let example;
example = "hello";
example = 123;
// unknown may ksy bhy type ka variable use kar sakty hay pr jnb koe method use kray gey to usko cnfm krey gey phlay ksy ye knsa datatype hay...
if (typeof example === "string") {
    console.log(example.toUpperCase());
}
// TypeScript mein object ek data type hai jo non-primitive values ko represent karta hai, object type kisi bhi aisi cheez ko represent kar sakta hai jismein key-value pairs hoon.
let myObject = { name: "Ali", age: 25 };
// -----------------------------------------------------------------------
// enum
//enum k help say chezo ko grp krsakty hay
// Enum ek tarika hai ek set of named constants ko define karne ka.
// Isse aapke code ki readability aur manageability badhti hai.
// Aap enums ko numeric, string, ya mix values ke liye use kar sakte hain.
// Yeh type safety aur consistency ensure karte hain, especially jab aap predefined values ke saath kaam kar rahe ho.
var direction;
(function (direction) {
    direction["down"] = "down";
    direction["left"] = "right";
    direction["right"] = "right";
    direction["up"] = "up";
})(direction || (direction = {}));
console.log(direction.up);
// enum Status {
//     Active = 1,
//     Inactive = 5,
//     Pending = 10
//   }
//   console.log(Status.Active); // Output: 1
//   console.log(Status[5]);     // Output: 'Inactive'
//* union and intersection
// ---------------------------union-----------------------------------------
// Union type hai jo multiple data types ko combine kar sakta hai
let unionVar;
unionVar = "daniyal";
if (typeof unionVar === "string") {
    console.log(unionVar.toUpperCase());
}
let a = {
    name: "akbar",
    section: "B",
    rollNo: 123
};
// compnay nay bola user k varibale banado unhonay nay variabe k structure ya us varible ko kesy banana hay wo define keya huwa hay...
let user = {
    name: "daniyal",
    email: "daniyal@gmail.com",
    userId: 123
};
let dabbaObject = {
    weight: "50 kg",
    color: "black"
};
// class
// class Airpord {
//     price = 2500;
//     image = "image/airpord";
//     color = "white";
//     //method;
//     playMusic(){
//         console.log("Playing Music");
//     }
//     switchMode(mode:string){
//         console.log("Switched Mode");
//     }
// }
class AirConditioner {
    constructor() {
        this.color = "white";
        this.tone = 1;
        this.company = "tcl";
        this.temperature = 22;
        this.name = "ac";
    }
    turnOn(name) {
        console.log(`turn on ${name}`);
    }
    turnOf(name) {
        console.log(`turn off ${name}`);
    }
    raiseTemp() {
        this.temperature++;
        console.log(this.temperature);
    }
    lowerTemp() {
        this.temperature--;
        console.log(this.temperature);
    }
}
let ac1 = new AirConditioner;
ac1.turnOn("ac1");
