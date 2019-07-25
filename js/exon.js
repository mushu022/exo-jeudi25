let n = prompt("Entrez un nombre");
let tab = []
for(let i=0; i<n; i++)
{
    tab[i] = prompt("Valeurs" + i )
}
let search = prompt("Entrez la valeur de recherche");

let count=0;
for(let i=0; i<tab.length; i++) 
{
if(tab[i] == search)
{
    console.log("existe a la position" +i);
}
}

if (count == 0) 
{
    console.log("N'existe pas");
}