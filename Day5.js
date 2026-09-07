//var-  
//i) Var datatype is an global scope variable
//ii) Hoisting to the top of their initilization is undefined
//iii) Redeclaration and update may allowed 
//let-
// i) let  is an block scope
// ii) Hoisting is remain console error
// ii) reassignment is allowed ,redeclar is not allowed
//const- 
//i) it is an block scope,
//ii) Hoisting may leads to error
//iii) not allow redeclater and re-assign

//T2
//Yes we can redeclar var but not in let & const

//T3
// var x = 5;
// let y = 10;
// const z = 15;
// x = 20;
// y = 25;
// z = 30;
//output- 20 25 15

//T4
//D/B
// declaration mean created the variable without value
// initialization mean assigning its initial Value;

//T5
let a;
console.log(a);

//T6
// Hoisting is know as declaring an variable on top or bottom of the scope 

//T7
//Undefine - mean variable is decleared but value is not assigned 
//null - assign an empty value

//T8
console.log(typeof null); //Object
console.log(typeof undefined); //Undefined
console.log(typeof []); //Object
console.log(typeof {}); //Object
//

//T9
///D/B
//"==" - its not consider what datatype is that it only consider what value is declared
//"===" - it consider an datatype of both values should be in same

//T10
// "++i" - Pre-increment its first increase i, then uses the new value.
// "i++" - Post-increment its first use the current value then increases i .

//T11
let x1 = 10;
let y1 = "5";
console.log(x1 + y1);  //105
console.log(x1 - y1);  //5
console.log(x1 * y1);  //50
console.log(x1 / y1);  //2

//T12
//Logical Operation- are used to combine and check an condtition (&&,||,!)
//Example : 2&&3,4||2

//T13
console.log(5 > 3 && 10 > 5); // true
console.log(5 > 10 || 10 > 5); //false
console.log(!(5 > 3)); //false

//T14
//What is ternary operator 
// its an short way to write an if-else statenment with condition based true or false
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

//T15
//D/B
//Implicit Typecasting- Convert one dataype to another datatype ,when we merge 2 datatype what is datatype
//Explicit Typecasting- Convert datype manually

//T16
console.log(Number("123")); //123
console.log(Number("hello")); //nan
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Boolean(0)); //false
console.log(Boolean("hello")); //true

//T17
//Nan- Not An Number Print when we cannot change to number will print not an number 

//T18
//D/B
// if-else - use an conditon & comparisons 
//switch - used to compare one value with multipel case.

//T19
let age1 = 20;
if(age1 >= 18) {
    console.log("Adult"); 
} else {
    console.log("Minor");
}
//Output: Adult

//T20
//Nested if: Nested if used when we use if statenment inside another if statement
//example:
let agee = 20;
let ID = true;
if (agee >= 18) {
    if (ID) {
        console.log("You can enter");
    }
}

//T21
let na=10;
let re=na%2==0 ? "Even number" : "Odd Number";

//T22
//While = Used to repeat block of code but if condition is checked
//Do-while = I will print block of code atleast once

//T23
for(let i = 1; i <= 5; i++) {
    console.log(i);
}
//Output: 
//1
//2
//3
//4
//5

//T24
//For-of =  For-of used in string and array for(let x of arr)
//For-in =  For-in used in object only for(let x in obj)

//T25
let b=0
for(let a=1;a<=100;a++)
{
    b+=a;
}
console.log(b);

//T26
//D/B
//Slice -  to show an user specifi element ,No change an orginal value
//Splice -  to change an specific value in array ,change an orginal value

//T27
let arr = [1, 2, 3];
arr.push(4); //1,2,3,4
arr.pop(); //1,2,3
arr.unshift(0); //0,1,2,3
arr.shift(); //1,2,3
console.log(arr); //1,2,3

//T28
//Function Declaration - function declare with name // function a()
//Function expression -  stored in a variable // let add=function(){}

//T29
//Arrow function- Its main advantage is good in security, shorter and simple
let add = (a, b) => {
    return a + b;
};
console.log(add(10, 5));

//T30
function greet() {
    return "Hello";
}
let message = greet();
console.log(message);
//Output :  Hello