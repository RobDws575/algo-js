let student = {
    name : "Robin",
    favoriteFood : "Hamburgers",
    city : "Paris",
}
let result = 0
let values = Object.values(student);

values.forEach((value) => {
    result += value.length
});
console.log(result)
if (result % 2) {
    console.log("impair")
} else {
    console.log("pair")
}
console.log('Le résultat est ' + result); // La concaténation
console.log(`Le résultat est ${result}`); // L'interpolation

//Ternaire 
console.log(`Le résultat est ${result % 2 ? 'impair' : 'pair'}`);
// Condition ? vrai : faux