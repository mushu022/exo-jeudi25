

function Rectangle(longueur, largeur)

{

    this.longueur = longueur;

    this.largeur = largeur;

  

    this.getPerimetre = () => {

      return (this.longueur + this.largeur) * 2;

    }

  

    this.getAire = () => {

      return (this.longueur * this.largeur);

    }

  

    this.isSquare = () => {

      if (this.longueur === this.largeur)

    {

          return "C'est un carré";

    } else {

          return "Ce n'est pas un carré";

    }

    }

}

​

let rectangles = []

rectangles[0] = new Rectangle(9,9);

rectangles[1] = new Rectangle(7,4);

rectangles[2] = new Rectangle(1,27);

rectangles[3] = new Rectangle(12,12);

rectangles[4] = new Rectangle(8,11);

​

​

for (let i = 0 ; i < rectangles.length ; i++)

{

    console.log(rectangles[i].getPerimetre(), rectangles[i].getAire(), rectangles[i].isSquare());

}

