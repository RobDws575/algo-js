class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

isLucky() {
    return Math.floor(Math.random() * 100)  <= this.luck;
    }

attackPokemon(pokemon) {
    if (this.isLucky()) {
      let damages = this.attack - pokemon.defense
      pokemon.hp -= damages;
      console.log(`${this.name} a attaqué ${pokemon.name}, perdant ${damages} hp !`)
    } else {
        console.log(`${this.name} a raté son attaque !`)
    }
    }
}

let Tripotanus = new Pokemon('Tripotanus', 15, 5, 30, 50)
let Mewtow = new Pokemon('Mewtow', 10, 10, 30, 75)

let percent = 75 
let isLucky = Math.floor(Math.random() * 100)  <= percent;

Tripotanus.attackPokemon(Mewtow);

