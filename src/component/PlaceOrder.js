import { useState } from 'react';

import {
  Button,
  Card,
  Form,
} from 'react-bootstrap';

function PlaceOrder(props){
  const [crust, setCrust] = useState('');
  const [flavor, setFlavor] = useState('');
  const [size, setSize] = useState('');


  const onChangeCrust = (event) => {
    setCrust(event.target.value);
  }

  const onChangeFlavor = (event) => {
    setFlavor(event.target.value);
  }

  const onChangeSize = (event) => {
    setSize(event.target.value);
  }

  const handleClick = () => {
    console.log(crust, flavor, size);
    if (crust == "" || flavor == "" || size == "" ) {
      alert('please select appropriate options')
    }
    else {
      let pizzaObject = {
        "Flavor": flavor,
        "Crust": crust,
        "Size": size,
        "Table_No": 9,
      }
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzExNzIzMTUsIm5iZiI6MTYzMTE3MjMxNSwianRpIjoiMzg4YzJkMGItMjgxNi00YmNkLWE0MWQtYzE0Mzc2ZTBlOWNmIiwiZXhwIjoxNjMxMTczMjE1LCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.77X_XlDzeM4Qs54Xsbh2Gk7x6aB5KPdelWn9yxHj_q4";
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify(pizzaObject)
};

fetch(`https://order-pizza-api.herokuapp.com/api/orders`, requestOptions)
    .then(response => { if (response.status == 201) {
      alert('Your order has been registered')
    }
    })}
  }
  //function handleClick(){
     // console.log(name, 'name');
    // history.push('/vieworder')
  //}

  //const contextValue =  useContext(Context);
  //console.log(contextValue, 'MyContextValue');
  return(
    <>
    <h3>PlaceOrder</h3>
    
      <Card  style={{ width: '18rem', marginLeft: '38rem'}} >
      <div className='placeOrder' >
      <Card.Body>
     
      <Card.Title >
      <Form.Label   for="crust">Crust:</Form.Label>
      <Form.Select name="crust" aria-label="Default select example" onBlur={onChangeCrust}>
      <option>Please Select</option>
      <option value="THICK">Thick</option>
      <option value="THIN">Thin</option>
      <option value="STUFFED">Stuffed</option>
      </Form.Select>
      </Card.Title>
      <Card.Title>
      <Form.Label for="flavour">Flavour:</Form.Label>
      <Form.Select name="flavour" aria-label="Default select example" onBlur={onChangeFlavor}>
      <option>Please Select</option>
      <option value="FAJITA" >Fajita</option>
        <option value="CHEESE">Cheese</option>
        <option value="VEGGIE">Veggie</option>
      </Form.Select>
      </Card.Title>
      <Card.Title>
      <Form.Label for="size">Size:</Form.Label>
      <Form.Select name="size" aria-label="Default select example" onBlur={onChangeSize}>
      <option>Please Select</option>
      <option value="S" >Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
      </Form.Select>
     
      </Card.Title>
      
     </Card.Body>
     </div>
</Card>

      
     
      <div className="d-grid gap-1">
      <Button  variant="danger" size="lg" onClick={handleClick}>Click here</Button>
      </div>
      </>
    
  )
  }
export default PlaceOrder;
  

