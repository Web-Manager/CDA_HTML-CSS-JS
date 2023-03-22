/*
 * All rights reserverd to Gilbert CAPUTO-CERNI.
 * This application is to use as that. Not modifications or partial code use are autorized.
 * If you want informations contact me at : manager-web@outlook.com
 *
 */

/*
 * Function to display string
 * @param {type} str : string to display
 * @returns Display in console
 */
function display(str) {
  console.log(str);
}

/*
 * Function to verify if number is integer
 * @param {type} elementName : Element name to verify
 * @returns {Boolean}
 */
function valueIsInteger(elementName) {
  return Number.isInteger(parseInt(elementName.value));
}

/*
 * Function to determine if 'even' or not
 * @param {type} number : number to test
 * @returns {String|Boolean} True if even
 */
function isEven(number) {
  if (valueIsInteger(number)) { // Vérifie si c'est un entier
    return number % 2 === 0;
  } else { // Si pas un entier : retourne false.
    return `${number} n'est pas un entier`; // Cette information est utile uniquement dans le cas des tests unitaire
  }
}

/*
 * Mettre la premi-re lettre d'une chaine en majuscule
 * @param {type} string
 * @returns {unresolved}
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
/*
 * Affiche le contenu d'un tableau
 * @param {type} array
 * @returns {String}
 */
function displayArray(array) {
  let i = 1;
  let str = "";

  str = `Il y a ${array.length} élément(s) dans le tableau\n`;
  str = str + "Il contient :\n";

  array.forEach((element) => {
    str = str + `\tElement '${i}' : ${element}\n`;
    i++;
  });

  return str;
}

/*
 * Display a error msg
 */
function msgError(elementName, msg) {
  elementName.className = "msg error";
  elementName.innerHTML = msg;
}

/*
 * Display a error msg
 */
function msgOk(elementName, msg) {
  elementName.className = "msg ok";
  elementName.innerHTML = msg;
}

/*
 * Reset the message displayed
 */
function msgReset(elementName) {
  display(elementName);
  elementName.className = "msg reset";
  elementName.innerHTML = "";
  elementName.innerText = "";
}

function whatIsIt(objectName) {
  let result = "";
  let typeOfObject = typeof (objectName);

  switch (typeOfObject) {
    case "boolean":
      result = "bolean";
      break;

    case "number":
      result = "number";
      break;

    case "string":
      result = "string";
      break;

    case "object":
      result = "object";
      break;

    default:
      result = "Object non défini";
  }

  return result;
}
