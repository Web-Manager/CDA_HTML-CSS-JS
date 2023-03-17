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
  if (tagSeconds.value !== "") {
    let nowDate = new Date();
    let hoursStr = " heures ";
    let minutesStr = " minutes ";
    let secondsStr = " secondes ";
    let result = tagSeconds.value + " seconde(s) se converti en => ";

    nowDate.setTime(parseInt(tagSeconds.value) * 1000);
    let convertHours = nowDate.getHours() - 1;
    let convertMinutes = nowDate.getMinutes();
    let convertSeconds = nowDate.getSeconds();

    if (convertHours === 0 || convertHours === 1) {
      hoursStr = " heure ";
    }

    if (convertMinutes === 0 || convertMinutes === 1) {
      minutesStr = " minute ";
    }

    if (convertSeconds === 0 || convertSeconds === 1) {
      secondsStr = " seconde";
    }

    result += convertHours + hoursStr
            + convertMinutes + minutesStr
            + convertSeconds + secondsStr;

    tagConvert.innerHtml = "<p>" + result + "</p>";

    console.log(result);
  }
  ;

  event.preventDefault();
});

