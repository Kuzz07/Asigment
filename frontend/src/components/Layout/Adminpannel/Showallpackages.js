import React, { Component, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

import { Card } from 'react-bootstrap';
//import { axios } from 'axios';
const axios = require('axios').default;

class Showallpackages extends Component {
    state = {
        packages: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:100/packages/showall")
            .then((response) => {
                console.log(response)
                this.setState({
                    packages: response.data.data,
                })
            })
            .catch((err) => {
                console.log(err.response);
                alert("Error. Please Login first")
            })
    }

    deletePackage = (id) => {

        axios({
            method: 'delete',
            url: 'http://localhost:100/packages/delete/' + id,

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

    applypackage = (id) => {

        axios({
            method: 'post',
            url: 'http://localhost:100/booking/' + id,
            // data: id,
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                console.log(response)
                alert("Booking successfull")
            })
            .catch((err) => {
                console.log(err.response)

                alert("Booking not successfull")
            })

    }



    render() {
        if (localStorage.getItem('token') && localStorage.getItem('role') === 'Admin') {
            var showall =
                (

                    <div>
                        {
                            this.state.packages.map((package1) => {
                                return (<div>

                                    <div className="container-fluid mt-5 screenFit">
                                        <div className="row ">
                                            <div className="col-md-5">

                                                <img src={`http://localhost:100/public/images/${package1.pimage}`} className="img-fluid" style={{ height: "400px" }} />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="p-3 bg-green">
                                                    <h3 className="text-left text-white">{package1.packagesname}</h3>
                                                </div>

                                                <p className="p-2 text-left font-medium">
                                                    {package1.packagedesc}
                                                </p>

                                                <div className=" p-4 details-header mt-4">
                                                    <div className="icon-circle"><i class=" p-4 fa fa-plus" ></i></div>
                                                    <h2 className=" ml-3">Tranquility Spa, Thamel</h2>
                                                </div>

                                                <div className="details-body mx-4 p-3">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h4 className="font-medium">Time </h4>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h4 className="font-medium">{package1.packagetime} </h4>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h4 className="font-medium">Duration </h4>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h4 className="font-medium">{package1.packageduration}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h4 className="font-medium">Price </h4>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h4 className="font-medium">{package1.packageprice}</h4>
                                                        </div>
                                                    </div>
                                                    <hr></hr>
                                                    <button onClick={this.deletePackage.bind(this, package1._id)} className="btn btn-danger alert btn-lg">Delete</button>
                                                    <button className="btn btn-light alert btn-lg"><Link to={'/Editpackages/' + package1._id} >Update</Link></button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                )
                            })
                        }

                    </div>
                )
        }

        else if (localStorage.getItem('token') && localStorage.getItem('role') === 'Customer') {
            var showall =
                <div>
                    <p></p>

                    {
                        this.state.packages.map((package1) => {
                            return (<div>

                                <div className="container-fluid mt-5 screenFit">
                                    <div className="row ">
                                        <div className="col-md-5">
                                            <img src={`http://localhost:100/public/images/${package1.pimage}`} className="img-fluid" style={{ height: "400px" }} />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="p-3 bg-green">
                                                <h3 className="text-left text-white">{package1.packagesname}</h3>
                                            </div>
                                            <p className="p-2 text-left font-medium">
                                                {package1.packagedesc}
                                            </p>

                                            <div className=" p-4 details-header mt-4">
                                                <div className="icon-circle"><i class=" p-4 fa fa-plus" ></i></div>
                                                <h2 className=" ml-3">Tranquility Spa, Thamel</h2>
                                            </div>
                                            <div className="details-body mx-4 p-3">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h4 className="font-medium">Time </h4>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4 className="font-medium">{package1.packagetime}</h4>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h4 className="font-medium">Duration </h4>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4 className="font-medium">{package1.packageduration}</h4>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h4 className="font-medium">Price </h4>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4 className="font-medium">{package1.packageprice}</h4>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                {/* <button onClick={this.deletePackage.bind(this, package1._id)} className="btn btn-success btn-lg">Delete</button> */}
                                                <button onClick={this.applypackage.bind(this, package1._id)} className="btn btn-success btn-lg">Book Now</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <p></p>
                            </div>
                            )
                        })
                    }

                </div>
        }
        return (
            <>
                <Container>
                    <Row>

                        {showall}


                    </Row>
                </Container>
                {/* <Footer/> */}
            </>
        )
    }

}

export default Showallpackages;