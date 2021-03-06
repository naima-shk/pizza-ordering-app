import React, {
  useEffect,
  useState,
} from 'react';

import { Button } from 'react-bootstrap';

/*const tablestyle = {
  backgroundColor: '#00000059',
  width: "60rem",
  opacity: '0.6',
  marginLeft: '14%',
  color:'black',
  boxShadow: '0 0 20px 0 white'

};*/
function CancelOrder() {
  const [orders,setOrders] = useState([]);
  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    fetch(`https://order-pizza-api.herokuapp.com/api/orders`, requestOptions)
        .then(response => response.json())
        .then(data => setOrders(data))
    },
 []);

 const onClickCancel = (Order_ID) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };

    fetch(`https://order-pizza-api.herokuapp.com/api/orders/${Order_ID}`, requestOptions)
    .then(response => {
        if (response.status === 200) {
            alert('Cancelled successfully')
        }
        window.location.reload();
    })
 }
  
 return (
  <>
  <div>
  <h3>Cancel Orders List</h3>
  
            
    {orders.map((v,i) => {

    return    <div   key={i}>
    
              <div>{v.Crust}</div>
              <div>{v.Flavor}</div>
              <div>{v.Size}</div>
              <div className="d-grid gap-2">
              <Button variant="danger" size="lg" onClick={ onClickCancel}>
        Cancel  Order
        </Button>
        </div>
              <br />
              <br />
              
          
           
           </div>
          
           })}
 
 </div>
  
  </>
);
}
  
  
     
        
export default CancelOrder;
  
     
        

