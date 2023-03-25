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
function clearHTML (elementName) {
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

const mainContent = new elementManager("mainContent");
let tagMainContent = mainContent.query();

display(mainContent.query());
display(tagMainContent);

// const tagBody = document.querySelector("body");
// const tagMainContent = document.querySelector("#mainContent");

//window.onload = clearHTML(tagMainContent);

window.onload = tagMainContent.clear();

const tagSection = new elementManager("section");

tagSection.create();
tagSection.className = "rounded-1 bg-primary bg-opacity-10 mb-3";




