import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
// import { Button } from "../../Header/Button";
import { Card } from 'react-bootstrap';
import Footer from '../Layout/Footer/Footer';
//import { axios } from 'axios';
const axios = require('axios').default;

class showMyBookings extends Component {
    state = {
        packages: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {

        this.load();


    }


    deletePackage = (id) => {
        axios.delete('http://localhost:100/booking/delete/' + id, this.state.config)
            .then((response) => {
                console.log(response)
                alert("Delete successfull")
                this.load()
            })
            .catch((err) => {
                //console.log(err.response)
                alert("Delete unsuccessfull")
            })

    }

    load() {
        axios({
            method: 'get',
            url: 'http://localhost:100/booking/showMyApplied',
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                console.log(response.data.data)
                this.setState({
                    packages: response.data.data,

                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }






    render() {


        return (
            <>
                <Container>
                    <Row>

                        <div>

                            {
                                this.state.packages?.map((package1) => {
                                    return (

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
                                                        <button onClick={this.deletePackage.bind(this, package1._id)} className="btn btn-danger btn-lg">Delete</button>
                                                        
                                                    </div>

                                                </div>
                                            </div>
                                        </div>



                                    )
                                })
                            }

                        </div>


                    </Row>
                </Container>
                {/* <Footer/> */}
            </>
        )
    }

}

export default showMyBookings;