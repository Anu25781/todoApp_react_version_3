import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
//import TodoItem1 from "./components/TodoItem1";
//import TodoItem2 from "./components/TodoItem2";
//import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";
//import { useState,useReducer } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import  TodoItemsContextProvider from "./components/store/todo-items-store";



function App() {
  /*const initialTodoItems=[{
    name:"Buy Milk",
    dueDate:"4/10/2024",
  },

  {
    name:"Go to college",
    dueDate:"4/10/2024",
  },

  {
    name:"Like video",
    dueDate:"right now",
  },
];*/


//const[todoItems, setTodoItems]=useState([]);

  return(
  <TodoItemsContextProvider >
   <center class="todo-container">
  <AppName />
  <AddTodo />
  <WelcomeMsg></WelcomeMsg> 
  <TodoItems ></TodoItems>


  </center>
  </TodoItemsContextProvider>
  );
}

export default App
