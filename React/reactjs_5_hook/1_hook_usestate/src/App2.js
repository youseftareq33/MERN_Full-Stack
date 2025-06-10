
import { useState } from "react";

export default function App2(){
    const[list,setList]=useState(['red','blue','green']);
    const[color,setColor]=useState("");

    return(
        <div>
            <br></br><br></br>
            <ul>
                {
                list.map((e)=>(<li key={e}> {e} </li>))
                }
            </ul>
            <input type='text' Value={color} onChange={(e)=>setColor(e.target.value)}></input>
            <button onClick={()=>setList([...list,color])}>add item</button>
        </div>
    );
}