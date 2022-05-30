const {listarForeach, listar} = require("./funciones");
const {argv} = require("process");

switch (argv[2]) {
    case "listar"://usar la terminal con process, node index listar
        console.log(``);
        listarForeach();
        console.log(``);
        break;

    default:
        console.log("mas funciones proximamente");
        break;
}