import { v4 as uuidv4 } from "uuid"

import { ListBullets } from "@phosphor-icons/react"
import styles from "./App.module.css"
import { useState } from "react"
import { Task } from "./components/Task"
import { Header } from "./components/Header"

export function App() {
  const [tasks, setTasks] = useState([])
  const [tasksCounter, setTasksCounter] = useState(tasks.length)
  const [completedTasksCounter, setCompletedTasksCounter] = useState(0)

  function createTask(task) {
    const newTask = { id: uuidv4(), title: task, isCompleted: false }
    setTasks([...tasks, newTask])
    setTasksCounter((prevState) => prevState + 1)
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(remainingTasks)
    setTasksCounter((prevState) => prevState - 1)
  }

  function completeTask(id) {
    const remainingTasks = tasks.filter((task) => {
      return task.id !== id
    })

    const completedTask = tasks.filter((task) => {
      if (task.id === id) {
        task.isCompleted = true
        return task
      }
    })

    setTasks(remainingTasks.concat(completedTask))
  }

  return (
    <div className={styles.container}>
      <Header onCreateTask={createTask} />
      <main className={styles.tasksWrapper}>
        <header>
          <span className={styles.tasksCreatedTitle}>
            Tarefas criadas{" "}
            <span className={styles.tasksCounter}>{tasksCounter}</span>
          </span>
          <span className={styles.tasksCompletedTitle}>
            Concluídas{" "}
            <span className={styles.tasksCounter}>{completedTasksCounter}</span>
          </span>
        </header>
        <div className={styles.tasksContent}>
          {tasksCounter === 0 ? (
            <div className={styles.message}>
              <ListBullets size={56} />
              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
              </p>
              <p>Crie tarefas e organize seus itens a fazer!</p>
            </div>
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                isCompleted={task.isCompleted}
                title={task.title}
                id={task.id}
                onDeleteTask={deleteTask}
                onCompleteTask={completeTask}
              />
            ))
          )}
        </div>
      </main>
    </div>
  )
}
