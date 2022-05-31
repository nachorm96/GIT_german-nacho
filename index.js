const {listarForeach, listar} = require("./funciones");
const {argv} = require("process");
const practicaRepo = require("./data/practicaRepo.json");
const tareas  = require("./data/tareas.json")


switch (argv[2]) {
    case "listar"://usar la terminal con process, node index listar
        elegirJson = argv[3] 
        console.log(``);
        listarForeach(elegirJson);
        console.log(``);
        break;

    default:
        console.log("mas funciones proximamente");
        break;
}