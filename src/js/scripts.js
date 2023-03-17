/*
 * Script pour l'évaluation du 17 mars 2023
 */

/*
 * @param {type} str
 * @returns {undefined}
 */
function exercice(number, str) {
  console.log(` \n**********************************\nExercice : ${number} => ${str}`);
}

/*
 * @param {type} str
 * @returns {undefined}
 */
function display(number, str) {
  console.log(str);
}

/*
 * 	Exercice 1 :
 *    Initialiser la variable poney, assignez lui la valeur : poly
 */

let poney = "Poly";
exercice(1, `Le nom du poney est ${poney}`);

/*
 *  Exercice 2 :
 *    Initialiser la variable evaluation, assignez lui une valeur numérique 
 *    au hasard (à vous de choisir la valeur)
 */

let evaluation = 15;
exercice(2, `La note que vous avez obtenu est ${evaluation}`);

/*
 * Exercice 3 :
 *  Définissez une variable qui ne pourra pas changer par la suite, quoi qu'il arrive
 */

const pi = 3.14159;
exercice(3, `La valeur de Pi est ${pi}`);

/*
 * Exercice 4 : 
 *  Quelle est la syntaxe d'une condition ? (ecrivez une condition)
 */

if (evaluation <= 17) {
  exercice(4, `Votre note est de ${evaluation}.\nVous n'avez pas atteint le niveau requis qui est de 17`);
}

/*
 * Exercice 5 :
 *  Quelle est la syntaxe d'un switch ? (ecrivez un switch)
 */

let activity = "Boucher";
let result;

switch (activity) {
  case "Boucher":
    result = "Boucher";
    break;
  case "Boulanger":
    result = "Boulanger";
    break;
  case "Epicier":
    result = "Epicier";
    break;
  default :
    result = "inconnu";
}

exercice(5, `Votre métier est ${result}`);

/*
 * Exercie 6 :
 *  Quelle est la syntaxe d'une boucle for ? (ecrivez un for)
 */

let number = 17;

exercice(6, `Table de ${number}`);
for (i = 1; i <= 10; i++) {
  display(6, `\t ${number} x ${i} = ${number * i}`);
};

/*
 * Exercice 7 :
 *  Quelle est la syntaxe d'une boucle while ? (ecrivez un while)
 */

let limit = 25;
let count = 1;
exercice(7, `La limite à atteindre est ${limit}`);

while( count <= limit) {
  display(7, `Le compteur est à ${count}`);
  count++;
}