import { Container, Form, Button } from "react";
import { Component } from 'react';
import axios from 'axios';
// import Footer from '../Layout/Footer/Footer';

class Register extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        phoneno: '',
        address: '',
        password: '',
        // "role" : '',
    }
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    sendUserInfo = (e) => {
        e.preventDefault();

        axios.post("http://localhost:100/user/register", this.state)
            .then(response => {
                console.log(response);
                alert(" registarteddd....");
            })
            .catch((err) => {
                console.log(err.response);
                alert("not registarteddd....");
            })
    }

    render() {
        return (
            <div className="register-body mt-4 ">
                <div className="register-div mb-3">
                </div>
                <form>
                    <h1 className="text-reg text-white">Register</h1>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" type="text" value={this.state.firstname}
                            onChange={this.inputHandler} className="form-control" placeholder="First name" name="firstname" />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" type="text" value={this.state.lastname}
                            onChange={this.inputHandler} className="form-control" placeholder="Last name" name="lastname" />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" type="text" value={this.state.email}
                            onChange={this.inputHandler} className="form-control" placeholder="Email" name="email" />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" type="text" value={this.state.phoneno}
                            onChange={this.inputHandler} className="form-control" placeholder="Phone Number" name="phoneno" />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" type="text" value={this.state.address


                        }
                            onChange={this.inputHandler} className="form-control" placeholder="Address" name="address" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={this.state.password}
                            onChange={this.inputHandler} className="form-control" placeholder="Enter password" name="password" />
                    </div>




                    <button type="submit" onClick={this.sendUserInfo} className="btn btn-dark btn-lg btn-block">Register</button>
                    <p className="forgot-password text-right">
                        Already registered  <a href="http://localhost:3000/login">Log IN</a>

                    </p>
                </form>
            </div>

        );

    }
}
export default Register;