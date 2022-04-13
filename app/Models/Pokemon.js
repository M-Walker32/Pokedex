import { ProxyState } from "../AppState.js"

export class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    // this.nickName = data.name
    this.img = data.sprites.front_shiny
    this.weight = data.weight
    this.height = data.height
    this.types = this.pokemonTypes(data.types)

    this.user = data.user
  }

  pokemonTypes(types) {
    let pokemonTypes = ''
    console.log(types)
    types.forEach(t => pokemonTypes += '• ' + t.type.name + ' • ')
    return pokemonTypes
  }
  get Template() {
    return `            
    <div class="card p-3">
    <img class="img-thumbnail img-responsive"
      src='${this.img}'>
    <div class="align-flex-start pt-2">
      <h2>Name: ${this.name}</h2>
      <h6>Height: ${this.height} Weight: ${this.weight} Types: ${this.types} </h6>
    </div>
  </div>
  `
  }

}