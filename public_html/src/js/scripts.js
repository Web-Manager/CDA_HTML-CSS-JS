//**** Javascript
//
// Tous les exercices sont commentés par cette syntaxe :
// /*
//   le code javascript
// /**/
//
// Pour activer une partie de code, il suffit de modifier ainsi
// /**/
//   le code javascript
// /**/
//
// Ne confondez pas avec l'énoncé de l'exercice
// N'oubliez pas de supprimer '*/' que vous avez ajouté dans le code actif avant d'activer une autre section de code
//
// Enjoy !

/*
 * Function to display string
 * @param {type} str : string to display
 * @returns Display in console
 */
function display(str) {
  console.log(str);
}

/*
 * Function to verify if number is integer
 * @param {type} number : number to test
 * @returns {Boolean}
 */
function numberIsInteger(number) {
  return Number.isInteger(number);
}

/*
 * Function to determine if 'even' or not
 * @param {type} number : number to test
 * @returns {String|Boolean} True if even
 */
function isEven(number) {
  if (numberIsInteger(number)) { // Vérifie si c'est un entier
    return number % 2 === 0;
  } else { // Si pas un entier : retourne false.
    return `${number} n'est pas un entier`; // Cette information est utile uniquement dans le cas des tests unitaire
  }
}

/*
 * Mettre la premi-re lettre d'une chaine en majuscule
 * @param {type} string
 * @returns {unresolved}
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
/*
 * Affiche le contenu d'un tableau
 * @param {type} array
 * @returns {String}
 */
function displayArray(array) {
  let i = 1;
  let str = "";

  str = `Il y a ${array.length} élément(s) dans le tableau\n`;
  str = str + "Il contient :\n";

  array.forEach((element) => {
    str = str + `\tElement '${i}' : ${element}\n`;
    i++;
  });

  return str;
}

/*
 * Calcule la moyenne des données
 * @param {[]} table Un array de plusieurs données
 * @return {Number} moyenne
 */
function moyenne(table) {
  let sum = 0;
  table.forEach((element) => {
    if (!isNaN(element)) {
      sum = sum + element;
    }
  });

  return sum / table.length;
}

/*
 * Crée un objet à partir de données en paramètre
 * @param {type} name
 * @param {type} surname
 * @param {type} age
 * @param {type} formation
 * @param {type} notes
 * @returns {student.scriptsAnonym$0}
 */
function student(name, surname, age, formation, notes) {
  return{
    name,
    surname,
    age,
    formation,
    notes
  };
}

/*
 * Ajoute un étudiant à une liste
 * @param {type} array
 * @returns {Array|addStudent.result}
 */
function addStudent(array) {
  let result = [];

  array.forEach((elementA) => {
//    student.forEach((element) => {
    display(elementA);
    result = {
      name: elementA.name
//        surname: element.surname,
//        age: element.age,
//        formation: element.formation,
//        notes: element.note
    };

  });

  return result;
}

/*
 * Effectue un calcul avec un tableau en paramètre
 * @param {type} operator
 * @param {type} array
 * @returns {Number|String|resultCalcul.array}
 */
function resultCalcul(operator, array) {
  let result = array[0];

  array.shift();

  array.forEach((element) => {
    switch (operator) {
      case "SUM":
        result += element;
        break;
      case "SUB":
        result -= element;
        break;
      case "MUL":
        result *= element;
        break;
      case "DIV":
        result = result / element;
        break;
      default:
        result = "Operator not valid";
    }
  });

  return result;
}


//
// Exercice 1
// Déclarer des variables
/*
 let bolValue = true;                // Une variable bolléenne
 const constValue = "Je suis fixe";  // Une variable constante qui ne change jamais de valeur
 let strHello = "Hello world";      // Une variable chaine de caractère
 let intValue = 15;                  // Une variable numérique
 let doubleValue = 15.3;             // Une variable numérique à décimale
 */

// Exercice 2
// Inverser les valeurs entre 2 variables
/*
 let tmpValue = "";
 let strHello = "Hello world";
 let strMessage = "Très heureux d'être là !";

 dialog(`strHello = ${strHello} \nstrMessage = ${strMessage}`);


 tmpValue = strMessage;
 strMessage = strHello;
 strHello = tmpValue;

 dialog(`-----------------\nstrHello = ${strHello} \nstrMessage = ${strMessage}`);
 */

