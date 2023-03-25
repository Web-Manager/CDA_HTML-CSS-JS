// Créer une calculatrice



txtResult = "";

const sectionEx1 = document.querySelector("#Ex1");
const inputCalculator = document.querySelector(("#calculator"));
const resultEx1 = document.querySelector(("#resultEx1"));
const btnEqualEx1 = document.querySelector(("#btnEqualEx1"));

let strCalcul = "";

sectionEx1.addEventListener(("click"), (event) => {
  if (inputCalculator.value === "") {
    txtResult = "Veuillez entrer un calcul";
    msgError(resultEx1, txtResult);
    inputHourBegin.focus();
  } else {
    resultEx1.innerHTML = "Calcul de " + inputCalculator.value;
  }
});
