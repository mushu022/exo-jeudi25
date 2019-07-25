let nbCrayons = prompt("Combien vous avez de crayons?");
let crayons = [];

for(let i=0; i< nbCrayons; i++)

{
    crayons[i] = prompt("Entrez la couleur du crayon " + i);
}
console.log(crayons);

let cntV = 0;
let cntJ = 0;

let colorUser = prompt("Entrez votre couleur");
let cntColorUser = 0;

for(let i =0; i<crayons.length;i++)

{
    if(crayons[i] == 'V') {cntV++;}
    else if(crayons[i] == 'J') {cntJ++;}
    if(crayons[i] == colorUser) {cntColorUser++};
}

console.log("Il y a " + cntV + " crayons verts");
console.log("Il y a " + cntJ + " crayons jaunes");
console.log("Il y a " + cntColorUser + " crayons de la couleur demandée");