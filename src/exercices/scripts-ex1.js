/* 
 * All rights reserverd to Gilbert CAPUTO-CERNI.
 * This application is to use as that. Not modifications or partial code use are autorized.
 * If you want informations contact me at : manager-web@outlook.com
 * 
 */

let inputName = document.querySelector("#name");

inputName.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.querySelector("#whoAreYou").innerText = "Bonjour " + inputName.value + ", soyez le bienvenue !";
  }
});


