const practicaRepo = require("./data/practicaRepo.json");
const {writeFileSync} = require("fs");
let guardarJson = (dato) => writeFileSync("./data/practicaRepo.json", JSON.stringify(dato, null, 4), "utf-8");

module.exports = {
    listar: practicaRepo,
    listarForeach: () => {
        practicaRepo.forEach( (mas, i) => {
            console.log(`${i+1}. ${mas.tarea}  // ${mas.estado}`)
        })
    }
}