// Créer une fonction qui prend en entrée une chaîne de caractères
// et qui retourne la même chaîne en inversant l'ordre des caractères.

function reverseString(str) {
  let result = "";
  let lenghtStr = str.length;

  for (let i = 1; i <= lenghtStr; i++) {
    result += str[lenghtStr-i];
  }

  return result;
}

const inputEx6 = document.querySelector("#inputEx6");
const btnEx6 = document.querySelector("#btnEx6");
const pResultEx6 = document.querySelector("#resultEx6");

let txtResultEx6 = "";

btnEx6.addEventListener("click", (event) => {
  display(whatIsIt(inputEx6.value));

  if (whatIsIt(inputEx6.value) !== "string") {
    txtResultEx6 = "Veuillez entrer un mot";
    msgError(pResultEx6, txtResultEx6);
    inputEx6.focus();
  } else {
    msgOk(pResultEx6);

    txtResultEx6 = `Le mot '${inputEx6.value} donne '${reverseString(inputEx6.value)}' en inversion`;
  }

  pResultEx6.innerHTML = txtResultEx6;

  event.preventDefault();
});