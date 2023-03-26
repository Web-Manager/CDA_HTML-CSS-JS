/* 
 * Tous les exercices du Dom5
 * 
 * Des variables globales sont déclarées pour tous les exercices
 * Des fonctions utilisées dans plusieurs exercices sor déclarées3.
 * dans le fichier "src/js/tools.js"
 */

/*
 * Clear all data in an lement
 * @param {type} elementName : The name of element to clear
 * @returns {nothing}
 */
function clearHTML(elementName) {
  elementName.innerHTML = "";
}

/*
 * Global variables for all exercises
 * Use to store a string. 
 * 
 * Don't forget to init it at "" in each exercise
 * @type String
 */
let txtResult = "";

/*
 * Exercice 1
 * Créer une calculatrice
 */

const tagMain = new elementManager("main");
const tagSection = new elementManager("", "section");
let node = "";

tagMain.clear();

//const para = document.createElement("p");
//para.innerText = "This is a paragraph";
//document.body.appendChild(para);

tagSection.setClass("rounded-1 bg-primary bg-opacity-10 mb-3");
node = tagSection.setNode("C'est la section");
tagSection.setAppendChild(node);

tagMain.setAppendChild(tagSection.element);

tagSection.getHtml();
//tagMain.appendChild(tagSection);
//tagMain.appendChild(tagDiv);
//display(tagMain.getName());

