import React from 'react'
const axios = require('axios').default;

export default class ContactPage extends React.Component {

  state = {
    query: '',
    config: {
      headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    }
  }
  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  QueryAddMethod = (e) => {


    e.preventDefault()
    alert(this.state.query)
    axios({
      method: 'post',
      url: 'http://localhost:100/contact',
      data: this.state,
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

      .then(response => {
        console.log(response);
        alert("Query has been added")
      })
      .catch(err => {
        console.log(err.response);
        alert("Error adding Query")
      })


  };

  render() {
    return (
      <div class="container contact">

        <div class="row">          
          <div class="col-md-3a">
            <div class="contact-info">
              <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
              <h2>Contact Us</h2>
              <h4>We would love to hear from you !</h4>
            </div>
          </div>

          <div class="col-md-7">
                <div class="contact-form">
             <div class="form-group">
                <label class="control-label col-sm-2" for="comment"><h3>Comment:</h3></label>
                <div class="col-md-5" >
                  <textarea type="text"  style={{height:"70px",width:"300px", }} class="form-control2" id="comment" placeholder="Enter comment" name="comment"value={this.state.query} name="query" onChange={this.inputHandler} />
                </div>


              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                 <br/> <button class="btn btn-lg" onClick={this.QueryAddMethod}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}