const  addButton = document.querySelector('#addButton');
const newP = document.createElement('p');
const todo = document.querySelector("#todo");

newP.setAttribute("id", "message");
    
addButton.addEventListener('click', (event) => {
  if (todo.value !== "") {
    let tableau = document.querySelector('#todolist tbody');
    let newRow = tableau.insertRow();
    let newColumn = newRow.insertCell();

    let list = document.createTextNode(todo.value);
    newP.innerText = "";
    newColumn.appendChild(list);
    todo.value = "";
  };
  
  event.preventDefault();
});


