// Three main primitives in JavaScript and TypeScript.
// 1:Number 2:String 3:Boolean
var num = 10;
var str = 'Hello, TypeScript!';
var bool = true; // true ya false
console.log(num);
console.log(str);
console.log(bool);
// When creating a variable, there are two main ways TypeScript assigns a type:
// Explicit
var value = 20; //type define hay to explicit
// Implicit
var word = "string"; //type define NHY hay to Implicit
// non-primitive
// 1:array 2:tuples
var arr = [1, 2, 3,];
var strArr = ["daniyal", "ali"];
console.log(arr);
//tuple 
// tuples are great because they allow each element in the array to be a known type of value.
var tuple = [10, "hello", true];
tuple.push("hello");
console.log(tuple);
