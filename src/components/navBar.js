import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const routes = [
    {
        name: 'Historial de Pedidos',
        href: '/order-history',
    }
]

export const NavBar = () => {
    return (
        <>
        <Navbar bg="light" data-bs-theme="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home">Bebidas</Navbar.Brand>
                    <Nav className="me-auto">
                        {routes.map((route, index) => (
                            <Link to={route.href} key={index} className="nav-link">
                                {route.name}
                            </Link>
                        ))}
                    </Nav>
            </Container>
        </Navbar>
      </>
    )
}