
import Students from "./Components/Students";
import {data} from "./data";

export default function App(){

  const dataView=data.map((e1=> <Students stud_name={e1.stud_name} stud_major={e1.stud_major} />));
  
  return (
    <div>
      <div class="container mt-3">
        <h2>Students: </h2>
        <br/>
        <div class="card bg-primary text-white">
          <div class="card-body">{dataView}</div>
        </div>
      </div>
    </div>
  );
  

}