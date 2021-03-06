/*
var petObj = {
    "photo": "https://upload.wikimedia.org/wikipedia/commons/c/cc/ACD-blue-spud.jpg",
    "name": "Shanti",
    "sex": "Female",
    "breed":{
        "breedName": "Blue Heeler",
        "pedigree": true
    },
    "birthDate": "09/09/2005",
    "color": "brown",
    "owners":[
        {
        "name": "Jorge",
        "address": "Paseo de los Tamarindos 218",
        "phone": "4422490259",
        "email": "jp.debuen@gmail.com"
        },
    ],
    "appointment":{
        "date": "05/15/2019",
        "time": "16:00",
        "recurrent": "true"
    },
    "vaccines":[
        {
            "name": "Canine Influenza Virus-H3N2",
            "applied": true
        },
        {
            "name": "Bordatella",
            "applied": true
        },
        {
            "name": "Canine Influenza Virus-H3N8",
            "applied": true
        },
        {
            "name": "Rabies",
            "applied": true
        },
    ],
    "sterilized": true
}

// const http = require("http");
// const port = 80;

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hallo ");
//     response.write("Welt\n");
//     response.end("End");
// });

// server.listen(port); 


const express = require("express");
const app = express();
const port = 4555;
var contador = 1;

// app.use((request, response, next) => {
//     console.log("Time", Date.now());
//     next();
// });

// // app.use("/jorge", (request, response, next) => {
// //     console.log("Resulta que Jorge es una persona.")
// //     next();
// // });

// app.use((request, response, next) => {
//     console.log(`Has visitado esta página ${contador} veces.`)
//     contador++;
//     next();
// });

app.use((request, response, next) => {
    console.log("Request-Type:", request.url);
    next();
});

app.use((request, response, next) => {
    console.log("Request-Type:", request.method);
    next();
});

app.use("/static", express.static("../public"));

app.get("/object", (request, response) => response.send(petObj));
app.get("/jorge", (request, response) => response.send("jorge es una persona."))
app.get("/html", (request, response) => response.send(`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Clase 28 de mayo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/main.css">
    </head>
    <body>
        <h1>hey</h1>

        <!--SCRIPTS-->
        <script src="./src/main.js"></script>
    </body>
</html>
`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

*/

/* ---CLASE DEL--- 29 */

const express = require("express");
const app = express();
const port = 4555;

app.use(express.json())

app.get("/", (request, response) => {
    console.log('POST exec')
    response.send('Aquí se ejecutó el GET.');
});

app.post("/ruta/:name/info/:age/", (request, response) => {
    let { name, age } = request.params;
    console.log("POST exec");
    response.send(`Con POST guardamos el valor para nombre: ${name} ${age}`);
})

app.get("/query", (request, response) => {
    let { name, age } = request.query;
    console.log(request.query);
    console.log("GET exec");
    response.send(`Con GET guardamos el valor para nombre: ${name} ${age}`);
})

app.post("/JSONs", (request, response) => {
    let { name, age } = request.body;
    console.log(request.body);
    console.log("POST exec");
    response.send(`Con POST guardamos el valor para nombre: ${name} ${age}`);
})

app.put("/", (request, response) => {
    console.log('PUT exec');
    response.send('Aquí se ejecutó el PUT.');
});

app.delete("/", (request, response) => {
    console.log('DEL exec');
    response.send('Aquí se ejecutó el DEL.');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));