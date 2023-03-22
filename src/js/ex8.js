// Créer une fonction qui prend en entrée un tableau d'objets, 
// chaque objet ayant un attribut "age". 
// La fonction doit retourner l'objet ayant l'âge le plus élevé.

function whoIsOlder(arrayList) {
  let nameTmp = "";
  let ageTmp = 0;
  let counter = 1;

  for (let i = 0; i < arrayList.length; i++) {
    if (typeof arrayList[i].age === "number" && arrayList[i].age > ageTmp) {
      nameTmp = arrayList[i].name;
      ageTmp = arrayList[i].age;

      counter++;

    }
  }

  return `<br>La personne la plus agée est ${nameTmp}, elle a ${ageTmp} ans`;
}

const people = [
  {name: "Pierre", age: 28},
  {name: "Jacques", age: 25},
  {name: "Isabelle", age: 22},
  {name: "Damien", age: 32},
  {name: "Annie", age: 27},
  {name: "Philippe", age: 21},
  {name: "Jeanne", age: 30}
];

const divResultEx8 = document.querySelector("#resultEx8");
let txtResultEx8 = "";

txtResultEx8 = "<h4>Liste de personnes</h4>";

for (let i=0; i < people.length; i++) {
  txtResultEx8 += `<span>${i+1} -> Nom : ${people[i].name}, age : ${people[i].age} ans</span><br>`;
}

txtResultEx8 += whoIsOlder(people);
divResultEx8.innerHTML = txtResultEx8;
console.log(txtResultEx8);
