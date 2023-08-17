import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// eslint-disable-next-line react/prop-types
function Header({setCurrentPage, setCurrentUser}) {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="#home">App Bank</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#updatepassword">Cambiar Cotraseña</Nav.Link>
							<Nav.Link href="#statusaccount" onClick={()=>{setCurrentPage('statusAccount')}}>Estado de Cuenta</Nav.Link>
							<NavDropdown title="Acciones" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#reviewshares" onClick={()=>{setCurrentPage('reviewShares')}}>Revisar Acciones</NavDropdown.Item>
								<NavDropdown.Item href="#sellshares" onClick={()=>{setCurrentPage('sellShares')}}>Vender Acciones</NavDropdown.Item>
								<NavDropdown.Item href="#buyshares" onClick={()=>{setCurrentPage('buyShares')}}>Comprar Acciones</NavDropdown.Item>
								<NavDropdown.Divider/>
								<NavDropdown.Item href="#depositfunds">Depositar Fondos</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav>
							<Nav.Link href="#Logout" onClick={()=>{setCurrentUser(0)}}>Cerrar Sesión</Nav.Link>

						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default Header
