let n = 0;  // crée une variable n avec la valeur 0

n = n+1; // incrémente la valeur de n de 1, donc n devient 1
console.log(n); // affiche la valeur de n dans la console, donc 1

n=n+1;
console.log(n); // affiche la valeur de n dans la console, donc 2

n=n+1;
console.log(n); // affiche la valeur de n dans la console, donc 3

n=n+1;
console.log(n); // affiche la valeur de n dans la console, donc 4

n=n+1;
console.log(n); // affiche la valeur de n dans la console, donc 5

n=n+1;
console.log(n); // affiche la valeur de n dans la console, donc 6


//Pseudo code boucle
/*
i = 0
Tant que i est <10
    affiche i
    ajoute 1 à i
fin tant que
*/

//Javascript
for(let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while(i < 10) {
    i=i+1;
    console.log(i);
}