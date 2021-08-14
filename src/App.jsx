import React, { useState } from "react";

const App=()=>{
  const purple="8e44ad"
  const [bg,setBg]=useState(purple);
  const button1="Click Me"
  const [name,setName]=useState(button1);
  const bgChange=()=>{
   let newBg="#34495e"
    setBg(newBg)
    setName("Ouch 🥵")
    
  }
  const bgBack=()=>{
    let bear="#ccff66"
    setBg(bear);
    setName("Oh God🌞")
  }
  const bgDown=()=>{
    let newBg1="yellow";
    setBg(newBg1);
    setName("Good AfterNoon☀️")
  }
  const bgC=()=>{
   let newCol="green";
   setBg(newCol)
   setName("Good Monsoon🤑")
  }
  const onMl=()=>{
    let newCol1="#660033"
    setBg(newCol1);
    setName("Going to Play")
  }


return(
  <>
  <div style={{backgroundColor:bg}}>
    <button onClick={bgChange} onDoubleClick={bgBack} onKeyDown={bgDown} onMouseEnter={bgC} onMouseLeave={onMl}>{name}</button>
  </div>
  </>
)
}
export default App;