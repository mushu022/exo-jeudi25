function Voiture(marque, modele, annee)
{
    this.marque = marque;
    this.modele = modele;
    this.anne = annee;

    this.demarre = function() {
        alert("Vrouuuum " + this.marque);
    }
}

let voiture1 = new Voiture("Opel", "Corsa", 2008);
console.log(voiture1.marque);

let voiture2 = new Voiture("Renault","R5", 1988);
console.log(voiture2.annee);

voiture2.demarre();