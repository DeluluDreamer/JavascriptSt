var namee = "Karthick R"
namee="Surya"
let age = "21"
age="31"
const College ="R.M.K College of Engineering and technology"

console.log(namee);
console.log(age);
console.log(College);
let nam=prompt("Enter Your Name");
let ag=prompt("Enter Your Age");
let city=prompt("Enter Your City");
console.log("Name: ",nam);
console.log("Age: ",ag);
console.log("city: ",city);


let wel=prompt("Enter an name");
alert("Welcome  "+wel);

let birth=prompt("Enter ur birth year")
let ge=2026-birth;
console.log("Birth Year: ",birth)
console.log("Age: ",ge);

let a = "Hello";
let b = 100;
let c = 25.5;
let d = true;
let e = false;
let f = undefined;
let g = null;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

let object = {
    Name:"Karthick R",
    Age:"21",
    City:"Erode",
    Qualification:"B.E",
    isStudent:"Yes/No",
}
console.log(object);
console.log(object.Name);
console.log(object.Age);
console.log(object.Quaification);
console.log(object.isStudent);

let array=["Apple",
"Mango",
"Orange",
"Banana",
"Grapes",
"Papaya"]

console.log(array[0]);
console.log(array[1]);
console.log(array[array.length-1]);
console.log(array);

let aa = 20;
let bb = 5;

console.log(aa + bb);
console.log(aa - bb);
console.log(aa * bb);
console.log(aa / bb);
console.log(aa % bb);
console.log(aa ** bb);

let shirt=999;
let pant=1499;
let shoe=1999;
console.log(shirt+pant+shoe);

let tamil=80;
let english = 75;
let maths= 90;
console.log(tamil+english+maths);

//Tak 11 - 11,10
let kk = 10;
let uu = kk++;
console.log(kk);
console.log(uu);


//Task 12 - 11,11//
let a12 = 10;
let b12 = ++a12;
console.log(a12);
console.log(b12);


//Task 13 - 19,20//
let a13 = 20;
let b13 = a13--;
console.log(a13);
console.log(b13);


//Task 14 - 19,19//
let a14 = 20;
let b14 = --a14;
console.log(a14);
console.log(b14);


//Task 15 - 7,4,7,5//
let a15 = 5;
let b15 = a15++;
let c15 = ++a15;
let d15 = b15--;
console.log(a15);
console.log(b15);
console.log(c15);
console.log(d15);
//Task 16//
let num = 10;
num += 5;
console.log(num);

num = 10;
num -= 5;
console.log(num);

num = 10;
num *= 5;
console.log(num);

num = 10;
num /= 5;
console.log(num);

num = 10;
num %= 3;
console.log(num);

num = 10;
num **= 2;
console.log(num);

//Task 17//
let sn = "Karthick";
let sa = 21;
let sc = "Chennai";
let scollege = "R.M.K College of Engineering and Technology";

let ss = ["Tamil", "English", "Maths", "Science", "Computer Science"];

let student = {
    name: sn,
    age: sa,
    city: sc,
    subjects: ss,
    isStudent: true
};

console.log(student.name);
console.log(student.age);
console.log(student.city);
console.log(student.subjects[0]);
console.log(student.subjects[student.subjects.length - 1]);
console.log(student.subjects.length);
console.log(student);

//Final Task//
let one = Number(prompt("Enter first number"));
let two = Number(prompt("Enter another number"));

console.log("add:", one + two);
console.log("sub:", one - two);
console.log("mul:", one * two);
console.log("div:", one / two);
console.log("mod:", one % two);
console.log("pow:", one ** two);