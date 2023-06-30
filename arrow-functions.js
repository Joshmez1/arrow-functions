/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumber (a,b) {
//     //code block 
//     return a + b;
// }

// let sum = addTwoNumber(3,5);
// console.log(sum);

// Arrow Function With Parameters

const addTwoNumber = (a,b)  => {
    //code block 
    return a + b;
}

let sum = addTwoNumber(3,5);
console.log(sum);

// Single Line Arrow Function With Parameters

const addTwoNumber2 = (a,b) => a + b;
let sum2 = addTwoNumber2(10,11);
console.log(sum2);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello There!!');

const sayHello = () => console.log('hello')
sayHello();

// Returning Multiple Lines


const returnMultipleLines = () => (
 `
    <p> This is a multiline string!
    </p> `
)

console.log(returnMultipleLines());