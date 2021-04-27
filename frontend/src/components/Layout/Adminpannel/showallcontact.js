import React, { Component, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

import { Card } from 'react-bootstrap';
//import { axios } from 'axios';
const axios = require('axios').default;

class showallcontact extends Component {
    state = {
        query: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:100/contact/showall", {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                console.log(response)
                this.setState({
                    query: response.data.data,
                })
            })
            .catch((err) => {
                console.log(err.response);
                alert("Error. Please Login first")
            })
    }

    DeleteContact = (id) => {

        axios({
            method: 'delete',
            url: 'http://localhost:100/contact/delete/' + id,

            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })

            .then((response) => {
                console.log(response)
                alert("Delete successfull")
                window.location.reload()

            })
            .catch((err) => {
                console.log(err.response)
                alert("Delete unsuccessfull")
            })

    }




    render() {


        return (
            <>

                <div div class="container-contact">
                    <h3>
                        <table class="table" >
                            <thead class="thead-light" >
                                <tr>
                                    <th scope="col" >Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Query</th>
                                    <th scope="col">Actions </th>
                                </tr>
                            </thead>
                        </table>
                    </h3>

                    {
                        this.state.query.map((query1) => {
                            return (

                                <h3>
                                     <table class="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row"></th>
                                            <td>{query1.userid?.firstname}</td>
                                            <td>{query1.userid?.email}</td>
                                            <td>{query1.query}</td>
                                            <td><button onClick={this.DeleteContact.bind(this, query1._id)} className="btn btn-danger alert btn-lg">Delete</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                                </h3>
                               

                            )
                        })
                    }
                </div>

                {/* <Container>
                    <Row>

                        <div>
                            {
                                this.state.query.map((query1) => {
                                    return (<div>

                                        <div className="container-fluid mt-5 screenFit">
                                            <div className="row ">
                                                <div className="col-md-5">


                                                </div>


                                                <div className="col-md-6">
                                                    <div className="p-3 bg-green">
                                                        <h3 >{query1.userid?.firstname} {query1.userid?.lastname}</h3>
                                                        <h3 >{query1.userid?.email} </h3>
                                                        <h3 >{query1.userid?.phoneno} </h3>
                                                    </div>

                                                    <p className="p-2 text-left font-medium">
                                                        Message: {query1.query}
                                                    </p>
                                                    <button onClick={this.DeleteContact.bind(this, query1._id)} className="btn btn-danger alert btn-lg">Delete</button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    )
                                })
                            }

                        </div>





                    </Row>
                </Container> */}
                {/* <Footer/> */}
            </>
        )
    }

}

export default showallcontact;