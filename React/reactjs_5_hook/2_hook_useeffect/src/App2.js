import React from "react";
import { useState,useEffect } from "react";
import InfoData from "./Components/InfoData";



export default function App2()
{

const[userlist,setUserList]=useState([]);


useEffect ( () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res => res.json())
     .then(data =>setUserList(data)); } , []  ) ;


     const dataView =userlist.map((e1) => <InfoData Title={e1.title} text={e1.body} />);
     


     return(

        <div>
            <h2>Random List Using Components</h2>
            {dataView}
        </div>
     )




}

