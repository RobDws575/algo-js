class personnage {
    constructor (Name, SantéMentale) {
        this.Name = Name 
        this.SantéMentale = SantéMentale 
    }
}

let Nate = new personnage ("Nate", 10)
let Musiques = [
    "I Miss The Days - NF",
    "Meet you at the graveyard - Cleffy",
    "XO - Eden Project",
    "Daylight - David Kushner",
    "Anissa - Wejdene"
]

let TaxiChange = 0 // compteur des changements de taxi
let feux = 30 
while (feux != 0) {
    let radio = Math.floor(Math.random() * Musiques.length) 
    if (radio == 4) { // si la radio passe Wejdene
        Nate.SantéMentale -= 1 
        feux -= 1 
        TaxiChange += 1 
        console.log(`Le taxi joue ${Musiques[radio]}`)
        console.log(`Nate déteste cette chanson et change de taxi. Il lui reste ${Nate.SantéMentale} points de santé mentale et ${feux} feux avant d'être chez lui`)
    } else {
        feux -= 1 
        console.log(`Le taxi joue ${Musiques[radio]}`)
        console.log(`Nate vibe sur cette chanson. Il lui reste ${Nate.SantéMentale} points de santé mentale et ${feux} feux avant d'être chez lui`)
    }
    if (Nate.SantéMentale <= 0) { // si la santé mentale du personnage passe a 0 
        console.log(`Nate a fait une surdose de musique nulle, il a explosé à ${feux} feux de chez lui`)
        break
    } else {
        continue
    }
}
if (Nate.SantéMentale != 0) {
    console.log(`Nate est arrivé a destination en écoutant de la bonne musique. Il a fallu qu'il change de taxi ${TaxiChange} fois.`)
} 
    
