let i=0;
let somme=0;
let moyenne=0;
let nb_notes=0;
nb_notes=prompt("Nb de notes");
notes = new Array(nb_notes);
for(i=1;i<=nb_notes;i++)
{
    notes_i=prompt("Entrez la note");
    console.log(notes_i);
    somme=parseInt(somme)+parseInt(notes_i);
}

moyenne = parseInt(somme) / parseInt(nb_notes);
document.write("la moyenne des notes est: " + moyenne) ;
