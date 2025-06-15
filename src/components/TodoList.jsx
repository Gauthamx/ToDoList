import TodoItem from "./TodoItem"

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.map(todo => {
        return (
          <TodoItem title={todo.title} completed={todo.completed} id={todo.id} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        )
      })}
    </ul>
  )
}