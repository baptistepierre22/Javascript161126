//affichage de la table de multiplication de 5

//solution naive
console.log("1x5=5")
console.log("2x5=10")
console.log("3x5=15")
console.log("4x5=20")
console.log("5x5=25")
console.log("6x5=30")
console.log("7x5=35")
console.log("8x5=40")
console.log("9x5=45")
console.log("10x5=50")
//bonne solution avec une boucle for
for(let i = 1; i <= 10; i++) {
    console.log(`${i}x5=${i * 5}`);
}