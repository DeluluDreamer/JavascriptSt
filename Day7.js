//TASK1
let apila='https://fakestoreapi.com/products'
fetch(apila).then((c)=>{ 
    return c.json();
})
.then((dada)=>{
    console.log(dada);
    dada.forEach((p)=>{
        console.log(p.title)
        console.log(p.price)
        console.log(p.category);
    });
    let tit=dada.map((k)=>{
        return k.title;
    })
    let pri=dada.map((k)=>{
        return k.price;
    })
    let cat=dada.map((k)=>{
        return k.category;
    })
    console.log(tit);
    console.log(pri);
    console.log(cat);
    let pa=dada.filter((c)=>{
        return c.price>100;
    })
    pa.forEach((c)=>
    {
        console.log(c.price+" "+c.title)
    })
    console.log(pa);
    let fa=dada.find((c)=>{
        return c.category=="electronics";
    })
    console.log(fa);
    console.log(fa.category+" "+fa.price+" "+fa.title);
    let jj=dada.reduce((acc,c)=>{
        return acc+c.price;
    },0)
    console.log("Total Price is "+jj);
    let ass=dada.sort((a,b)=>{
        return a.price+b.price;
    })
    ass.forEach((c)=>{
        console.log(c.price+" "+c.category);
    })
    console.log(ass);
    
})
.catch((err)=>{
    console.log("It is an error message")
})
.finally((c)=>{
    console.log("It is an success Message");
})
//TASK 2
let applo='https://fakestoreapi.com/products'
fetch(applo).then((c)=>{
    return c.json();
})
.then((tea)=>{
    console.log(tea);
    let tha=tea.reduce((acc,c)=>{
        return acc+1;
    },0);
    console.log("===== PRODUCT DASHBOARD =====");
    console.log("Toal Product: "+tha);
    let rone=tea.filter((c)=>{
        return c.category=="electronics";
    });
    let ooo=rone.reduce((acc,c)=>{
        return acc+1;
    },0);
    let hoo=tea.filter((c)=>{
        return c.category=="jewelery";
    })
    let hg=hoo.reduce((acc,c)=>{
        return acc+1;
    },0);
    let gg=tea.filter((c)=>{
        return c.category=="men's clothing"
    })
    let bf=gg.reduce((acc,c)=>{
        return acc+1;
    },0)
    let hf=tea.reduce((acc,c)=>{
        return c.price>acc ? c.price:acc;
    },0)
    let lo=tea.reduce((acc,c)=>{
        return c.price < acc ? c.price : acc;
    },Infinity);
    let pun=tea.reduce((acc,c)=>{
        return c.price>acc?c.price:acc;
    },0);
    let sum=tea.reduce((acc,c)=>{
        return c.price+acc;
    },0);
    let ol=sum/tea.length-1;
    console.log("Average: "+ol);
    console.log("Men's Clothing: "+bf);
    console.log("Electronics: "+ooo);
    console.log(`Jewelery: ${hg}`);

    console.log("Highest Price: " +hf);
    console.log("Lowest Value: "+ lo);
    console.log("Average: "+ol);
});
//TASK 4
let web2 = 'https://jsonplaceholder.typicode.com/posts';
    fetch(web2)
        .then((tit)=>{
            return tit.json();
        })
        .then((kla)=>{
            console.log(kla);
            let gf=kla.filter((c)=>{
            return c.userId === 1;
            })
            console.log(gf);
            console.log("Total Count for ID=1 is "+gf.length);
            let vp=kla.filter((c)=>{
                return c.title.length>50;
            })
            console.log(vp);
        })
//TASK 3
let web1 = 'https://jsonplaceholder.typicode.com/users';
fetch(web1)
    .then((response) => {
        return response.json();
    })
    .then((users) => {
        console.log("===== USERS =====");
        console.log(users);
        users.forEach((c)=>{
        console.log("Users Name: "+c.name);
        });
        users.forEach((c)=>{
            console.log("Users Name: "+c.name+"User email"+c.email);
        });
        let leo=users.find((c)=>{
            return c.id === 5;
        });
        console.log("User was "+leo.name+" User ID: "+leo.id);
        let jio=users.find((c)=>{
            return c.address.city === "Gwenborough";
        })
        console.log(jio.username);
    });
let web3 = 'https://fakestoreapi.com/products';
fetch(web3)
    .then((c) => {
        return c.json();
    })
    .then((ppl) => {
        console.log(ppl);
        let ooi=prompt("Enter your category");
        let iio=prompt("Enter your amount");
            let sk=ppl.filter((c)=>{
                return c.category === ooi && c.price<=iio;
            });
            console.log(sk);
    });
//TASK 5
let web8 = 'https://fakestoreapi.com/products';
fetch(web8)
    .then((response) => {
        return response.json();
    })
    .then((products) => {
        console.log("===== AVAILABLE PRODUCTS =====");

        products.forEach((c) => {
            console.log("ID: " + c.id + " Product: " + c.title + " Price: $" + c.price);
        });

        let id1 = Number(prompt("Enter Product ID:"));
        let id2 = Number(prompt("Enter Product ID:"));

        let product1 = products.find((c) => {
            return c.id === id1;
        });

        let product2 = products.find((c) => {
            return c.id === id2;
        });

        let cart = [];

        cart.push(product1);
        cart.push(product2);

        console.log("===== CART =====");

        cart.forEach((c, index) => {
            console.log("Product " + (index + 1) + ": " + c.title);
            console.log("Price: $" + c.price);
        });

        let total = cart.reduce((sum, c) => {
            return sum + c.price;
        }, 0);

        console.log("Total: $" + total);

        let discount = 0;

        if (total > 200) {
            discount = 20;
        } else if (total > 100) {
            discount = 10;
        }

        console.log("Discount: " + discount + "%");

        let discountAmount = total * discount / 100;
        let finalAmount = total - discountAmount;

        console.log("Final Amount: $" + finalAmount.toFixed(2));
    });

//TASK 6
let apiLink = 'https://fakestoreapi.com/products';

fetch(apiLink)
    .then((response) => {
        return response.json();
    })
    .then((products) => {
        console.log("========== PRODUCT REPORT ==========");

        console.log("Total Products: " + products.length);

        console.log("Product Names:");
        let names = products.map((c) => {
            return c.title;
        });
        console.log(names);

        let expensive = products.filter((c) => {
            return c.price > 100;
        });
        console.log("Products Above $100:");
        console.log(expensive);

        let electronics = products.find((c) => {
            return c.category === "electronics";
        });
        console.log("Electronics Product:");
        console.log(electronics);

        let total = products.reduce((sum, c) => {
            return sum + c.price;
        }, 0);
        console.log("Total Product Value: $" + total.toFixed(2));

        let any = products.some((c) => {
            return c.price > 500;
        });
        console.log("Any Product Above $500: " + any);

        let all = products.every((c) => {
            return c.price > 1;
        });
        console.log("All Products Above $1: " + all);

        products.sort((a, b) => {
            return b.price - a.price;
        });

        console.log("Highest → Lowest:");
        console.log(products);
    })
    .catch((error) => {
        console.log("Error: " + error);
    })
    .finally(() => {
        console.log("Finished");
    });