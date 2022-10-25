// Iteration 1: Names and Input
const hacker1 = "Platón"
console.log("The driver's name is " + hacker1);
const hacker2 = "Aristóteles"
console.log("The navigator's name is " + hacker2);
// Iteration 2: Conditionals
let name1 = hacker1.length;
let name2 = hacker2.length;

if (name1 > name2){
    console.log("The driver has the longest name, it has " + name1 + " characters.");
}
else if (name1 < name2){
    console.log("It seems that the navigator has the longest name, it has " + name2 + " characters.");
}
else if (name1 === name2){
    console.log("Wow, you both have equally long names, " + XX + " characters!");
}
// Iteration 3: Loops
let name1Characters = "";
let name2Characters = "";

for (let i = 0; i < name1; i++){
    name1Characters += hacker1[i].toUpperCase();
    name1Characters += " ";
}
console.log(name1Characters);

for (let j = name2 - 1; j >= 0; j--){
    name2Characters += hacker2[j];
}
console.log(name2Characters);