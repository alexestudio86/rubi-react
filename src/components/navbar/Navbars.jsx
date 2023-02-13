import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCarContext } from '../../context/CarProvider';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getAllLabels } from '../../context/jsonCalls';


export function NavCompact(){
    
    const car = useCarContext();
    const [totalItems, setTotalItems] = useState(0);

    useEffect( () => {
        car.length > 0 ? setTotalItems(
                Array.from( car.map( c => {
                    //console.log( c.variants.map( (v,i) => i != 1 && 1 ) )
                    return Array.from( c.variants.map( (v,i) => {
                        if( i !== 1 ){
                            return 1
                        }
                        return i
                    } ) ).reduce( (x,y) => x+y )
                } ) ).reduce( (a,b) => a+b )
            )
        : setTotalItems(0)
    },[car])


    return (
        <Navbar bg="dark" variant="dark" sticky="top" id='navCompact'>
            <Container>
                <NavLink to='/'>
                    <i className='fas fa-home fa-2x text-white'></i>
                </NavLink>
                <NavLink className='btn btn-dark d-block d-sm-none' to='/checkout' >
                    <i className='fas fa-shopping-cart fa-lg me-1'></i>
                    {/* Car lenght */}
                    <span className='badge rounded-pill bg-danger'>{ totalItems }</span>
                </NavLink>
            </Container>
        </Navbar>
    )
}

export function NavFull( ){
    
    const car = useCarContext();
    const [totalItems, setTotalItems] = useState()
    
    //Active or inactive class
    const active = 'nav-link text-uppercase active';
    const inactive = 'nav-link text-uppercase';

    const labels = getAllLabels()

    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg" id='navfull'>
            <Container>
                <NavLink className='navbar-brand d-none d-sm-block' to='/'>
                    <img src={ require('../../assets/theme/logo_arminda-dark.png') } alt='Logo arminda' height='74' />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <NavLink className='btn btn-dark d-block d-sm-none' to='/checkout' >
                    <i className='fas fa-shopping-cart fa-lg me-1'></i>
                    {/* Car lenght */}
                    <span className='badge rounded-pill bg-danger'>{ car.length }</span>
                </NavLink>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link text-uppercase' to='/'>Home</NavLink>
                        <NavLink className='nav-link text-uppercase'  to='/services'>Servicios</NavLink>
                        <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
                            { labels && labels.map( (label, index) => 
                                <NavLink key={index} className='dropdown-item' to={`/products/search?labels=${label.url}`} >{ label.name }</NavLink>
                            )}
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
