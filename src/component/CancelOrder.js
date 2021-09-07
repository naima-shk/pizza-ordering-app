import React from 'react';

import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

function CancelOrder() {
  const history = useHistory()
  return (
    <>
      <h3>CancelOrder</h3>
      <div className="d-grid gap-2">
        <Button variant="danger" size="lg" onClick={() => history.goBack()}>
          Go Back
        </Button>
      </div>
    </>
  )
}
export default CancelOrder;
