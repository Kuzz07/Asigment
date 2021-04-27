import React, { Component } from 'react';
//import { axios } from 'axios';
const axios = require('axios').default;

class Addproducts extends Component {
    state = {
        product: '',
        pdesc: '',
        buydate:'',
        pprice: '',
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

    ProductAddMethod = (e) => {
        e.preventDefault()
        var formData = new FormData();
        var image = this.refs.pimage.files[0];
        formData.append("product", this.state.product)
        formData.append("pdesc", this.state.pdesc)
        formData.append("buydate", this.state.buydate)
        formData.append("pimage", image)

        formData.append("pprice", this.state.pprice)


      

        axios({
            method: 'post',
            url: 'http://localhost:100/product/insert',
            data: formData,
            headers: {
                'Accept': 'multipart/form-data',
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

            .then(response => {
                console.log(response);
                alert("Product has been added")
            })
            .catch(err => {
                console.log(err.response);
                alert("Error adding Product")
            })


    };
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner-addform">
                    <div>
                        <div className="header">
                            <h1>Add Product   </h1>
                        </div>                        <br></br>
                        <form>
                            <div className="form-group">
                                <label><i> Product Name </i></label> 
                                <input className="form-control" type="text" value={this.state.product} name="product" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                                <label><i>Product Description</i></label>
                                <input className="form-control" type="text" value={this.state.pdesc} name="pdesc" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                                <label><i>Buying Date</i></label>
                                <input className="form-control" type="date" value={this.state.buydate} name="buydate" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                                <label><i>Price</i></label>
                                <input className="form-control" type="text" value={this.state.pprice} name="pprice" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                                <label><i>Image</i></label>
                                <input className="form-control-img" ref="pimage" type="file" name="pimage" />
                            </div>

                            <br></br>
                            <br></br>

                            <p>
                                <button className="btn btn-secondary alert btn-block" onClick={this.ProductAddMethod}>Add Product </button>

                            </p>
                        </form>

                    </div>
                </div>
            </div>

        )
    }

}


export default Addproducts;