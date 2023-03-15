/*
 * Dom2 : Exercices
 * Ecrivez un code HTML + JS qui permet :
 */

/* Exercice 1
 * 
 * De demander le nom de l'utilisateur (input)
 * D'afficher  le nom de l'utilisateur sur la page (par ex. Bonjour Nom)
 * 
 * Exercice effectuer avec la touche [Entrée] et non le bouton  
 */
let inputName = document.querySelector("#name");
let btnEx1 = document.querySelector("#btnEx1");

btnEx1.addEventListener('click', function (e) {
  document.querySelector("#resultEx1").innerText = "Bonjour " + inputName.value + ", soyez le bienvenue !";
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

btnEx2.addEventListener('click', (e) => {
  document.querySelector("#resultEx2").innerText = "Le résultat de " + inputNumberEx2.value + " x 2 est égal à " + (parseInt(inputNumberEx2.value) * 2);
});