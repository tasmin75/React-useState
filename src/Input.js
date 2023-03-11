import React from 'react'
import { useState } from 'react'
const Input = () => {
    const[input, setInput] =useState( )
    const[data, setData]= useState([])
    function handleInput(e){
      setInput(e.target.value)
    }
    function getData(){
        if(input!=="" && data !==""){ 
       setData([...data,input])
       setInput("")
        }
    }
  return (
    <div>
        <input onChange={handleInput}/>
        <button onClick={getData}>Add</button>
        <ul>
          {data.map((item)=><li>{item}</li>)}
        </ul>
    </div>
  )
}

export default Input