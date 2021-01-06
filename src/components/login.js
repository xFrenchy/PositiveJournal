import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        //If we don't bind (this) then the functions say that 'this' is undefined
        // this.updateDetails = this.updateDetails.bind(this);
        // this.login = this.login.bind(this);
        // this.bypassLogin = this.bypassLogin.bind(this);
        // this.toggleWheel = this.toggleWheel.bind(this);

        this.state = {
            details:{
                username: '',
                password: '',
            },
            // background: '#fff',
            // show: false
        };
    }

    render(){
        return(
            <Form>
                <Form.Group> 
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group> 
                <Form.Label>Password</Form.Label>
                <Form.Control type ="password" placeholder="Enter password" />
                </Form.Group>
            </Form>
        )
    }

}

export default Login;