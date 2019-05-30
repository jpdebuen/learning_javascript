const express = require("express");
const router = express.Router();

router.post("/ruta/:name/info/:age/", (request, response) => {
    let { name, age } = request.params;
    console.log("POST exec");
    response.send(`Con POST guardamos el valor para nombre: ${name} ${age}`);
});

router.post("/JSONs", (request, response) => {
    let { name, age } = request.body;
    console.log(request.body);
    console.log("POST exec");
    response.send(`Con POST guardamos el valor para nombre: ${name} ${age}`);
});

