/*
 * Exercice 8 :
 *  Ecrivez le code qui permet de :
 *    - Modifier le contenu textuel du titre 1 du fichier ev-8.html
 *    - Ajouter un paragraphe après le titre 1 sur le fichier ev-8.html
 *    
 * Le code doit être écrit en JavaScript. Vous ne devez PAS toucher au fichier HTML.
 */

const tagH1 = document.querySelector("h1");
const tagMain = document.querySelector("main");
const newP = document.createElement('p');

tagH1.innerText = "Formation CDA : Evaluation exercice 8 ";
newP.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
tagMain.append(newP);



