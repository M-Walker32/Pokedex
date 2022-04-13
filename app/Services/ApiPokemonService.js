import { ProxyState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { pokemonApi } from "./AxiosService.js"

class ApiPokemonService {
  async setActivePokemon(name) {
    const res = await pokemonApi.get('pokemon/' + name)
    ProxyState.activePokemon = new Pokemon(res.data)
    // console.log(res)
  }

  async getApiPokemon() {
    const res = await pokemonApi.get('pokemon')
    ProxyState.pokemon = res.data.results
    // console.log('here it is:', res)
  }
}

export const apiPokemonService = new ApiPokemonService()