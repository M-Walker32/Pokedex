import { ProxyState } from "../AppState.js";
import { apiPokemonService } from "../Services/ApiPokemonService.js";
import { Pop } from "../Utils/Pop.js";

function _drawPokemon() {
  let template = ''
  ProxyState.pokemon.forEach(p => template += `
  <h5 class="selectable text-uppercase" onclick="app.apiPokemonController.setActivePokemon('${p.name}')"> ${p.name} </h5>`)
  document.getElementById('pokemon').innerHTML = template
}

function _drawActivePokemon() {
  if (!ProxyState.activePokemon) {
    document.getElementById('my-pokemon').innerHTML = ''
  }
  else {
    document.getElementById('my-pokemon').innerHTML = ProxyState.activePokemon.Template
  }
}

export class ApiPokemonController {
  constructor() {
    this.getApiPokemon()
    ProxyState.on('pokemon', _drawPokemon)
    ProxyState.on('activePokemon', _drawActivePokemon)
  }

  async getApiPokemon() {
    try {
      await apiPokemonService.getApiPokemon()
    } catch (error) {
      Pop.toast(error, 'error')
      console.log(error)
    }
  }

  async setActivePokemon(name) {
    // debugger
    try {
      await apiPokemonService.setActivePokemon(name)
    } catch (error) {
      Pop.toast(error, 'error')
      console.log(error)
    }
  }

}