import React from 'react'
import {useHistory} from 'react-router'
import {Button} from 'react-bootstrap'
function Start(){
  let history =useHistory();
    return(
    <>
    <div className="d-grid gap-2">
  <Button variant="danger" size="lg" onClick={()=>history.push('./ViewOrder')}>
    ViewOrder
  </Button>
  <Button variant="danger" size="lg" onClick={()=>history.push('./PlaceOrder')}>
    PlaceOrder
  </Button>
  <Button variant="danger" size="lg" onClick={()=>history.push('./CancelOrder')}>
    CancelOrder
  </Button>
</div>
    </>
  )
}
export default Start;
