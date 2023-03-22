// Créer une fonction qui prend un tableau d'entiers en entrée 
// et qui retourne le plus grand nombre présent dans le tableau.

function maxNumber(array) {
  let tmpMaxNumber = 0;

  array.forEach((number) => {
    if (number > tmpMaxNumber) {
      tmpMaxNumber = number;
    }
  });

  return tmpMaxNumber;
}

let resulstMaxNumber = 0;
let numberList = [15, 5, 89, 36, 4, 7, 56];

console.log("Le nombre le plus grand du tableau est : " + maxNumber(numberList));

