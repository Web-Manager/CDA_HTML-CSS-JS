// Créer un script qui modifie la couleur de fond d'une page en fonction de l'heure de la journée. 
// Utiliser une condition pour déterminer si c'est le matin, l'après-midi ou le soir, 
// puis changer la couleur de fond en conséquence.

function isHoursInDay(hour) {
  let result = false;

  if (hour > 1 && hour < 24) {
    result = true;
  }

  return result;
}

function isDay(int, hourBegin, hourEnd) {
  let result = false;

  if (int > hourBegin && int < hourEnd) {
    result = true;
  }

  return result;
}

function cssStyleError(elementName) {
  elementName.style.backgroundColor = "red";
  elementName.style.color = "white";
  elementName.style.padding = "20px";
}

console.log("Chargement du script : ex3.js");

const sectionEx3 = document.querySelector("#ex3");
const inputHourBegin = document.querySelector("#yourHourBegin");
const inputHourEnd = document.querySelector("#yourHourEnd");
const inputHourTest = document.querySelector("#yourHourTest");
const btnEx3 = document.querySelector("#btnEx3");
const pResultEx3 = document.querySelector("#resultEx3");

const newPEx3 = document.createElement("p");                            // Création d'un paragraphe
const newContentEx1 = document.createTextNode("C'est un nouveau paragraphe"); // Création d'un contenu pour le paragraphe

let hourBegin = 0;
let hourEnd = 0;
let nowDate = new Date();
let nowHour = nowDate.getHours();
let result = "";

inputHourBegin.addEventListener("focusout", (event) => {
  if (!isHoursInDay(inputHourBegin.value)) {
    result = "Veuillez entrer une heure de début du jour entre 1 et 24";
    inputHourBegin.focus();

    cssStyleError(pResultEx3);
    console.error(result);
  }
});

//inputHourEnd.addEventListener("focusout", (event) => {
//    if (!isHoursInDay(inputHourEnd.value)) {
//        result = "Veuillez entrer une heure de fin du jour entre 1 et 24";
//        inputHourEnd.focus();
//
//        cssStyleError(pResultEx3);
//    }
//});
//
//inputHourTest.addEventListener("focusout", (event) => {
//    if (!isHoursInDay(inputHourTest.value)) {
//        result = "Veuillez entrer une heure de test entre 1 et 24";
//        inputHourTest.focus();
//
//        cssStyleError(pResultEx3);
//        pResultEx3.innerHTML = result;
//    }
//});

//btnEx3.addEventListener(('click'), (event) => {
//    if (!isHoursInDay(inputHourBegin.value)) {
//        result = "Veuillez entrer une heure de début du jour entre 1 et 24";
//    } else if (!isHoursInDay(inputHourBegin.value)) {
//        result = "Veuillez entrer une heure de fin du jour entre 1 et 24";
//    } else if (inputHourBegin > yourHourEnd) {
//        result = "Attention, votre heure de début ne peut-être plus grand que celui de fin,<br>et vice versa";
//    }
//
//    result += " / Heure de début : " + inputHourBegin
//            + " / Heure de fin : " + yourHourEnd
//            + " / Heure de test : " + yourHourTest;
//    pResultEx3.innetHTML = result;
////
////    sectionEx3.appendChild(newPEx3);
////
////    if
////            sectionEx3.querySelector("p").innerText = "Il est l'heure de bosser un peu !";
////    document.querySelector("p").innerText = "Lorem Ipsum : Ceci est un nouveau chapitre"; // J'ajoute du contenu dans le paragraphe
//
//    event.preventDefault();
//});

// pResultEx3.innerHTML = result;
