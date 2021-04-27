import React, { Component } from 'react';
//import { axios } from 'axios';
import Footer from '../Footer/Footer';
const axios = require('axios').default;

class Addpackages extends Component {
    state = {
        packagesname: '',
        packagedesc: '',
        packageduration: '',
        packagetime: '',
        packageprice: '',
        pimage: '',
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    PackageAddMethod = (e) => {

        var formData = new FormData();
        var image = this.refs.pimages.files[0];
        formData.append("packagesname", this.state.packagesname)
        formData.append("packagedesc", this.state.packagedesc)
        formData.append("packageduration", this.state.packageduration)
        formData.append("packagetime", this.state.packagetime)
        formData.append("pimage", image)

        formData.append("packageprice", this.state.packageprice)


        e.preventDefault()

        axios({
            method: 'post',
            url: 'http://localhost:100/packages/insert',
            data: formData,
            headers: {
                'Accept': 'multipart/form-data',
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

            .then(response => {
                console.log(response);
                alert("Paackage has been added")
            })
            .catch(err => {
                console.log(err.response);
                alert("Error adding Package")
            })


    };
    render() {
        return (
            <>
            <div className="auth-wrapper">
                <div className="auth-inner-addform">
                    <div>
                        <div className="header">
                            <h1>Add Booking   </h1>
                        </div>                        <br></br>
                        <form>
                            <div className="form-group">
                                <label><i> Package Name </i> </label>
                                <input className="form-control" type="text" value={this.state.packagesname} name="packagesname" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                                <label><i>Package Description</i></label>
                                <input className="form-control" type="text" value={this.state.packagedesc} name="packagedesc" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                                <label><i> Package Duration</i></label>
                                <input className="form-control" type="text" value={this.state.packageduration} name="packageduration" onChange={this.inputHandler} />

                            </div>


                            <div className="form-group">
                                <label> <i>Package Time</i> </label>
                                <input className="form-control" type="time" value={this.state.packagetime} name="packagetime" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                                <label><i>Price</i></label>
                                <input className="form-control" type="text" value={this.state.packageprice} name="packageprice" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                                <label><i>Image</i></label>
                                <input className="form-control-img" ref="pimages" type="file" name="pimage" />
                            </div>

                            <p>
                                <button className="btn btn-secondary alert btn-block" onClick={this.PackageAddMethod}>Add Package </button>

                            </p>
                        </form>

                    </div>
                </div>
            </div>
            {/* <Footer/> */}
            </>
        )
    }

}


export default Addpackages;