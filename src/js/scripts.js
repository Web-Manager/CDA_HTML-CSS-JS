/***** Functions *****/
/*
 * @param {type} str
 * @returns {undefined}
 */function display(str) {
  console.log(str);
}

/*
 * 
 * @param {type} str
 * @returns {Boolean}
 */
function isEmpty(str) {
  if (str.length == 0) {
    return true;
  } else {
    return false;
  }
}
/*** End Functions ***/

/* Exercice 1
 *
 * De demander le nom de l'utilisateur (input)
 * D'afficher  le nom de l'utilisateur sur la page (par ex. Bonjour Nom)
 *
 * Exercice effectuer avec la touche [Entrée] et non le bouton
 */
let inputName = document.querySelector("#name");
let btnEx1 = document.querySelector("#btnEx1");
let resultEx1 = document.querySelector("#resultEx1");

btnEx1.addEventListener('click', (e) => {
  let result = "Attention de bien indiquer votre nom !";

  if (!isEmpty(inputName)) {
    result = "Bonjour " + inputName.value + ", soyez le bienvenue !";
  }

  resultEx1.innerText = result;
});

/* Exercice 2
 *
 * De demander à l'utilisateur d'entrer un nombre
 * D'afficher à l'utilisateur son nombre multiplié par 2
 * Par exemple :
 *    Si l'utilisateur entre 5
 *    Le code doit afficher 10
 *
 *    Si l'utilisateur entre 12
 *    Le code doit afficher 24
 *
 * Vous ne devez PAS utiliser de console.log
 * Vous DEVEZ afficher le résultat directement sur la page
 */

let inputNumberEx2 = document.querySelector("#numberEx2");
let btnEx2 = document.querySelector("#btnEx2");
let resultEx2 = document.querySelector("#resultEx2");

btnEx2.addEventListener('click', (e) => {
  let result = "Impossible de faire un calcul sans un nombre !";
  if (!isEmpty(inputNumberEx2)) {
    result = "Le résultat de " + inputNumberEx2.value + " x 2 est égal à " + (parseInt(inputNumberEx2.value) * 2);
  }

display(inputNumberEx2.value + " / " + resultEx2);
  resultEx2.innerText = result;
});

/* Exercice 3 :
 *
 * De demander à l'utilisateur d'entrer deux nombres différents
 * Inversez les deux valeurs
 *
 * Afficher à l'utilisateur :
 *  - La valeur A = (valeur A) et la valeur B = (valeur B)
 *
 *  - Puis ensuite afficher dessous :
 *  - La valeur A est maintenant égale à (valeur A) et la valeur B est maintenant égale à (valeur B)
 */

let inputNumberEx31 = document.querySelector("#numberEx31");
let inputNumberEx32 = document.querySelector("#numberEx32");
let btnEx3 = document.querySelector("#btnEx3");
let resultEx3 = document.querySelector("#resultEx3");
let temp;

btnEx3.addEventListener('click', (e) => {
  let result = "Impossible de faire l'exercice si vous n'entrez pas deux nombre !";

  if (!isEmpty(inputNumberEx31) && !isEmpty(inputNumberEx32)) {
    document.querySelector("#firstNumber").innerText = "Le premier chiffre que vous avez entré est : " + inputNumberEx31.value;
    document.querySelector("#secondNumber").innerText = "Le second chiffre que vous avez entré est : " + inputNumberEx32.value;

    temp = inputNumberEx31.value;

    inputNumberEx31.value = inputNumberEx32.value;
    inputNumberEx32.value = temp;

    result = "Désormais les chiffres sont inversés dans les champs ;-).";
  }

  resultEx3.innerText = result;
});

/* EXercice 3 :
 * De demander à l'utilisateur d'entrer son niveau de compte (Abonné, Contributeur, Administrateur)
 * A l'aide d'un SWITCH,afficher à l'utilisateur :
 *    - Vous êtes un abonné. Dans le cas ou c'est un Abonné
 *    - Vous êtes un contributeur. Dans le cas ou c'est un Contributeur
 *    - Vous êtes un administrateur. Dans le cas ou c'est un Administrateur.
 *    - Vous n'êtes pas dans la liste. Dans tous les autres cas
*/

let profileList4 = document.querySelector("#profileList4");
let btnEx4 = document.querySelector("#btnEx4");
let resultEx4 = document.querySelector("#resultEx4");

btnEx4.addEventListener('click', (e) => {
  let result = "Merci de choisir votre profil dans la liste !";

  if (profileList4.selectedIndex == 1) {
    switch (profileList4.value) {
      case "subscriber":
        result = "Abonné(e)";
        break;
      case "contributor":
        result = "Contributeur(trice)";
        break;
      case "administrtor":
        result = "Administrateur(trice)";
        break;
      default:
        result = "Profil introuvable";
    }
    
    result = "Votre profil est : " + result;
  }

  resultEx4.innerText = result;
});