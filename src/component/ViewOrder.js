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
    
    <Card  style={{ width: '18rem', marginLeft: '35rem', display:'flex' }}>
      <div  >
        
        <h3 className='card-name'>Crust: {item.Crust} </h3>
        <h3 className='card-type'>Flavour: {item.Flavour} </h3>
        <h3 className='card-size'>Size: {item.Size} </h3>
        <h3 className='card-Order'>Order_ID: {item.Order_ID} </h3>
        
       
      </div>

      </Card>
      </div>
))}
</>
);} 
export default ViewOrder;