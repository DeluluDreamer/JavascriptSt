//Task1
function student(n,da,marks)
{
    let [a,b,c,d,e]=marks;
    let total = a+b+c+d+e;
    let avg = total/5;
    for(let f=0;f<=marks.length-1;f++)
    {
        if(marks[f]>50)
        {
            console.log("Your "+f+" Subject is Pass");
        }
        else{
            console.log("Your "+f+" Subject is Fail");
        }
        if(marks[f]>=90)
        {
            console.log("Grad A");
        }
        else if(marks[f]>=75 && marks[f]<=89)
        {
            console.log("Grade B");
        }
        else if(marks[f]>=60 && marks[f]<=74)
        {
            console.log("Grad C");
        }
        else if(marks[f] >=50 && marks[f]<=59)
        {
            console.log("Grade D")
        }
        else{
            console.log("Fail");
        }
    }
    console.log("Total marks: ",total);
    console.log("Average marks: ",avg);
}
student("Karthick ",21,[90,80,50,20,10])

//Task2
let emp={
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
}
function cs(emp)
{
    let bs=emp.salary;
    let bon=0;
    if (emp.experience>=2)
    {
        bon=bs*10/100;
    }
    else if(emp.experience>=5)
    {
        bon=bs*10/100;
    }
    let finalsalary=bs+bon;
    console.log(emp.name);
    console.log(emp.role);
    console.log(emp.salary);
    console.log(finalsalary);
    console.log(bon);
}
cs(emp)
//Task3
let pro = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];
let fil =pro.filter((c,i,t) => {
    return c.price>2000;
});
console.log(fil);
fil.forEach((c)=>{
    console.log(c.name,"-",c.price);
})
let fill =pro.filter((c,i,t) => {
    return c.category=="electronics";
});
fill.forEach((c)=>{
    console.log(c.name,"-",c.category);
})
let ka=pro.filter((c,i,t)=>{
    return c.price < 1000;
});
ka.forEach((c)=>{
    console.log(c.name+" "+c.price);
});
let ja=pro.reduce((act,c,i,t)=>{
    return act+c.price;
},0);
console.log("Total Price",ja);

let so=pro.some((c)=>{
    return c.prince>50000;
})
console.log("IF MORE THAN 5000",so);

let eo=pro.every((c)=>{
    return c.price >500;
})
console.log(eo);

//TASK4

let eop = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 45000
    },
    {
        id: 103,
        name: "Karthick",
        role: "Full Stack Developer",
        salary: 55000
    },
    {
        id: 104,
        name: "Vijay",
        role: "UI Designer",
        salary: 35000
    },
    {
        id: 105,
        name: "Rahul",
        role: "Software Developer",
        salary: 60000
    },
    {
        id: 106,
        name: "Surya",
        role: "DevOps Engineer",
        salary: 50000
    }
];
let ma=eop.forEach((c)=>{
    console.log(c.name);
})
let pa =eop.filter((c)=>{
    return c.salary>40000
})
console.log(pa);
pa.forEach((c)=>{
    console.log("Salary above 4000 "+c.name+"-"+c.salary);
})
let mu=eop.find((c)=>{
    return c.id===103;
})
console.log(mu.id + "-" + mu.name);
let too=eop.reduce((acc,c,i,t)=>{
    return acc+c.salary;
},0)
console.log("Total Salary",too);
let ass=eop.sort((a,b)=>{
    return b.salary-a.salary;
})[0];
console.log("Hightest Salary: "+ass.salary+" And his name "+ass.name);
let hig =eop.sort((a,b)=>{
    return b.salary-a.salary;
})
let mj=hig.map((c) => {
    return +c.salary;
});
console.log(mj);
let og=eop.map((c)=>{
    return c.name;
})
console.log(og);
//Task5
let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];
function cc(cart) {

    let total = cart.reduce((sum, c) => {
        return sum + (c.price * c.quantity);
    }, 0);
    console.log("Total cart value:", total);

    if (total > 50000) {
        let discount = total * 10 / 100;
        total = total - discount;
        console.log("Discount:", discount);
    }
    console.log("Final payable amount:", total);
}
cc(cart);
//TASK 6
let stud = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];
let bol = stud.every((c)=>{
    return c.mark>40;
})
console.log(bol);
let result = stud.every((c) => {
    return c.mark > 40;
});
console.log(result);
let pe=stud.sort((a,b)=>{
    return a.mark - b.mark;
})
console.log(pe);
let oeg=pe.map((c)=>{
    return c.mark;
})
console.log(oeg);

//TASK 7

let numbers=[12,5,8,21,44,7,30,15];
let double=numbers.map((c)=>{
    return c*2;
});
console.log(double);
let even=numbers.filter((c)=>{
    return c%2===0;
});
console.log(even);
let greater=numbers.filter((c)=>{
    return c>15;
});
console.log(greater);
let first=numbers.find((c)=>{
    return c>20;
});
console.log(first);
let total=numbers.reduce((sum,c)=>{
    return sum+c;
},0);
console.log(total);
let check=numbers.some((c)=>{
    return c>40;
});
console.log(check);
let positive=numbers.every((c)=>{
    return c>0;
});
console.log(positive);
let highest=numbers.sort((a,b)=>{
    return b-a;
});
console.log(highest);

//TASK 8

let str="JavaScript is very powerful"
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("JavaScript"))
console.log(str.charAt(0));
console.log(str.charAt(str.length-1));
console.log(str.split(" ").length)
console.log(str.replace("JavaScript","Python"));
console.log(str.split(""))

//Task 10
let employees = [
    {id:101,name:"Arun",department:"IT",salary:45000,experience:2},
    {id:102,name:"Priya",department:"HR",salary:50000,experience:4},
    {id:103,name:"Karthi",department:"IT",salary:65000,experience:6}
];

let he = employees.map((c)=>{
    return c.name;
});
console.log(he);

let se = employees.find((c)=>{
    return c.name === "Priya";
});
console.log(se);

let df = employees.filter((c)=>{
    return c.department === "IT";
});
console.log(df);

let sf = employees.filter((c)=>{
    return c.salary > 50000;
});
console.log(sf);

let ts = employees.reduce((sum,c)=>{
    return sum + c.salary;
},0);
console.log(ts);

let hs = employees.reduce((max,c)=>{
    return c.salary > max.salary ? c : max;
});
console.log(hs);

let ex = employees.filter((c)=>{
    return c.experience > 3;
});
console.log(ex);

let lto =employees.sort((a,b)=>{
    return a.salary - b.salary;
});
console.log(lto);

let hto =employees.sort((a,b)=>{
    return b.salary - a.salary;
});
console.log(hto);

let av = ts / employees.length;

console.log("Total Employees:",employees.length);
console.log("Total Salary:",ts);
console.log("Highest Salary:",hs.salary);
console.log("Average Salary:",Math.round(av));