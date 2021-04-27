import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
const axios = require('axios').default;



class updateprofile extends Component {

    state = {
        firstname:'',
        lastname:'',
        email:'',
        address:'',
        phoneno:'',

        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        id: this.props.match.params.id
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
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    email: response.data.email,
                    phoneno: response.data.phoneno,
                    address: response.data.address,
                })
            })
            .catch((err) => {
                console.log(err.response);
                alert("Error. Please Login first")
            })
    }
    EditProfile = (e) => {
        e.preventDefault()
        alert(this.state.price)
        axios({
            method: 'put',
            url: 'http://localhost:100/user/update/' + this.state.id,
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
 



    render(){
        return(
            
            <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">{this.state.firstname}</span><span class="text-black-50">{this.state.email}</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Firstname</label><input type="text" value={this.state.firstname} name="firstname" onChange={this.changeHandler}/> </div>
                    <div class="col-md-6"><label class="labels">Last name</label><input type="text" value={this.state.lastname} name="lastname" onChange={this.changeHandler}/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Email</label><input type="text" value={this.state.email} name="email" onChange={this.changeHandler}/></div>
                    <div class="col-md-12"><label class="labels">Phone</label><input type="text" value={this.state.phoneno} name="phoneno" onChange={this.changeHandler}/></div>
                 
   
                    <div class="col-md-12"><label class="labels">Address</label><input type="text" value={this.state.address} name="address" onChange={this.changeHandler}/></div>
                    
                </div>
               
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={this.EditProfile}>Update Profile</button></div>
            </div>
        </div>
     
           
        </div>
    </div>




          
        )
    }
}

export default updateprofile;