//import Item from "../../../../Fragments/learning-fragments/src/components/Item";
import { useContext } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems=()=>{
 const {todoItems, deleteItem}= useContext(TodoItemsContext);



//console.log( todoItemsFromContext);

  return <div class={styles.itemsContainer}>

{todoItems.map(item=>(
  <TodoItem key={item.name}  todoDate={item.dueDate} todoName={item.name} onDeleteClick={deleteItem}></TodoItem>)
)}
    
  

  

</div>
}

export default TodoItems;