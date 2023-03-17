/*
 * Exercie 9 : 
 *  Avec JS vous devez :
 *    - Ajouter un h1
 *    - Ajouter un h2
 *    - ajouter un paragraphe
 *    - ajouter un autre paragraphe avec un lien dedans
 */

const tagBody = document.body;
const newH1 = document.createElement("h1");
const newH2 = document.createElement("h2");
const newDiv = document.createElement('div');

newH1.innerText = "Formation CDA - Javascript";
newH2.innerText = "Evaluation exercice 9";
newDiv.innerHTML = "<p>Texte 1 : Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>";
newDiv.innerHTML += "<p>Texte 2 : Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>";

tagBody.append(newH1);
tagBody.append(newH2);
tagBody.append(newDiv);