// Exercice 3
// Calculer et afficher un prix hors taxe, la valeur TVA, le montant de la TVA et la montant total
/*
 let mntHT = 275.5;
 const tva = 20;
 let mntTVA = 0;

 mntTVA = mntHT * tva/100;

 dialog(`Le montant HT      : ${mntHT.toFixed(2)} €`);
 dialog(`La TVA                   : ${tva.toFixed(2)} %`);
 dialog(`Le montant TVA    : ${mntTVA.toFixed(2)} €`);
 dialog(`\nLe montant total   : ${(mntHT + mntTVA).toFixed(2)} €`);
 */

//*** Exercice 4
// Les conditions
/*
 Ecrivez un programme qui permet de saluer l'utilisateur en fonction de l'heure :
 - S'il est avant 12h, afficher "Salut"
 - S'il est entre 12h et 17h, afficher "Bonjour"
 - S'il est après 17h mais avant 23h, afficher "Bonsoir"
 - S'il est après 23h et avant 7h30, afficher "Vas te coucher ! "
 */
/*
 let nowTime = 2;
 let name = "Pierre";
 let msg;

 if ( nowTime >= 12 && nowTime <= 17 ) {
 msg = `Bonjour ${name} !`;
 } else if ( nowTime >= 17 && nowTime <= 23 ) {
 msg = `Bonsoir ${name} !`;
 } else if ( nowTime <= 7.5 ) {
 msg = `Vas te coucher ${name} !`;
 } else {
 msg = `Salut ${name} !`;
 }

 dialog(msg);
 */

//*** Exercice 5
/*
 A partir d'une valeur :
 - La multiplier par 6 si elle est inférieur à 15
 - Afficher le résultat
 */
/*
 let value = 5;
 let limit = 15;
 let product = 6;

 let msg = `La valeur de base est '${value}'\n`;

 if ( value < limit) {
 msg = msg + `Elle est inférieur au seuil '${limit}'\nElle est multipliée par '${product}'.\nLe résultat est : ${value*product}`;
 } else {
 msg = msg + `Elle est supérieur au seuil '${limit}' et ne sera pas multipliée.`;
 }

 dialog(msg);
 */

//*** Exercice 6
// Corriger le code
/*
 let prixPanier = 260;
 let remiseMinRequis = 150;
 let prixFinal;

 if ( prixPanier >= remiseMinRequis) {
 let remise;

 if ( prixPanier > 300) {
 remise = 60;
 } else if ( prixPanier > 250 ) {
 remise = 50;
 } else if ( prixPanier > 150 ) {
 remise = 40;
 } else {
 remise = 0;
 }

 prixFinal = prixPanier - remise;
 }

 dialog(`Prix final : ${prixFinal.toFixed(2)} €`);
 *
 */

//*** Exercice 7
/*
 Tester si la variable nb1 est égale à 8, dans ce cas afficher "Le nombre 1 vaut 8"
 Tester si la variable nb1 est égale à 10, dans ce cas afficher "Le nombre 1 vaut 10"
 Tester si la variable nb1 est égale à 12, dans ce cas afficher "Le nombre 1 vaut 12"
 Si on n'entre dans aucun des cas, afficher "On n'entre pas dans les autres conditions"
 */
/*
 let value = 8;

 switch (value) {
 case 8:
 msg = `La valeur de la variable est '${value}'`;
 break;

 case 10:
 msg = `La valeur de la variable est '${value}'`;
 break;

 case 12:
 msg = `La valeur de la variable est '${value}'`;
 break;

 default:
 msg = `Aucune valeur de '${value}' ne correspond`;
 }

 dialog(msg);
 */

//*** Exercice 8
/*
 Gestion de compte :
 Afficher si Abonné, Contributeur ou Administrateur
 Si on n'entre dans aucun des cas, afficher "Aucun compte correspondant"
 */
