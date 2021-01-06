import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

class Homepage extends Component {
    constructor(props) {
        super(props);
        //If we don't bind (this) then the functions say that 'this' is undefined
    }

    render(){
        return(
            <div className="homepage-topbar">
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">SignUp</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default Homepage;