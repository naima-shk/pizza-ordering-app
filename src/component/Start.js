import React from 'react';

import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

function Start(){
  let history =useHistory();
    return(
    <>
    <div className="d-grid gap-2">
  <Button variant="danger" size="lg" onClick={()=>history.push('./ViewOrder')}>
    View Order
  </Button>
  <Button variant="danger" size="lg" onClick={()=>history.push('./PlaceOrder')}>
    Place Order
  </Button>
  <Button variant="danger" size="lg" onClick={()=>history.push('./CancelOrder')}>
    Cancel Order
  </Button>
</div>
    </>
  )
}
export default Start;
