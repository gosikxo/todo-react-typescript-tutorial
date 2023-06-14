import React, { ChangeEvent, FC, useState } from "react"
import "./App.css"
import { ITask } from "./Interfaces"

const App: FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value)
    } else {
      setDeadline(Number(e.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }
    setTodoList([...todoList, newTask])
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in days)"
            name="deadline"
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="todoList"></div>
    </div>
  )
}

export default App
