//SELECT DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//ADD EVENT LISTENER
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteEvent);
todoList.addEventListener("click", completed);

//FUNCTIONS
function addTodo(event){

    //Prevents from reloading everytime while submitting
    event.preventDefault();

    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    //TODO LI
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-items");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    //Check Button
    
    const completedButton = document.createElement("button");
    completedButton.classList.add("complete-btn");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    todoDiv.appendChild(completedButton);
    
    //Delete Button
    const trashButton = document.createElement("button");    
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value="";
}

function deleteEvent(event){
    const item = event.target;
    //DELETE Items
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }
}


function completed(event){
    const item = event.target;
    //DELETE Items
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        todo.addEventListener("transitionend", function(){
            alert("Congratulations");
        });        
    }
}