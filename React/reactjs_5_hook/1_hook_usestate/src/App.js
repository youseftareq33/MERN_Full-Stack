import './App.css';

import { useState } from 'react';

function App() {

  // without useState
  let init_name="Yousef";

  // with useState
  const[name,setName]=useState("Yousef");
  // name: is the value that assign using use-state by setName
  // setName: function to change state (change text) of name
  // useState: has the current state
  

  return (
    <div className="App">

      <h1>Without useState</h1>
      <input type='text' placeholder='Enter Name' value={init_name}></input>
      <p>Hello, {init_name}</p>

      <br></br><br></br>

      <h1>With useState</h1>
      <input type='text' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
      <p>Hello, {name}</p>
      
    </div>
  );
}

export default App;
