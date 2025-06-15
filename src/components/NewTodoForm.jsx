import { useState } from "react"

export default function NewTodoForm({ onSubmit }) {
  
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem == " ") return
    onSubmit(newItem)
    setNewItem("")
  }

  return (
    <>
      <div className="flex mb-4">
        <input placeholder="🖊️ Add new task.." className="border border-black/25 px-4 py-2 flex-grow bg-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/20" type="text" value={newItem} onChange={e => setNewItem(e.target.value)}></input>
        <button onClick={handleSubmit} className="bg-blue-400 p-2 rounded mx-2 hover:bg-blue-300"> ➕</button>
      </div>
    </>
  )
}