class tueur {
  constructor (Name, HealthPoint) {
    this.Name = Name
    this.HealthPoint = HealthPoint 
  }
}
let jason = new tueur ('Jason', 100)

class caractéristique {
  constructor (name, DeathChance, DmgChance, DeathDmgChance) {
    this.name = name
    this.DeathChance = DeathChance
    this.DmgChance = DmgChance
    this.DeathDmgChance = DeathDmgChance
  }
  attaquer() {
    let attaque = Math.random()
    if (attaque < this.DeathChance) {
      return "mort"
    } else if (attaque < this.DmgChance) {
      return "Le survivant a infligé 10 points de dégats"
    } else if (attaque < this.DeathDmgChance) {
      return "Le survivant est mort mais a infligé 15 points de dégats"
    }
  }
}

class survivant {
  constructor (nom, characteristic){
    this.nom = nom
    this.characteristic = characteristic
  }
}

let Caractéristiques= [
  new caractéristique('Blonde', 0.1, 0.6, 0.8),
  new caractéristique('Sportif', 0.2, 0.3, 0.8),
  new caractéristique('Weirdo', 0.1, 0.5, 0.4),
  new caractéristique('Geek', 0.2, 0.4, 0.6),
  new caractéristique('Joker', 0.2, 0.5, 0.8),

]

let names = ['Bob', 'James', 'Katia', 'Abby', 'Sam']
let survivants = []

while (survivants.length < 5) {
  let random = Math.floor(Math.random() * names.length)
  let NAME = names[random]
  let randomCharactéristique = Math.floor(Math.random() * Caractéristiques.length)
  survivants.push(new survivant(NAME, Caractéristiques[randomCharactéristique]))
  names.splice(random, 1);
}

console.log(survivants)

let ListeMorts = []

while (jason.HealthPoint > 0 && survivants.length > 0) {
  let survivantIndex = Math.floor(Math.random() * survivants.length)
  let survivor = survivants[survivantIndex]
  let action = survivor.characteristic.attaquer()

  if (action === "mort") {
    ListeMorts.push(survivor.nom)
    survivants.splice(survivantIndex, 1)
    console.log(`${survivor.nom} à été tué par Jason`)
  } else if (action === "Le survivant a infligé 10 points de dégats") {
    console.log(`${survivor.nom} à ésquivé et a infligé 10 points de dégats a Jason`)
    jason.HealthPoint -= 10
  } else if (action === "Le survivant est mort mais a infligé 15 points de dégats") {
    ListeMorts.push(survivor.nom)
    survivants.splice(survivantIndex, 1)
    console.log(`${survivor.nom} à été tué par Jason, mais lui a infligé 15 points de dégats`)
    jason.HealthPoint -= 15
  }

}

if (jason.HealthPoint <= 0) {
  console.log('Les survivants on tué Jason, mais RIP à ' + ListeMorts.join(", "))
} else {
  console.log(`Jason a tué tout les survivants, il lui reste ${jason.HealthPoint} points de vie`)
}