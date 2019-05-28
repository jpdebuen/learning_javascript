const fs = require("fs");

function writeFile(filePath, fileContent) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, fileContent, "utf8", error => {
            if (error) return reject(error)
            resolve("todo chido, koder")
        })
    })
}

function readFile (filePath){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (error, data) => {
            if (error) return reject(error)
            resolve(data)
        })
    })
}

async function main () {
    const filePath = "awaitfile.txt"
    await writeFile(filePath, "I´m the file you were aiting for.")
    
    const data = await readFile(filePath)
    console.log("Contenido del archivo creado: ", data)
}

main ()
    .then("El archivo funciona bien!")
    .catch("Ocurrió un error")