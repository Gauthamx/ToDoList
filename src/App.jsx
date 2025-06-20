import "./styles.css"
import { useEffect, useState } from "react"
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function AddTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  return (
    <>
      <div className="min-h-screen bg-slate-200 flex justify-center items-center p-4">
        <div className="border-black/20 border p-6 bg-slate-300 backdrop-blur-3xl text-black rounded-xl shadow-2xl w-full max-w-md">
          <h1 className="text-black text-3xl font-bold flex justify-center mb-5">TODO LIST</h1>
          <NewTodoForm onSubmit={AddTodo} />
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
      </div>
    </>
  )
}
