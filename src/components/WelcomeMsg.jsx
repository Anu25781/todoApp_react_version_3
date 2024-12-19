import { useContext } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
import styles from "./WelcomeMsg.module.css";



const WelcomeMsg=()=>{

  const {todoItems}= useContext(TodoItemsContext);

  
//console.log(todoItems);
return todoItems.length===0  && <p class={styles.welcome}>Enjoy your Day!</p>

}
export default WelcomeMsg;