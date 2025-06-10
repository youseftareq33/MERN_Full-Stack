import React, { useEffect, useState } from 'react';
import Country from './Components/Country';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App()
{

const [countryList, setCountryList] = useState([]);


useEffect ( () => {
      fetch('https://restcountries.com/v2/all?fields=name,capital,flags')
     .then(res => res.json())
     .then(data => setCountryList(data)); } , []  ) ;


     const dataView =countryList.map((e1) => <Country flag={e1.flags.png} name={e1.name} capital={e1.capital} />);
     


    return (
      <div className="container mt-4">
        <h2>Country List</h2>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          {dataView}
        </div>
      </div>
    );





}
