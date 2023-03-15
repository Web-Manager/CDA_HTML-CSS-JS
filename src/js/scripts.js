/***** Functions *****/
function display(str) {
  console.log(str);
}

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