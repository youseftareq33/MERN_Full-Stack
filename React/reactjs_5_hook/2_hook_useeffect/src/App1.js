
import { useState,useEffect } from "react";

export default function App1(){

    const [UserList,SetUserList] =useState([]);
    
    
    useEffect ( () => {
          fetch('https://jsonplaceholder.typicode.com/posts')
         .then(res => res.json())
         .then(data =>SetUserList(data)); } , []  );

    return(
        <div>
            <h2>Random User List</h2>

            <ul>

            {UserList.map(user => (
                <li key={user.userId}>
                <br></br>
                <p>id:{user.id}</p>   
                <p>Name : {user.title}</p>

                <p> Text :{user.body}</p>
                <p>-----------------------------------------------------------------------------------------------------------</p>
                <br></br>
                </li>
                
            )) }

            </ul>

            

        </div>
    );
}