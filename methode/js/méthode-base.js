let myArray= ["Greg", "Mary", "Devon", "James"]; 
let tab = [];
myArray.shift();
myArray.pop();
myArray.unshift('Matt');
//myArray.push('qq chose a la fin du tab');
console.log(myArray.indexOf('Mary'));
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
//

console.log(myArray.join(" "));

