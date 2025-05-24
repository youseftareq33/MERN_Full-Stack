
import Product from "./Components/Product";
import {data} from "./data";

export default function App(){

  const dataView=data.map((e1=> <Product name={e1.product_name} price={e1.product_price} /> ));

  return(
    <div>
      <h1>Products: </h1>
      <br></br>
      <Product name={'Dell laptop'} price={'3500'}/>
      <Product name={'IPhone 11'} price={'2300'}/>
      <Product name={'Printer'} price={'1500'}/>

      <h1>---------------------------------------------------</h1>
      {dataView}

      <h1>---------------------------------------------------</h1>
      <div class="container mt-3">
        <h2>Products: </h2>
        <br/>
        <div class="card bg-primary text-white">
          <div class="card-body">{dataView}</div>
        </div>
      </div>
    </div>
  );
}