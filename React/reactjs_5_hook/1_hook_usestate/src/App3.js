import { useState } from "react";

export default function App3(){
    const [User,setUser]=useState({name:'yousef',age:22})

    return(
        <div>

             <br></br><br></br>

            <p>Name: {User.name}</p>
            <p>Age: {User.age}</p>

            <button onClick={()=>setUser({...User,age:User.age+1})}>Increase Age</button>
        </div>
    );
}