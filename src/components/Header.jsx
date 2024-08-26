import styles from "./Header.module.css"
import toDoLogo from "../assets/todo-logo.svg"
import { useState } from "react"

export function Header({ onCreateTask }) {
  const [newTask, setNewTask] = useState([])

  function handleCreateTask(event) {
    event.preventDefault()
    onCreateTask(newTask)
  }

  return (
    <header className={styles.header}>
      <img src={toDoLogo} />
      <form className={styles.addTaskForm}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" onClick={handleCreateTask}>
          Criar
        </button>
      </form>
    </header>
  )
}
