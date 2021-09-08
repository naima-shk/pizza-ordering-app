import React, { useState } from 'react';

import { Button } from 'react-bootstrap';

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
      let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzEwODgzNjksIm5iZiI6MTYzMTA4ODM2OSwianRpIjoiMWRiYjdlMjctMmZlZi00ZGEzLWI1NzEtNzM2NGJhOGQ2OWNjIiwiZXhwIjoxNjMxMDg5MjY5LCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.MC5RwhMTsU2yr1H-GPTQ5IVXqSzRnSmaIOYjLT1eJug";
  
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
    
    <label for="cars">Crust:</label>
      <select name="crust" onChange={onChangeCrust}>
        <option value="STUFFED" selected>Stuffed</option>
        <option value="CRACKER">Cracker</option>
        <option value="THIN">Thin</option>
      </select>
      <label for="flavor">Flavor:</label>
      <select name="flavor" onChange={onChangeFlavor}>
        <option value="FAJITA" selected>Fajita</option>
        <option value="CHEESE">Cheese</option>
        <option value="VEGGIE">Veggie</option>
      </select>
      <label for="size">Size:</label>
      <select name="size" onChange={onChangeSize}>
        <option value="S" selected>Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
      </select>
      <Button onClick={handleClick}>Click here</Button>
  
      
    </>
  )
}
export default PlaceOrder;
  

