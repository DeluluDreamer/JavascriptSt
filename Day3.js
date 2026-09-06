//T1
var name="Karthick";
name="arun"
var name="Hariny";
let age=21;
age=42;
//let age="53";
const city="Erode";
//city="Trichy";
//const city="bla";
const college="ABCCollege";
console.log(name,age,city,college);

//T2
console.log("Hello");
alert("Danger Zone");
let p=confirm("Do you ate Apple");
console.log(p)
let j=prompt("whats your name");
console.log(j);
let ka="Bling";
document.writeln(ka);

//T3
let name=prompt("Enter your name");
let nam=prompt("Enter your age");
let na=prompt("Enter your City");
let n=prompt("Enter your Qualification");
console.log(name);
console.log(nam);
console.log(na);
console.log(n);

//T4
let ne="JavaScript";
let one=100;
let two=99.5
let three=true;
let four=false;
let five=undefined;
let six= null;
console.log(typeof(ne));
console.log(typeof(one));
console.log(typeof(two));
console.log(typeof(three));
console.log(typeof(four));
console.log(typeof(five));
console.log(typeof(six));

//T5
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
console.log(students[0]);
console.log(students[1]);
console.log(students[students.length-1]);
console.log(students.length);

//T6
let employee = {
    namee: "Karthick",
    age: 21,
    role: "Developer",
    skills: ["JavaScript", "HTML", "CSS"],
    isWorking: true,
    qualification: ["BCA", "JavaScriptCourse"]
};
console.log(employee);
console.log(employee["namee"]);
console.log(employee["role"]);
console.log(employee.skills[0]);
console.log(employee.qualification[employee.qualification.length-1]);
console.log("Working Status:", employee.isWorking);

//T7
let a = 20;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//T8
let shirt=999;
let pant=1499;
let Shoes=1999;
let bag=799;
console.log(shirt+pant+Shoes+bag);

//T9 -11,10
let a1= 10;
let b1 = a1++;
console.log(a1);
console.log(b1);
//11,11
let a2 = 10;
let b2 = a2--;
console.log(a2);
console.log(b2);
//9,10
let a4= 10;
let b4 = a4--;
console.log(a4);
console.log(b4);
//9,9
let a3 = 10;
let b3 = --a3;
console.log(a3);
console.log(b3);

//T10
let num = 10;

num += 5;
console.log(num); 

num -= 3;
console.log(num); 

num *= 2;
console.log(num); 

num /= 4;
console.log(num); 

num %= 3;
console.log(num); 

num **= 2;
console.log(num); 

//T11
console.log(10 > 5); // true
console.log(10 < 5); //false
console.log(10 >= 10); //ture
console.log(10 <= 9); //false
console.log(5 == "5"); //ture
console.log(5 === "5"); //false
console.log(10 != "10"); //false
console.log(10 !== "10"); //true

//T12
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

//T13
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//T14
console.log(!true); //fasle
console.log(!false); //true
console.log(!(5 > 10)); //ture
console.log(!(10 > 5)); //false

//T15
console.log(5 == "5" && !(5 === 5) || 6 > 7); //true && false || false = false
console.log(10 > 5 && 8 < 12 || 4 === "4"); //true && true || false = true
console.log(7 === 7 && 10 != "10" || 5 >= 5);// true && false || true = true
console.log(15 < 10 || 20 > 15 && 5 == "5");//false || true && true = true

//T16
let agge=20;
let k=agge>=18 ? "Eligible to vote" : "Not Eligible";
console.log(k);

//T17
let password=true;
let pa=password=true?"Login successful":"Wrong password";
console.log(pa);

//T18
let namme = "Naveen";
let aage = 25;
let ciity = "Trichy";
console.log("My name is "+namme+". i am "+aage+" years old.i Live in "+ciity);

//T19
let a0= String(100);
let b0 = String(true);
let c = String(undefined);
let d = String(null);
let e = String([1, 2]);
console.log(a0, typeof a);
console.log(b0, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);

//T20
console.log(Number()); // 0
console.log(Number("")); // 0
console.log(Number("123")); // 123
console.log(Number("a1")); // nan
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(undefined)); // nan
console.log(Number(null)); // 0

//T21
console.log(Boolean()); false
console.log(Boolean("")); false
console.log(Boolean("hello")); true
console.log(Boolean(123)); true
console.log(Boolean(true)); true
console.log(Boolean(false)); false
console.log(Boolean(undefined)); false
console.log(Boolean(null)); false
console.log(Boolean([])); true
console.log(Boolean({})); true

//T22
let exp=prompt("Enter your age");
console.log(exp);
if(age<=18)
{
    console.log("You can vote")
}
else{
    console.log("You can not vote");
}

//T23
let exp1=prompt("Enter your num");
console.log(exp1);
if(exp1<0)
{
    console.log("NEGATIVE");
}
else if(exp>0)
{
    console.log("POSITIVE");
}
else{
    console.log("zero");
}

//T24
let marks = Number(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
}
else if (marks >= 80) {
    console.log("B Grade");
}
else if (marks >= 70) {
    console.log("C Grade");
}
else if (marks >= 60) {
    console.log("D Grade");
}
else {
    console.log("Fail");
}

//T25
let exxp=prompt("enter an age");
console.log(exxp);
let exx=prompt("enter an height");
console.log(exx);
let xxp=prompt("enter an weight");
console.log(xxp);
if(exxp>=18){
    if (exxp>=160)
    {
        if(weight>=60)
        {
            console.log("Congratulations! You are Selected");
        }
        else{
            console.log("not select:weight should be above 60");
        }
    }
    else{
        console.log("height should be above 160")
    }
}
else{
    console.log("age is less");
}

//T26
let color = prompt("Enter traffic light color:");4

switch (color) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}

//T27
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}

//T28
let sn = prompt("Enter your name:");
let sa = Number(prompt("Enter your age:"));
let sc = prompt("Enter your city:");

let tm = Number(prompt("Enter Tamil marks:"));
let em = Number(prompt("Enter English marks:"));
let mm = Number(prompt("Enter Maths marks:"));

let total = tm + em + mm;
let avg = total / 3;

let grade;

if (avg >= 90) {
    grade = "A";
}
else if (avg >= 80) {
    grade = "B";
}
else if (avg >= 70) {
    grade = "C";
}
else if (avg >= 60) {
    grade = "D";
}
else {
    grade = "Fail";
}

let voting;

if (sa >= 18) {
    voting = "Eligible";
}
else {
    voting = "Not Eligible";
}

console.log(`
Name: ${sn}
Age: ${sa}
City: ${sc}
Total: ${total}
Average: ${avg.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);