//verifier si
/*
4111-1111-1111-1111 : pas valide car il y a des tirets
4111 1111 1111 111 :pas valide car manque un digit
4111-1111-1111-1112 :pas valide car le dernier digit est faux
5555 5555 5555 4434 : pas valide car 1 digit est faux
1515 1515 1515 8464 :58 pas valide
4111 1111 1111 1111 : valide
8121 2121 2121 2121 : 30 multiple de 10, la carte est valide
5555 5555 5555 4444 : valide

Algorithme de Luhn

1.parcourir le numéro de carte de droite à gauche
2.doubler un chiffre sur deux
3.si un chiffredoublé est supérieur à 9, soustraire 9
4.sommer tous les chiffres
5.si le total est un multiple de 10, la carte est valide
*/

//lecture
let c = 'abcdefgh';
for (let i = 0; i < c.length; i++) {
    console.log(c.substring(i, i + 1));

}
for (let i = 7; i >= 0; i--) {
    console.log(c.substring(i, i + 1));
}