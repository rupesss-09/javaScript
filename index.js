//1. Introduction to JavaScript

//2. Different ways to write JavaScript code.

//3. There are 7 different datatypes in JavaScript
const dataTypes = [
    'undefined',
    'null',
    'object',
    'number',
    'string',
    'boolean',
    'symbol',
];

//4. How to skip quotation in JavaScript
let statement = '"I am skipping a quotation"';
console.log(statement);

let statement1 = "'Single quotation'";
console.log(statement1);

//5. Escaping out other than Quote
/*
\'  single quote
\"  double quote
|| backslash
\n newline
Ir carriage return
\t tab
\b backspace
\ f form feed
*/
console.log('||');
console.log('New line should be created.\nNew line');
console.log('Tab space is created.\t\tTab space.');
console.log('Tab space is created.\t\bTab space.');

// 6.Find the length of a string
var task = 'Learning';
console.log(task.length);

//7. String is immutable
let string = 'mtring';
//We can't do following to fix above string
string[0] = 'S';
//Nothing will change, value of string will be same "mstring"
console.log(string);
//Only way to fix it is
string = 'String';
console.log(string);
