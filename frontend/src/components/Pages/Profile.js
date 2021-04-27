import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
const axios = require('axios').default;



class Userprofile extends Component {

    state = {
        prof: {},
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
   async componentDidMount() {
        await axios(
            {
                method: 'get',
                url: 'http://localhost:100/user/showProfile',
                headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        )
       //await axios.get("http://localhost:100/user/showProfile")
            .then((response) => {
                console.log(response)
                this.setState({
                    prof: response.data.data,
                })
            })
            .catch((err) => {
                console.log(err.response);
                alert("Error. Please Login first")
            })
    }




    render(){
        return(
            
            <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">{this.state.prof.firstname}</span><span class="text-black-50">{this.state.prof.email}</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h2 class="text-center">Profile Settings</h2>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels-profile"><i>First Name: </i> {this.state.prof.firstname}</label></div> 
                    <div class="col-md-6"><label class="labels-profile"><i>Last Name: </i>{this.state.prof.lastname}</label></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels-profile"> <i>Email: </i> {this.state.prof.email}</label></div>
                    <div class="col-md-12"><label class="labels-profile"><i> Phone Number: </i> {this.state.prof.phoneno}</label></div>
                 
   
                    <div class="col-md-12"><label class="labels-profile"><i>Address: </i>{this.state.prof.address}</label></div>
                    
                </div>
               
                <div class="mt-5 text-center"><Link to={'/updateprofile/'+this.state.prof._id}><button class="btn btn-primary profile-button" type="button">Update Profile</button></Link></div>
            </div>
        </div>
     
           
        </div>
    </div>




          
        )
    }
}

export default Userprofile;