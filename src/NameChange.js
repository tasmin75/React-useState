import React from 'react'
import { useState } from 'react'

const NameChange = () => {
    const [data ,setData]=useState("Amit")

    function handleClick (){
           if(data==="Amit"){
            setData("Rajan")
           }else{
            setData("Amit")
           }
    }
    return (
    <div>
        <h1>My name is {data}</h1>
        <button onClick= {handleClick}>Change Name</button>
        
    </div>
  )
}

export default NameChange