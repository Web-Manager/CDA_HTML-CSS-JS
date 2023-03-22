// Créer une fonction qui prend en entrée un nombre 
// et qui retourne vrai si le nombre est pair, faux sinon. 
// Utiliser l'opérateur modulo pour réaliser cette fonction.

/*
 * Function to determine if 'even' or not
 * @param {type} number : number to test
 * @returns {String|Boolean} True if even
 */
function isEven(number) {
  if (numberIsInteger(number)) { // Vérifie si c'est un entier
    return number % 2 === 0;
  } else { // Si pas un entier : retourne false.
    return `${number} n'est pas un entier`; // Cette information est utile uniquement dans le cas des tests unitaire
  }
}