import React, { Component, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

import { Card } from 'react-bootstrap';
//import { axios } from 'axios';
const axios = require('axios').default;

class Showallproduct extends Component {
    state = {
        products: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:100/product/showall")
            .then((response) => {
                console.log(response)
                this.setState({
                    products: response.data.data,
                })
            })
            .catch((err) => {
                console.log(err.response);
                alert("Error. Please Login first")
            })
    }

    deleteProduct = (id) => {

        axios({
            method: 'delete',
            url: 'http://localhost:100/product/delete/' + id,

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
    applyproduct = (id) => {

        axios({
            method: 'post',
            url: 'http://localhost:100/cart/' + id,
            
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                console.log(response)
                alert("product  Cart successfull")
            })
            .catch((err) => {
                console.log(err.response)

                alert("Cart unsuccessfull")
            })

    }



    render() {
        if (localStorage.getItem('token') && localStorage.getItem('role') === 'Admin') {
            var showall =
                (
                    
                    <div>
                        {
                            this.state.products.map((product1) => {
                                console.log(product1)
                                return (<div>
                                    
                                    <div className="container-fluid mt-5 screenFit">
                                        <div className="row ">
                                            <div className="col-md-5">

                                                <img src={`http://localhost:100/public/images/${product1.pimage}`} className="img-fluid" style={{ height: "400px" }} />
                                            </div>

                                            <div className="col-md-6">
                                                <div className="p-3 bg-green">
                                                    <h3 className="text-left text-white">{product1.product}</h3>
                                                </div>

                                                <p className="p-2 text-left font-medium">
                                                    {product1 .pdesc}
                                                </p>

                                                <div className=" p-4 details-header mt-4">
                                                    <div className="icon-circle"><i class=" p-4 fa fa-plus" ></i></div>
                                                    <h2 className=" ml-3">Tranquility Spa, Nepal</h2>
                                                </div>
                                                <div className="details-body mx-4 p-3">
                                                <div className="row">
                                                <div className="col-md-6">
                                                        <h4 className="font-medium">Buying Date </h4>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4 className="font-medium">{product1.buydate}</h4>
                                                    </div>
                                                    </div>

                                                <div className="row">
                                                        <div className="col-md-6">
                                                            <h4 className="font-medium">Price </h4>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h4 className="font-medium">{product1.pprice}</h4>
                                                        </div>
                                                        <hr></hr>
                                                        <button onClick={this.deleteProduct.bind(this, product1._id)} className="btn btn-danger alert btn-lg">Delete</button>
                                                    <button className="btn btn-light alert btn-lg"><Link to={'/Editproduct/'+product1._id} >Update</Link></button>
                                                </div>
                                                

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
                        this.state.products.map((product1) => {
                            return (<div>

                                <div className="container-fluid mt-5 screenFit">
                                    <div className="row ">
                                        <div className="col-md-5">
                                        <img src={`http://localhost:100/public/images/${product1.pimage}`} className="img-fluid" style={{ height: "400px" }} />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="p-3 bg-green">
                                                <h3 className="text-left text-white">{product1.product}</h3>
                                            </div>
                                            <p className="p-2 text-left font-medium">
                                                {product1.pdesc}
                                            </p>

                                            <div className=" p-4 details-header mt-4">
                                                <div className="icon-circle"><i class=" p-4 fa fa-plus" ></i></div>
                                                <h2 className=" ml-3">Tranquility Spa, Nepal</h2>
                                            </div>
                                            
                                            <div className="details-body mx-4 p-3">

                                            <div className="row">
                                                    <div className="col-md-6">
                                                        <h4 className="font-medium">Buying Date </h4>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4 className="font-medium">{product1.buydate}</h4>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h4 className="font-medium">Price </h4>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4 className="font-medium">{product1.pprice}</h4>
                                                    </div>
                                                </div>
                                                 <hr></hr>
                
                                                <button onClick={this.applyproduct.bind(this, product1._id)} className="btn btn-success btn-lg">Add to Cart</button>
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
            
            </>
        )
    }

}

export default Showallproduct;