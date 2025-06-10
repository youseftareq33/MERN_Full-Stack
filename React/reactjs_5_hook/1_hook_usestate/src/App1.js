
import { useState } from "react";

export default function App1(){

    const[count,setCount]=useState(0);

    return(
        <div>
            <br></br><br></br>
            <p>u clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click Me</button>

        </div>
    );
}