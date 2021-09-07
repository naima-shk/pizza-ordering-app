import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import CancelOrder from './component/CancelOrder';
import logo from './component/logo.PNG';
import PlaceOrder from './component/PlaceOrder';
import Start from './component/Start';
//import Home from './component/Home';
import ViewOrder from './component/ViewOrder';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar bg="danger" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Pizza House</Navbar.Brand>

              <img src={logo} alt='logo' />
              <Nav className="me-auto">
                <Nav.Link as={Link} to='./Start'>Start here</Nav.Link>

              </Nav>
            </Container>
          </Navbar>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>


          <Route path="/Start">
            <Start />
          </Route>
          <Route path="/ViewOrder">
            <ViewOrder />
          </Route>
          <Route path="/PlaceOrder">
            <PlaceOrder />
          </Route>
          <Route path="/CancelOrder">
            <CancelOrder />
          </Route>

        </Switch>

      </Router>

    </>
  );
}
export default App;
