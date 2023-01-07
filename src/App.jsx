 
import './App.css';
 
 
import Items from './componente/Items';
import { useState } from 'react';
 

function App() {
  const [text,setText]=useState("all")
  
  const handleClick=(e)=>{
    console.log(e.target.value)
    setText(e.target.value)
  } 
  return (
    <div className="App">
      <header className="App-header">
        <div style={{dispay:"flex", gap:"30px"}}>
          <button value={"all"} onClick={handleClick}>All</button>  <button value={"JavaScript"}  onClick={handleClick}>js</button> <button  onClick={handleClick} value={"TypeScript"}>Typscript</button>
        </div>
        <div>
         
          <Items text={text}/>
           
        </div>
         
      </header>
    </div>
  );
}

export default App;
