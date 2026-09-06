//T29
(function(product,discount)
{
    alert(`Your Product ${product},Discount ${discount}%`)
}) (" WallPosters",420);

//Task 1
for(let a=1;a<=10;a++)
{
    console.log(a);
}
//T2
for(let a=10;a>=1;a--)
{
    console.log(a)
}
//T3
for(let num=2;num<=20;num+=2){
    console.log(num)
}
//T4
for(let num=1;num<=20;num+=2)
{
    console.log(num)
}
//multiplication T5
let a=5
for(let num=1;num<=10;num++){
    console.log(a+"*"+num+"="+num*a)
}
//T6
let c=10
while(c>=1)
{
    console.log(c)
    c--;
}
//T7
let sum =0;
for(let k=1;k<=10;k++)
{
    sum=sum+k;
}
console.log(sum);
//T8
let l=1;
do{
    console.log(l);
    l++;
}
while(l<=5)
//T9
//let a = 10;
// do {
//     console.log(a);
//     a++;
// } while (a <= 5);
//Output= 10
// Do while loop execute atleast once before checking an condition

//T10
let p ="Javascript"
for(let x of p){
    console.log(x);
}

//T11
let fruits=["apple","orange","banana","mango","grapes"];
for(let y of fruits){
    console.log(y);
}

//T12
let arr=["Karthick","Gino","Hemanth","Harish","Krishna"]
for(let n of arr){
    console.log("Student: "+n)
}

//T13
let obj = {
    nam3e:"Karthick",
    age: 21,
    role: "Developer",
    city: "Chennai"
};
for(let m in obj){
    console.log(m,obj[m]);
}

//T14
let obj2 ={
    product:"Wall Posters",
    Price:460,
    Brand:"Ownbrand",
    category:"Decore",
    stock:100,
}
for(let j in obj2){
    console.log(j,obj2[j]);
}

//T15
function Welcome( l ){
    console.log("WelCome to JavaScript");
}
Welcome();
Welcome();
Welcome();

//T16
function greet(nnam){
    console.log("Hello "+nnam);
}
greet("Naveen");
greet("Arun");
greet("Priya");

//T17
function student(lname ,age, department)
{
    console.log(lname+" "+age+" "+department);
}
student("Karthick",21,"cse");


//T18
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);

//T19
function salary(amount)
{
    return amount;
}
let ku=salary(42000)
console.log(ku);

//T20
function bonus(salary,bonusamount)
{
    return salary + bonusamount;
}
let sal=bonus(42000,500000)
console.log(sal);

//T21
function employee(name,role="Developer"){
    console.log(name,role);
}
employee("Arun");
employee("Priya","Designer");

//T22
function square(number){
    return number * number;
}
console.log(square(1));
console.log(square(4));
console.log(square(3));
console.log(square(8));
console.log(square(5));
console.log(square(1));

//T23
let calculate =function(a,b)
{
    return a+b;
}
let val=calculate(10,20);
console.log(val);

//T24
let multiply=(a,b)=>{
    return a*b;
};
let val1=multiply(10,20);
console.log(val1);

//T25
function test() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        
        console.log(b);
        console.log(c);
    }
    console.log(a);
}
test();

//T26
// console.log(a);
// var a=10;
//undefine

//T27
//error

//T28
// referrancerror

//T29
(function()
{
    alert(`Welcome to Javascript`)
}) ();
//T29 -ii
(function(product,discount)
{
    alert(`Your Product ${product} for Discount ${discount}%`)
}) (" WallPosters",420);

//T30
    function welcome() {
        console.log("Welcome");
    }

    function execute(callback) {
        callback();
    }
    execute(welcome);

//T31
    function* cashback() {
        yield "10% cashback";
        yield "20% cashback";
        yield "30% cashback";
        yield "Better luck next time";
    }
    let gen=cashback()
    for(let k of gen){
        console.log(k);
    }

//T32
console.log("Final Task");
let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    }
];
for(let h of employees)
{
    console.log(h);
}
for(let h of employees)
{
    for( let k in  h)
    {
        console.log(k+" "+h[k]);
    }
}
function displayEmployee(employee) {
    console.log("Name: " + employee.name);
    console.log("Age: " + employee.age);
    console.log("Department: " + employee.department);
    console.log("Role: " + employee.role);
    console.log("Salary: " + employee.salary);
}
for (let employee of employees) {
    displayEmployee(employee);
}
function retun(emplee){
    return emplee.salary;
}
let ka=[retun(employees[0]),retun(employees[1])];
console.log(ka);
console.log("arrow");
let aow = (employees) => {
    console.log(employees[0]);
}
aow(employees);

function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let benefit = benefits();

console.log(benefit.next().value);
console.log(benefit.next().value);
console.log(benefit.next().value);
console.log(benefit.next().value);