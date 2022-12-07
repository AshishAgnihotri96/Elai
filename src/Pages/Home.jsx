import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate=useNavigate()
    let value=JSON.parse(localStorage.getItem("value"))||0
    const[count,setcount]=useState(value)
    const handleCountButton=()=>{
        setcount(count+1)
        
    }
const handleSave=()=>{
    localStorage.setItem("value",count)
    navigate("/next")
}
  return (
    <div>
        <h1>Count: {count}</h1>
       <button onClick={handleCountButton}>BUTTON</button> 
       <button onClick={handleSave}>Button To Next Page</button> 
    </div>
  )
}

export default Home
