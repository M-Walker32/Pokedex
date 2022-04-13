import { ApiPokemonController } from "./Controllers/ApiPokemonController.js";
// import { MyPokemonContoller } from "./Controllers/MyPokemonController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
// import { }

class App {
  valuesController = new ValuesController();
  apiPokemonController = new ApiPokemonController();
  // pokemonController = new MyPokemonController();
}

window["app"] = new App();
