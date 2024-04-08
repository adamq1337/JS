

//Objects, helps u store multiple properties in one variable, not same as an array.

/*
let userEmail = "example@email.com"
let userPassword = "hej123"
let userName = "Adam Persson"
let status = "platinum"
*/

let users = [

{
    email: "abc@email.com",
    password: "123",
    name: "joe mama",
    status: "gold",
    stats: [1.1, 0.5],
},
{
    email: "weeee@email.com",
    password: "bca",
    name: "mike hunt",
    status: "silver",
    stats: [0.7, 1],
},
];




function signUp(
    email, 
    password,
    name, 
    status, 
    issue,
    ){

            let user = {
                email: email,
                password: password,
                name: name,
                status: status,
                issue: issue,
            }

users.push(user)

};

signUp("adam@gmail.com", "owowo", "karl", "diamond", );




console.log(users);
/*
//arrays
let array = ["apples", "bananas", "eggs", "milk"];

array.push("kladdkaka");

// const fn = () => {}
let newarray = array.filter(element => {

    console.log(element);
    if(element.length <= 5){
        return 0
    }
    return 1;
});

console.log(newarray);
*/

/*
//by-pass reference
function sum(x, y){
    
    return x + y;
}


console.log(sum(1, 2));
*/
/*
// function
function greetUseer(name){
    console.log(`hello there, ${name}`);
}

greetUseer("Adam");
greetUseer("isak");
greetUseer("Adam");

*/

/*string code

let string = "adam persson"


console.log(string[0]);
console.log(string[string.length - 1]);
console.log(string.length);
*/


/*
//stable and let datatypes

let email = 1;
console.log(email + email);

const stable = 1;
console.log(stable);
*/

/*
//function account acces

let string = "hi adam persson";
let hadMembership = false;
let signedIn = true;
let age = 20;

if (age < 18){
    console.log(`get outa here ${age} year old `);
    console.log("get outa here " + age + " year old ");
}
else if (hadMembership === true){ 
console.log(string);
}

else if (signedIn === true & hadMembership === false){
    console.log("get membership?");
}

else if (signedIn == false){
    console.log("log in?");
}
*/

/*
// alternative operations
let isRaining = true;
let temprature = -2;

isRaining && temprature > 0 ? console.log("it is raining") : console.log("it is not raining");

*/
/*

//while loop
let counter = 1
console.log(counter);

while (counter < 6) {

    console.log(counter);
    counter += 1;

}
/*
//for loop

for(let counter = 0; counter < 6; counter += 1){
    console.log(counter);
}
*/