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
const homeContent = tagMain.getContent();
const tagSection = new elementManager("", "section");
const tagHeader4 = new elementManager("", "h3");
const tagAlerts = new elementManager("", "div");

let nodeMain = "";
let nodeAlert = tagAlerts.setNode("<p></p>");
nodeAlert += tagAlerts.setNode('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">x</span></button>');
tagAlerts.setNode(nodeAlert);

tagSection.setAttribute("class", "rounded-1 bg-primary bg-opacity-10 mb-3");
tagHeader4.setAttribute("class", "text-light bg-primary px-2 py-1 rounded-2");
tagAlerts.setAttribute("class", "alert alert-warning alert-dismissible fade show");
tagAlerts.setAttribute("role", "alert");

function homeSection() {
  tagMain.clear();
  tagMain.setHtmlContent(homeContent);
}

function dom5_1() {
  tagMain.clear();
  tagHeader4.setHtmlContent("Exercice 1 : Créer une simple calculatrice");
  
  nodeMain = tagSection.setNode(tagHeader4);
  
/*       Exercice 1
        <h4 class=" text-light bg-primary px-2 py-1 rounded-2">
          Exercice 1 : Créer une calculatrice simple
        </h4>
  
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        Vous pouvez fermer cette alerte en cliquant sur la croix à droite
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">x</span></button>
      </div>

        <div class="mx-3 py-2">
          <blockquote>
            Créer une calculatrice simple qui prend en entrée deux nombres
            et permet de réaliser les opérations de base (addition, soustraction,
            multiplication, division) en utilisant les fonctions et les opérateurs.
          </blockquote>

          <form action="action" class="mx-3 my-1">
            <label for="calculator">
              Entrez votre calcul : des chiffres séparés d'un opérateur '+', '-', '*' et '/'
            </label>
            <br>

            <input id="calculator" type="text" placeholder="Entrez votre opération" />

            <input type="submit" value="Calcul" id="btnEqualEx1" name="btnEqualEx1" />

            <p id="resultEx1"></p>
          </form>
        </div>
      </section>
*/

tagSection.setAppendChild(nodeMain);

tagMain.setAppendChild(tagSection.element);

tagSection.getHtml();
}
//tagMain.appendChild(tagSection);
//tagMain.appendChild(tagDiv);
//display(tagMain.getName());

