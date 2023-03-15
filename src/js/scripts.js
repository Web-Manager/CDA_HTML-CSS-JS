//***** Functions *****/
/*
 * @param {type} str
 * @returns {undefined}
 */
function display(str) {
  console.log(str);
}
//*** End Functions

/*
 * Exercice "titre"
 * 
 * Ecrivez un script qui permet de modifier le h1 de la page
 * Ecrivez un script qui permet d'ajouter un paragraphe après ce h1
 */

/*
 * Constantes pour les différentes balises de la page : 
 */
const h1Ex1 = document.querySelector("h1");                                   // Balise H1
const btnEx1 = document.querySelector("#btnEx1");                             // Bouton bntEx1
const mainEx1 = document.querySelector("main");

const newElementEx1 = document.createElement("p");                            // Création d'un paragraphe
const newContentEx1 = document.createTextNode("C'est un nouveau paragraphe"); // Création d'un contenu pour le paragraphe

btnEx1.addEventListener('click', (e) => {                                     // J' "écoute" le click sur le bouton
  h1Ex1.innerText = "Formation CDA : Javascript DOM 3";                       // Je change le titre de la balise H1

  mainEx1.appendChild(newElementEx1);                                         // J'ajoute le paragraphe dans la page 
  document.querySelector("p").innerText = "Lorem Ipsum : Ceci est un nouveau chapitre"; // J'ajoute du contenu dans le paragraphe
});