/*
 let account = "abonnée";
 let accountControl = capitalizeFirstLetter(account);

 switch (accountControl) {
 case "Abonné":
 case "Abonnée":
 case "Contributeur":
 case "Contributrice":
 case "Administrateur":
 case "Administratrice":
 msg = `Votre compte utilisateur / utilisatrice est : ${accountControl}`;
 break;

 default:
 msg = `Aucune compte ne correspond à '${accountControl}'`;
 }

 display(msg);
 /**/

//*** Exercice 10
// Table de multiplication
/*
 let table = 5;

 dialog(`Table de ${table} : \n`);

 for (var i = 1; i <= 10; i++) {
 dialog(`${value} x ${table} = ${i*table}`);
 }
 /**/

//*** Exercice 11
// Table de multiplication avec base déterminé
/*
 let table = 5;
 let value = 12;

 dialog(`Table de ${table} : \n`);

 for (var i = 1; i <= value; i++) {
 dialog(`${i} x ${table} = ${i*table}`);
 }
 /**/

//*** Exercice 12
// * Afficher nombre pair de 0 à 100
/*
 let index = 0;
 let limit = 100;

 while ( index <= limit ) {
 dialog(`La valeur actuelle : ${index}`);
 index += 2;
 }
 *
 */

//*** Exercice 13
// Table de multiplication avec while
/*
 let table = 8;
 let limit = 10;
 let i = 1;

 while ( i <= limit ) {
 dialog(`${i} x ${table} = ${i*table}`);
 i ++;
 }
 *
 */

//*** Exercice 14
// Lettre A : 8 caratères sur 8 lignes
/*
 let char = "A";
 let result = char;
 let loop = 8;
 let i = 0;

 while ( i < loop ) {
 display(result);
 result += char;
 i ++;
 }
 /**/

//*** Exercice 14 bis
// Une pyramide d'étoile
/*
 let char = "*";
 let height = 12;

 for (let i = 1; i <= height; i++) {
 let line = '';

 // Nombre de caratère 'espace' tenant compte de la hauteur
 // car c'est la moitié du nombre total de la dernière ligne, + 1
 for (let j = 1; j <= (height - i); j++) {
 line += ' ';
 }

 // Nombre de caratère qui tient compte de la ligne active
 for (let k = 1; k <= (2 * i - 1); k++) {
 line += char;
 }

 display(line);
 }
 /**/

// Evalue la parité (pait / impair) d'un nombre en utilisant les tests unitaires.
// Dans ce cas, avant de savoir si un nombre est pair ou impair, nous vérifions
// si c'est un entier
/*
 let number = 18;

 if ( !numberIsInteger(number) ) {
 msg = `${number} n'est pas un nombre entier`;
 } else {
 if ( isEven(number) ) {
 msg = "pair";
 } else {
 msg = "impair";
 }

 msg = `'${number}' est un nombre ${msg}`;
 }
 display(msg);
 /**/

//*** Création d'un tableau
/*
 let myTable = [15, 18, 30, "Ma chaîne"];
 /**/

// Connaître la quantité de données d'un tableau
/*
 display(`Il y a ${myTable.length} élément(s) dans le tableau 'myTable'.`);
 /**/

// Afficher la 3ème valeur
/*
 display(`La troisième valeur du tableau 'myTable' est : ${myTable[2]}.`);
 /**/

//*** Exercice 15
// Créer un tableau qui contient 5 nombre
/*
 let myTable = [52, 5.8, 3, 22.3, 80];
 /**/

//*** Exercice 16
// Créer un tableau contenant 5 données
/*
 let myTable = [true, 5.8, "Lorem Ipsum", 22, 80];
 /**/

//*** Les Objets
// Création d'un objet
/*
 let myObject = {
 brand:         "Renault",
 model:         "Clio",
 year:          2008,
 goodCondition: true
 };

 let htmlContent;

 htmlContent = myObject + "\n";
 htmlContent = htmlContent + "modèle : " + myObject.model;

 // Afficher les données de l'objet
 display(`Affichage de l'objet : ${myObject}\net du modèle : ${myObject.model}`);
 /**/

//*** Exercice 17
// Créer un ojet représentant un étudiant et comportant :
//  Nom: string
//  Prénom: string
//  Age: integer
//  Formation: string
//  Notes: table
/*
 let studentWagner = {
 lastName:       "WAGNER",
 firstName:      "Paul",
 age:            21,
 studies:        "CDA",
 notes:    [12, 15, 18, 14, 13]
 };
 /**/

