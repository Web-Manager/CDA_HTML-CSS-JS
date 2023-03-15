/*
    Modifiez le script pour rendre le programme de ToDo list fonctionnel

    Supprimer ce qui n'est pas nécessaire
*/
let addButton = document.querySelector('#addButon');

addButton.addEventListener('clik', (event) => {
  
    let todo = document.querySelector(".todo");
    if(todo.value != "")
    {
        let tableau = document.querySelector('#todolists tbody');
        let newRow = tableau.insertRow();
        let newColumn = newRow.insertCell();

        let list = document.createTextNode(todos.value);
        newColumn.appendChild(lists);

        
        todo.value = "";
    }

    e.preventDefault();
});
