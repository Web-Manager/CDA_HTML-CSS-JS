// Créer un script qui permet à l'utilisateur de saisir une liste de noms, 
// puis affiche les noms triés par ordre alphabétique.

function orderTable(tableName) {
  const tbody = document.querySelector('tbody');
  const thx = document.querySelectorAll('th');
  const trxb = tbody.querySelectorAll('tr');
}

function isExistInArray(arrayName, valueSearch) {
  let result = false;
  display(arrayName + " / " + valueSearch);

  for (let i = 0; i < arrayName.length; i++) {
    if (valueSearch === arrayName[i]) {
      result = true;
    }
  }

  return result;
}

const pResultEx7 = document.querySelector("#resultEx7");
let btnAddEx7 = document.querySelector('#btnAddEx7');
let btnOrderAscEx7 = document.querySelector("#btnOrderAscEx7");
let btnOrderDscEx7 = document.querySelector("#btnOrderDscEx7");
let arrayListEx7 = new Array();

let resultEx7 = "";

btnAddEx7.addEventListener('click', (event) => {
  const inputEx7 = document.querySelector("#inputEx7");
  let listEx7 = document.querySelector("#listEx7");

  if (inputEx7.value === "") {
    txtResultEx7 = "Veuillez entrer un mot";
    msgError(pResultEx7, txtResultEx7);

    inputEx7.focus();
  } else {
    msgReset(pResultEx7);

    if (isExistInArray(arrayListEx7, inputEx7.value) && arrayListEx7.length !== 0) {
      txtResultEx7 = `Attention, ${inputEx7.value} existe déja dans le tableau`;
      msgError(pResultEx7, txtResultEx7);
      inputEx7.focus();
    } else {
      msgReset(pResultEx7);

      arrayListEx7.push(inputEx7.value);

      let tableau = document.querySelector('#listEx7 tbody');
      let newRow = tableau.insertRow();
      let newColumn = newRow.insertCell();

      let list = document.createTextNode(inputEx7.value);

      newColumn.appendChild(list);
    }

    inputEx7.value = "";
  }

  event.preventDefault();
});

btnOrderAscEx7.addEventListener(("click"), (event) => {
  const allListEx7 = document.querySelectorAll('#listEx7 tbody tr');
  display(allListEx7);
  console.log(document.querySelectorAll('#listEx7 tbody tr').length);

  if (allListEx7.length === 0) {
    txtResultEx7 = "<strong>Impossible ! La table est vide</stong>";
    msgError(pResultEx7, txtResultEx7);
  } else if (allListEx7.length === 1) {
    txtResultEx7 = "<strong>Inutile de trier une table avec un seul élément</stong>";
    msgError(pResultEx7, txtResultEx7);
  } else {
    msgReset(pResultEx7);

    pResultEx7.innerHTML = resultEx7;
  }

  event.preventDefault();
});