import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

function BasicExample() {
  const {user, logOut} = useContext(AuthContext);
  console.dir(user);

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <span><img src="https://i.postimg.cc/DZn2JzFN/technology.png" alt="" /></span>
        <Link to='/' className="no-underline"><Navbar.Brand href="#home" className="font-bold">TUTFLIX</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className="no-underline font-semibold"><Nav.Link className="text-white" expand="lg" href="#home">Home</Nav.Link></Link>
            <Link to='/courses' className="font-semibold no-underline"><Nav.Link className="text-white" href="#link">Courses</Nav.Link></Link>
            <Link to='/blog' className="font-semibold no-underline"><Nav.Link className="text-white" href="#link">Blog</Nav.Link></Link>
            <Link to='/faq' className="font-semibold no-underline"><Nav.Link className="text-white" href="#link">Faq</Nav.Link></Link>
            
            {
              user?.uid ?

              <>
              <img
                className="w-10 h-10 rounded-full"
                  src={user.photoURL}
                  alt="avatar"/>

              <Link onClick={logOut} to='/' className="no-underline font-semibold"><Nav.Link href="#link" className="text-white">Log Out</Nav.Link>
              </Link> 
              </>
               :

              <>

                <Link to='/signin' className="no-underline font-semibold"><Nav.Link href="#link" className="text-white">Sign In</Nav.Link>
                </Link>
                <Link to='/register' className="no-underline font-semibold"><Nav.Link href="#link" className="text-white">Register</Nav.Link>
                </Link>
                
              </>

            }
            
            {/* <span>{user?.email}</span> */}
            {/* {
              user?.photoURL ? <img
                className="w-10 h-10 rounded-full"
                  src={user.photoURL}
                  alt="Rounded avatar"/> : <h1>h</h1>

            } */}
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