//*** Boucle pour chaque : foreach
/*
 let myArray = [10, 15, 32, "Tutu"];

 display("Donnée du tableau");

 myArray.forEach((element) => {
 display(`\tElement : ${element}`);
 });
 /**/

//*** Exercice 18
// Créer une boucle pour afficher les éléments d'un tableau
// et indiquer le nombre d'éléments
/*
 let myArray = ["Pomme", 15, 32, "Orange", 15.8, true];

 display(`Il y a ${myArray.length} éléments dans le tableau`);
 display("Il contient :");

 myArray.forEach((element) => {
 display(`\tElement : ${element}`);
 });
 /**/

//*** Exercice 18 bis
// Créer une boucle pour afficher les éléments d'un tableau
// et indiquer le nombre d'éléments à l'aide d'une fonction
/*
 let myArray = ["Pomme", 15, 32, "Orange", 15.8, true];

 display(displayArray(myArray));
 /**/

//*** Exercice 19
// Créer une fonction qui retourne les éléments passés d'un étudiant
/*
 let bachir = student("bachir","nabil","42 ans","cda",[12.5,11,10]);
 let toto = student("toto","nabil","42 ans","cda",[12.5,11,10]);

 display(toto.notes);
 /**/

//*** Exercice 20
// Une fonction pour créer un étudiant et l'ajouter à une liste
// la fiche étudiant doit comporter :
//    Nom: string
//    Prénom: string
//    Age: integer
//    Formation: string
//    Notes: table
/*
 let durand = ("DURAND","Marcel","20 ans","cda",[10, 12.5, 16, 14]);
 let dupond = ("DUPOND","Patrick","22 ans","cda",[12.5, 11, 10, 16]);
 let marcel = ("MARCEL","Pierre","24 ans","Community Manager",[17, 15, 10, 14]);

 display(addStudent([durand, dupond, marcel]));

 function student (firstname, name, age, courses, notes) {
 let student = {
 firstname,
 name,
 age,
 courses,
 notes
 };
 listStudents.push(student);
 }

 student("John", "Doe", "22", "Developer", [18, 17, 15, 18.5]);

 console.log(listStudents);
 /**/

//*** Exercice 21
//Faire la moyenne de toutes les notes
// Afficher le nombre de notes supérieures ou égales à 10
// Afficher la moyenne
/*
 let myTab = [15,25,35,10,45,55,8]
 let nbSup = 0;
 let moyenne = 0;

 myTab.forEach((element) => {
 if (element >= 10){
 nbSup++;
 }
 moyenne = moyenne + element;
 })

 console.log("il y a " +nbSup + " notes supérieurs ou égal a 10.")
 console.log("la moyenne est de " + (moyenne / myTab.length).toFixed(2))
 /**/

//*** Exercice 21
// Créer une fonction qui permet d'additioner un nombre non défini de nombre

let calcul = [10, 5, 98, 4, 37, 66];

display(resultCalcul("DIV", calcul));


/*
 let num1 = document.querySelector('#num1');
 let num2 = document.querySelector('#num2');

 num2.addEventListener("input", () => {
 let resultat = Number(num1.value) + Number(num2.value);

 document.querySelector('#resultat').textContent = resultat;
 });
 /**/

// Exercices :
/*
 Faire une calculatrice (addition de 2 nb)
 Le calcul doit se faire lorsqu'on appui sur le bouton "Calculer"
 */

/*
 * // Compter le nombre de notes supérieures ou égale à 10
// Faire la moyenne de toutes les notes
// Afficher le nombre de notes supérieures ou égales à 10
// Afficher la moyenne

let myTab = [15,25,35,10,45,55,8]
let nbSup = 0;
let moyenne = 0;

myTab.forEach((element) => {
	if (element >= 10){
		nbSup++;
	}
	moyenne = moyenne + element;
})

	console.log("il y a " +nbSup + " notes supérieurs ou égal a 10.")
	console.log("la moyenne est de " + (moyenne / myTab.length).toFixed(2))
 */