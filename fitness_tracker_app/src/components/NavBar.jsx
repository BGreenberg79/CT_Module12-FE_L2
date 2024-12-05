import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import  Navbar from "react-bootstrap/Navbar";

function NavBar() {
    return(
        <Navbar expand="md" bg="info" data-bs-theme="info">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <NavLink className="mx-2 text-light text-decoration-none" to='/'>Home</NavLink>
                        <NavLink className="mx-2 text-light text-decoration-none" to='/exercise'>Exercise</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar;