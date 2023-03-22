// Créer un script qui affiche la date et l'heure actuelle en temps réel 
// sur une page HTML en utilisant la manipulation du dom.

function runClock(elementName) {
  let today   = new Date();
  let hours   = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let timeValue = hours;
 
  timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
  timeValue += ((seconds < 10) ? ":0" : ":") + seconds;

  elementName.innerHTML = timeValue;
}

const divTimer = document.querySelector("#timer");

setInterval("runClock(divTimer)", 1000);
