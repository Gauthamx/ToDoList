export default function TodoItem({completed,id,title,toggleTodo,deleteTodo}){
    return (
        <li className="flex items-center justify-between rounded-md border border-black/25 p-3 bg-slate-200 mb-2"> 
        <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} className="w-6 h-6 border border-black rounded-md flex items-center justify-center"></input>
       <span class="flex-grow ml-3 cursor-pointer text-gray-900">{title}</span>
       <button onClick={() => deleteTodo(id)} class="bg-red-500 text-gray-900 px-3 py-1 rounded-md hover:bg-red-400 transition">DELETE</button>
       </li>
    )
}