import './App.css';

import { useState,useEffect } from 'react';

function App() {

  const[count,setCount]=useState(0);

  useEffect( () =>{ document.title=`You Clicked ${count} times ` ; }  ) ;

  return (
    <div className="App">
      <p>You Clicked {count} times</p>

      <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  );
}

export default App;
