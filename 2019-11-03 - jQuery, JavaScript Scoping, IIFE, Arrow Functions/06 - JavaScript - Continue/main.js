// // JavaScript Types: 
// var a = 123;
// console.log(a, typeof a); // number

// var b = "Hi";
// console.log(b, typeof b); // string

// var c = true;
// console.log(c, typeof c); // boolean

// var d = {};
// console.log(d, typeof d); // object

// var e = function () { };
// console.log(e, typeof e); // function

// var f;
// console.log(f, typeof f); // undefined



// // JavaScript Global Constants: 
// console.log(null);
// console.log(undefined);
// console.log(NaN);
// console.log(Infinity);

// var a = null;
// console.log(a);
// var b;
// console.log(b);
// var c = "Hi" * 8;
// console.log(c);
// var d = 1 / 0;
// console.log(d);


// Falsy and Truthy
// Falsy - false-כל דבר ששווה ל
// Truthy - true-כל דבר ששווה ל
// Falsy Values: 
// false, 0, "", undefined, null, NaN

// //var a = false;
// var a = 0;
// //var a = "";
// //var a = undefined;
// //var a = null;
// //var a = NaN;
// if(a) {
//     console.log("Cat");
// }
// else {
//     console.log("Dog");
// }


// Abstract Comparison (==, !=) / Strict Comparison (===, !==)
// var a = 0;
// var b = "";
// console.log(a == b); // Abstract Comparison

// var c = null;
// var d = undefined;
// console.log(c == d); // Abstract Comparison

// var a = 0; // number
// var b = ""; // string
// console.log(a === b); // Strict Comparison

// var c = null; // object
// var d = undefined; // undefined
// console.log(c === d); // Strict Comparison


// // Hoisting:

// // This code: 
// console.log(a); // undefined
// var a = 123; // hoisting
// console.log(a);

// // Equals to this code: 
// var a;
// console.log(a); // undefined
// a = 123;
// console.log(a);



// // This Code: 
// doSomething();
// function doSomething() {
//     console.log("Doing Something...");
// }

// // Equals to this code: 
// function doSomething() {
//     console.log("Doing Something...");
// }
// doSomething();


// // This code: 
// doSomething();
// var doSomething = function(){
//     console.log("Doing Something...");
// };

// Equals to this code: 
// var doSomething;
// doSomething();
// doSomething = function(){
//     console.log("Doing Something...");
// };


// // var: 
// function f() {
//     // here x is really defined...
//     if(true) {
//         var x = 123;
//         console.log(x);
//     }
//     console.log(x);
// }
// f();


// // let: 
// function f() {
//     if(true) {
//         let x = 123; // Block Scoped Variable
//         console.log(x);
//     }
//     console.log(x);
// }
// f();



// // const: 
// function f() {
//     if(true) {
//         const x = 123; // Constant Block Scoped Variable
//         console.log(x);
//         x = 456;
//     }
//     console.log(x);
// }
// f();




// var x = 123;
// console.log(x, window.x);

// function f() { // f belongs to the window object! this is BAD for us!
//     console.log("f...");
// }
// f();
// window.f();


// function doSomething() {
//     var y = 123;
//     console.log(y, window.y);

//     function g() { // g doesn't belong to the window object. this is GOOD for us
//         console.log("g...");
//     }
//     g();
//     window.g();

// }
// doSomething();








"use strict"; // Set JavaScript to be in a Strict Mode - find all kinds of "bugs" and crash on them.

// Immediately Invoked Function Expression (IIFE)
(function () { // Start of IIFE

    var x = 123;
    function f() {
        console.log("f...");
    }
    f();

    // y = 456; // Crash!
    // console.log(y, window.y);
    
})(); // End of IIFE


var cat = {
    name: "Mitsi",
    age: 4
};

console.log(cat.name, cat.age, cat.color);

cat.color = "White";

console.log(cat.name, cat.age, cat.color);







