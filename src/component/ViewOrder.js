// import React from 'react';
import React, {
  useEffect,
  useState,
} from 'react';

import { Card } from 'react-bootstrap';

function ViewOrder(){
const [pizzaData, setPizzaData] = useState([]);
useEffect(() => {
  
  fetch("https://order-pizza-api.herokuapp.com/api/orders")
.then((response) => { console.log (response.json)
  response.json()
.then((result) =>{
    console.log("result",result)
    setPizzaData(result)
})
})
  },[])
return(
<>
{pizzaData.map((item) =>(
  <div className="card-body">
    
    <Card>
      <div  >
        
        <h2 className='card-name'>Crust: {item.Crust} </h2>
        <h2 className='card-type'>Flavour: {item.Flavour} </h2>
        <h2 className='card-size'>Size: {item.Size} </h2>
        <h2 className='card-Order'>Order_ID: {item.Order_ID} </h2>
        
       
      </div>

      </Card>
      </div>
))}
</>
);} 
export default ViewOrder;