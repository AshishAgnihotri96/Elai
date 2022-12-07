import React from 'react'
import { useEffect } from 'react'

const Next = () => {
    
      let value=  JSON.parse(localStorage.getItem("value"))
  
  return (
    <div>
            <h1>Count: {value}</h1>
    </div>
  )
}

export default Next
