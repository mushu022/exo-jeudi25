

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Document</title>

    <style>

    span {

        color: red;

    }

    </style>

</head>

<body>

    

    <p id="para"> Coucou les <span id="spa">gens</span>

    </p>

    <script>

        let p = document.getElementById("para");

        let spa = document.getElementById("spa");

​

        p.addEventListener("click", function()

        {

            alert("mon paragraphe");

        });

​

        spa.addEventListener("click", function()

        {

            alert("mon span");

        })

    </script>

</body>

</html>


Envoyer un message à lorem_mccarthy
