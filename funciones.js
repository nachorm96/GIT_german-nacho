const practicaRepo = require("./data/practicaRepo.json");
const tareas  = require("./data/tareas.json")
const {writeFileSync} = require("fs");
let guardarJson = (dato) => writeFileSync("./data/practicaRepo.json", JSON.stringify(dato, null, 4), "utf-8");
let guardarJson2 = (datos) => writeFileSync("./data/tareas.json", JSON.stringify(datos, null, 4), "utf-8")


module.exports = {
    listar: practicaRepo || tareas,
    listarForeach: () => {
        practicaRepo.forEach( (mas, i) => {
            console.log(`${i+1}. ${mas.titulo}  // ${mas.estado}`)
        })
    }
}