import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import { Route, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const axios = require('axios').default;

class EditPackages extends Component {
    state = {
        packagesname: '',
        packagedesc: '',
        packageduration: '',
        packagetime: '',
        packageprice: '',

        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        id: this.props.match.params.id
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:100/packages/single/' + this.state.id,
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {

                // console.log("Data")
                console.log(response.data.data);

                this.setState({
                    packagesname: response.data.packagesname,
                    packagedesc: response.data.packagedesc,
                    packageduration: response.data.packageduration,
                    packagetime: response.data.packagetime,
                    packageprice: response.data.packageprice,
                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }



    EditPackages = (e) => {
        e.preventDefault()
        alert(this.state.price)
        axios({
            method: 'put',
            url: 'http://localhost:100/packages/update/' + this.state.id,
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
                                    <h1>Update Packages  </h1>
                                </div>


                                <form>
                                    <br></br><br></br>


                                    <p>
                                        <label><h4>Package Name</h4></label>
                                        <input type="text" className="form-control" name="packagesname"
                                            value={this.state.packagesname}
                                            onChange={this.changeHandler} />
                                    </p>

                                    <p>
                                        <label><h4>Package Description</h4></label>
                                        <input type="text" className="form-control" name="packagedesc"
                                            value={this.state.packagedesc}
                                            onChange={this.changeHandler} />
                                    </p>

                                    <p>
                                        <label><h4> Package Duration</h4></label>
                                        <input type="text" className="form-control" name="packageduration"
                                            value={this.state.packageduration}
                                            onChange={this.changeHandler} />
                                    </p>

                                    <p>
                                        <label><h4> Package Time</h4></label>
                                        <input type="time" className="form-control" name="packagetime"
                                            value={this.state.packagetime}
                                            onChange={this.changeHandler} />
                                    </p>

                                    <p>
                                        <label><h4> Package Price</h4></label>
                                        <input type="text" className="form-control" name="packageprice"
                                            value={this.state.packageprice}
                                            onChange={this.changeHandler}
                                        />
                                    </p>
                                    <br></br>

                                    <p>
                                        <button className="btn btn-secondary alert btn-block" onClick={this.EditPackages}>Update Package </button>

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

export default EditPackages;