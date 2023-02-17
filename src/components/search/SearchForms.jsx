import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function SearchForm () {

    const navigate = useNavigate();
    const [seachTerm, setSearchTerm] = useState('')

    return (
        <Form className="d-flex" onSubmit={ (e) => {
            e.preventDefault();
            navigate( `/products/search?q=${seachTerm}` )
        }} >
            <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search" onChange={ (e) => setSearchTerm(e.target.value) } />
            <Button variant="outline-success" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
        </Form>
    )
}