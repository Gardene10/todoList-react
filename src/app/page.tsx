"use client"

import { TodoItem } from "@/types/TodoItem"
import { useState } from "react"



const Page  = () => {

  const [input, setInput] = useState('')

  const [list,setList] = useState<TodoItem[]>([
  
  ])
  const handleButton = () =>{
    if(input.trim() === '')return
    setList([...list,{id: list.length + 1, label: input,checked:false}])
    setInput('')
  }
  const deleteItem = (id:number) => {
    setList(list.filter(item => item.id !== id ))

  }
  const toggleItem = (id:number) =>{
    let newList = [... list]
    for (let i in newList){
      if (newList[i].id === id  ) {
        newList[i].checked = !newList[i].checked
      }
    }
    setList(newList)
  }
  function handleKeyUp(e: { keyCode: number }) {
    if (e.keyCode === 13) { // Verifica se a tecla pressionada foi Enter (código 13)
      handleButton();
    }
  }

  return (

    <div className="bg-blue-100 w-screen h-screen flex flex-col  items-center text-2xl">
      <h1 className="text-4xl mt-5 text-blue-950">Lista de Tarefas</h1>

      <div className="flex w-full max-w-lg p-4 my-3 rounded-md bg-blue-100" onKeyUp={handleKeyUp}>
     <input type="text"
      className="flex-1 border  border-blue-400  p-2 text-xl text-gray-600 rounded-md"
      placeholder="Digite sua tarefa" 
      value={input}
      onChange={e=> setInput(e.target.value)}
  
      />
      <button className="ml-2 pl-6 pr-6 bg-blue-300 rounded-full" id="meuBotao" onClick={handleButton}>Adicionar</button>
      </div>
      <p>{list.length} Itens na lista</p>
  
     <ul className="w-full max-w-lg list-disc pl-5">
      {list.map((item) =>(
        <li key={item.id}>
          <input className="" onClick={() => toggleItem(item.id)} type="checkbox" checked={item.checked} />
          {item.label} <button onClick={() => deleteItem(item.id)} className="hover:underline bg-blue-200 rounded-md px-1 py-1 ">Deletar</button></li>
      
      ))}
      </ul>
      </div>
  )

}
export default Page