import { useContext } from "react";
import { useState, useRef } from "react";

import  { MdLibraryAdd } from "react-icons/md";

import { TodoItemsContext } from "./store/todo-items-store";

function AddTodo(){

//const [todoName, setTodoName]=useState("");
//const [dueDate, setDueDate]=useState("");


const {addNewItem}= useContext(TodoItemsContext);

const todoNameElement=useRef();
const todoDateElement=useRef();

/*const handleNameChange=(event)=>{
setTodoName(event.target.value);
noOfUpdates.current +=1;
}

const handleDateChange=(event)=>{
setDueDate(event.target.value);
console.log(`noOfUpdates are: ${noOfUpdates.current}`);
}*/

const handleAddButtonClicked=(event)=>{
  event.preventDefault();
  const todoName=todoNameElement.current.value;
  const dueDate=todoDateElement.current.value;

  todoNameElement.current.value="";
  todoDateElement.current.value="";
  addNewItem(todoName,dueDate);
//setDueDate("");
//setTodoName("");
}
  return (
  <div class="container text-center">
  
  <form class="row kg-row" onSubmit={handleAddButtonClicked}>
  <div class="col-6">
    <input type="text"
    ref={todoNameElement}
    placeholder="Enter Todo Here" />
  </div>
    <div class="col-4">
      <input type="date" 
      ref={todoDateElement}
      />
    </div>
    <div class="col-2">
    <button class="btn btn-success kg-button" ><MdLibraryAdd /></button>
    </div>
  </form>
</div>
);
}
export default AddTodo;