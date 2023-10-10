let prenoms = ["Heddi", "Robin", "Xavier"]
console.log(prenoms)

prenoms.push("Elsa") // Rajoue de Elsa
console.log(prenoms)

prenoms.splice(0, 1) // Supression de Heddi
console.log(prenoms)

prenoms.splice(2, 0, "Baptiste")
console.log(prenoms)