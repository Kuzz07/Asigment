import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import { Route, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const axios = require('axios').default;

class  Editproduct extends Component {
    state = {
        product: '',
        pdesc: '',
        buydate:'',
        pprice: '',
        

        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        id: this.props.match.params.id
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:100/product/single/' + this.state.id,
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {

                // console.log("Data")
                console.log(response.data.data);

                this.setState({
                    product: response.data.product,
                    pdesc: response.data.pdesc,
                    buydate: response.data.buydate,
                    pprice: response.data.pprice,

                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }



    EditProduct = (e) => {
        e.preventDefault()
        alert(this.state.price)
        axios({
            method: 'put',
            url: 'http://localhost:100/product/update/' + this.state.id,
            data: this.state,
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                console.log(response)
                alert("update successfull")
            })
            .catch((err) => {
                console.log(err.response)
                alert("update unsuccessfull")
            })



    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {


        return (
            <>
                <Container>
                    <div className="auth-wrapper">
                        <div className="auth-inner-addform">
                            <div>
                                <div className="header">
                                    <h1>Update Product  </h1>
                                </div>


                                <form>
                                    <br></br><br></br>


                                    <p>
                                        <label><h4>Product Name</h4></label>
                                        <input type="text" className="form-control" name="product"
                                            value={this.state.product}
                                            onChange={this.changeHandler} />
                                    </p>

                                    <p>
                                        <label><h4>Product Description</h4></label>
                                        <input type="text" className="form-control" name="pdesc"
                                            value={this.state.pdesc}
                                            onChange={this.changeHandler} />
                                    </p>

                                    <p>
                                        <label><h4>Buying Date</h4></label>
                                        <input type="date" className="form-control" name="buydate"
                                            value={this.state.buydate}
                                            onChange={this.changeHandler} />
                                    </p>

                                   
                                   
                                    <p>
                                        <label><h4> Product Price</h4></label>
                                        <input type="text" className="form-control" name="pprice"
                                            value={this.state.pprice}
                                            onChange={this.changeHandler}
                                        />
                                    </p>
                                    <br></br>
                                    <br></br>

                                    <p>
                                        <button className="btn btn-secondary alert btn-block" onClick={this.EditProduct}>Update Product </button>

                                    </p>

                                </form>

                            </div>
                        </div>
                    </div>

                </Container>
            {/* <Footer/> */}
            </>
        )
    }

}

export default Editproduct;