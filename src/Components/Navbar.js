import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Link to='/' className="no-underline"><Navbar.Brand href="#home" className="font-bold">React-Bootstrap</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className="no-underline font-semibold"><Nav.Link className="text-white" expand="lg" href="#home">Home</Nav.Link></Link>
            <Link to='/courses' className="font-semibold no-underline"><Nav.Link className="text-white" href="#link">Courses</Nav.Link></Link>
            <Link to='/blog' className="font-semibold no-underline"><Nav.Link className="text-white" href="#link">Blog</Nav.Link></Link>
            <Link to='/faq' className="font-semibold no-underline"><Nav.Link className="text-white" href="#link">Faq</Nav.Link></Link>
            <Link to='/signin' className="no-underline font-semibold"><Nav.Link href="#link" className="text-white">Sign In</Nav.Link>
            </Link>
            <Link to='/register' className="no-underline font-semibold"><Nav.Link href="#link" className="text-white">Register</Nav.Link>
            </Link>
            {/* <NavDropdown title="Log In" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;