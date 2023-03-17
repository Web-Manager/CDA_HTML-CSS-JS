//***** Functions *****/
/*
 * Function to simplify the console display
 * @param {type} str : string to display
 * @returns {undefined}
 */
function display(str) {
  console.log(str);
}

/*
 * Function to know if a string is a integer
 * @param {type} str : string to verify
 * @returns {Boolean} : return true or false
 */
function valueIsInt(str) {
  return Number.isInteger(parseInt(str.value));
}

/*
 * Function : isNotEmpty - Verify if a string isn't empty
 * @param {type} str : string controled
 * @returns {Boolean} : return true or false
 */
function isNotEmpty(str) {
  let result = false;

  if (str.value !== "") {
    result = true;
  }

  return result;
}

/*
 * Obtain a random integer
 * @param {type} min : the minimum value
 * @param {type} max : the maximum value
 * @returns {Number} : return the random integer
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
//*** End Functions

const msgAlertNumber = "Merci de saisir un nombre";


/* Exercice Conversion
 *
 *  Ecrivez un programme pour permettre à l'utilisateur d'entrer un temps
 *  en seconde, et le convertir en minutes.
 *
 *  La conversion doit s'afficher sur la page HTML dans la div avec l'id convert
 *
 *  Vous devez afficher la conversion sous cette forme : xx secondes est égal à x minute
 *
 *  Contraintes :
 *    Vous devez prendre en compte :
 *      - D'afficher seconde au singulier s'il n'y a qu'une seconde
 *      - D'afficher seconde au pluriel s'il y a plus d'une seconde
 *      - D'afficher minute au singulier s'il n'y a qu'une minute
 *      - D'afficher minute au pluriel s'il y a plus d'une minute
 */

const addButton = document.querySelector('#btnConvert');
const tagSeconds = document.querySelector("#secondes");
const tagConvert = document.querySelector("#convert");


addButton.addEventListener('click', (event) => {
  if (isNotEmpty(tagSeconds) && valueIsInt(tagSeconds)) {
    let nowDate = new Date();
    let daysStr = " jour ";
    let hoursStr = " heures ";
    let minutesStr = " minutes ";
    let secondsStr = " secondes ";
    let resultConversion = tagSeconds.value + " seconde(s) se converti en => ";

    nowDate.setTime(parseInt(tagSeconds.value) * 1000);
    let convertDays = nowDate.getDay();
    let convertHours = nowDate.getHours() - 1;
    let convertMinutes = nowDate.getMinutes();
    let convertSeconds = nowDate.getSeconds();

    if (convertDays === 0 || convertHours === 1) {
      hoursDays = " jour ";
    }

    if (convertHours === 0 || convertHours === 1) {
      hoursStr = " heure ";
    }

    if (convertMinutes === 0 || convertMinutes === 1) {
      minutesStr = " minute ";
    }

    if (convertSeconds === 0 || convertSeconds === 1) {
      secondsStr = " seconde";
    }

    resultConversion += convertDays + daysStr
            + convertHours + hoursStr
            + convertMinutes + minutesStr
            + convertSeconds + secondsStr;

    tagConvert.innerText = resultConversion;

    console.log(resultConversion);
  } else {
    tagConvert.innerText = msgAlertNumber;
  }
  ;

  event.preventDefault();
});

/* Exercice : Nombre secret
 *
 * Développez le jeu pour découvrir le nombre secret.
 * Cette fois-ci, vous devez laisser le joueur choisir le nombre.
 *
 * A chaque nombre choisi, vous devez afficher : Plus grand, plus petit,
 * gagné ou perdu selon les cas.
 *
 * Le joueur n'a le droit qu'à 10 essai.
 *
 * Vous devez afficher et laisser choisir le joueur directement
 * sur la page HTML
 */
const btnTest = document.querySelector('#btnTest');
const tagNumber = document.querySelector("#number");
const msgSecretNumber = document.querySelector("#msgSecretNumber");
const tryLimit = 10;
const minNumber = 1;
const maxNumber = 50;
const newP = document.createElement('p');

let randomNumber = getRandomInt(1, 50);
let tryNumber = 1;
let msgResult = "";

btnTest.addEventListener('click', (event) => {
  if (isNotEmpty(tagNumber)
          && valueIsInt(tagNumber)
          && parseInt(tagNumber.value) >= minNumber
          && parseInt(tagNumber.value) <= maxNumber)
  {

    let msgTry = `Essai ${tryNumber} : votre choix est le ${tagNumber.value}.....`;

    if (tryNumber < tryLimit) {
      if (parseInt(tagNumber.value) < randomNumber) {
        msgResult += `${msgTry} echoué ! Le nombre à découvrir est plus grand<br>`;

      } else if (parseInt(tagNumber.value) > randomNumber) {
        msgResult += `${msgTry} echoué ! Le nombre à découvrir est plus petit<br>`;
      } else {
        msgResult += `<p>${msgTry} BRAVO !!!! Vous avez gagné...</p>`;
      }

      tryNumber++;
    } else {
//      let newP = document.createElement("p");

      msgResult += `<p>${msgTry}</p>`;
      msgResult += "<p>Oulala ! Vous n'avez pas trouvé<br>";
      msgResult += `Le nombre était : ${randomNumber}</p>`;
      msgResult += "Une autre tentative ? -> Rafraichissez la page";
    }
  } else {
    msgSecretNumber.innerHTML = msgAlertNumber + " entre 1 et 50";
  }
  console.log(msgResult + " * " + randomNumber);

  msgSecretNumber.innerHTML = msgResult;

  event.preventDefault();
});

/* Exercice 3 : Ajouter une note à un étudiant
 *  Ecrivez un programme qui permet d'ajouter une note à un élève.
 *    Pour cela vous devez utiliser :
 *      - Un tableau JavaScript
 *      - La méthode push() pour les tableaux
 *      - L'écouteur d'évènement au click
 *
 *  Chaque note que vous ajoutez doivent être ajoutée sur la page HTML
 *  dans le tableau prévu à cet effet
 */

const tagNote = document.querySelector("#note");
const addNote = document.querySelector('#addNote');
const table = document.querySelector(".customTable");

addNote.addEventListener('click', (event) => {
  if (isNotEmpty(tagNote) && valueIsInt(tagNote)) {
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cellText1 = document.createTextNode("a");
    const cellText2 = document.createTextNode(tagNote.value);
    
    cell1.appendChild(cellText1);
    cell2.appendChild(cellText2);
    
    row.appendChild(cell1, cell2);



    let newRow = table.insertRow();
    let newColumn = newRow.insertCell();

    let list = document.createTextNode(table.value);
    newP.innerText = "";
    newColumn.appendChild(list);
    table.value = "";
  }

  event.preventDefault();
});
