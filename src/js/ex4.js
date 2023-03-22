// Créer une fonction qui prend en entrée un nombre
// et qui retourne vrai si le nombre est pair, faux sinon.
// Utiliser l'opérateur modulo pour réaliser cette fonction.

function checkEvenOdd(number) {
  let result = "impair";

  if (number % 2 == 0) {
    result = "pair";
  }

  return result;
}

const inputEx4 = document.querySelector("#inputEx4");
const btnEx4 = document.querySelector("#btnEx4");
const pResultEx4 = document.querySelector("#resultEx4");

let txtResultEx4 = "";

btnEx4.addEventListener("click", (event) => {
  if (!valueIsInteger(inputEx4)) {
    txtResultEx4 = "Veuillez entrer un nombre";
    msgError(pResultEx4, result);
    inputEx4.focus();
  } else {
    console.log("Nombre entier ok");
    msgOk(pResultEx4);

    txtResultEx4 = `Le nombre '${inputEx4.value}' est : ` + checkEvenOdd(parseInt(inputEx4.value));
  }
  
  pResultEx4.innerHTML = txtResultEx4;
  
  event.preventDefault();
});

