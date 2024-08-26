import { CheckCircle, Circle, Trash } from "@phosphor-icons/react"
import styles from "./Task.module.css"
export function Task({ id, isCompleted, title, onDeleteTask, onCompleteTask }) {
  function handleTaskDelete() {
    onDeleteTask(id)
  }

  function handleCompleteTask() {
    onCompleteTask(id)
  }

  return (
    <div className={styles.taskWrapper}>
      {!isCompleted ? (
        <Circle
          size={28}
          className={styles.notChecked}
          onClick={handleCompleteTask}
        />
      ) : (
        <CheckCircle size={28} weight="fill" className={styles.checked} />
      )}
      <p className={isCompleted ? styles.textChecked : null}>{title}</p>
      <button onClick={handleTaskDelete}>
        <Trash />
      </button>
    </div>
  )
}
