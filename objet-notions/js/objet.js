let voiture = {
    couleur: "bleue",
    forme:"cubique",
    nbRoues:4,
    fonctionne: true,
    marque:"opel",
    ecrireNom: function(name)
{
        alert("bonjour" + name)
    },
    ecrireCoucou: function()
{
        alert('coucou');
},
    ecrireProprietes: function()
    {
    alert("ma voiture est " + this.couleur);
    }
};


console.log(voiture.couleur);
console.log(voiture.marque);

voiture.ecrireNom("ma voiture se nomme pouet pouet");

let voiture2 = {
    couleur: "rouge",
    forme:"ronde",
    nbRoues:10,
    fonctionne: true,
    marque:"turfumobile",
}

    console.log(voiture.couleur);
    console.log(voiture.marque);
    
    voiture.ecrireNom("ma voiture se nomme pouet pouet");
