import { React, Component } from "react";
import axios from 'axios';
import { Redirect } from "react-router";
class Login extends Component {
  state = {
    email: '',
    password: '',
    loginCheck: false
  }
  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitUser = (e) => {
    e.preventDefault();

    axios.post('http://localhost:100/user/login', this.state)
      .then((response) => {
        this.setState({
          loginCheck: true
        })
        localStorage.setItem('role', response.data.role);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
        alert("logineed....");
      })
      .catch((err) => {
        console.log(err.response);
        alert("not logined....");
      })

  }
  render() {
    //Redirecting
    if (this.state.loginCheck === true) {
      window.location.reload()
      return <Redirect to="/" />
      
    }
    if (localStorage.getItem('token')) {
      return <Redirect to='/' />
    }
    // alert("Registration successfull done")

    return (
      <div className="screenFit">

        <div className="login-body mt-5">
          <div className="logo-div mb-3">
            <img src={process.env.PUBLIC_URL + '/logo.png'} className="img-fluid" />
          </div>
          <form>

            {/* Login PAGE */}

            <h3 className="text-login text-white">LOGIN</h3>

            <div className="row">
              <div className="col-md-12 input-grp d-flex">
                <label className="m-auto"> <i className="fa fa-user  text-white" /></label>
                <input className="form-control form-transparent" type="text" value={this.state.email} onChange={this.inputHandler} placeholder="Enter Email" name="email" />
              </div>

              <div className="col-md-12 mt-3  input-grp d-flex">
                <label className="m-auto"> <i className="fa fa-lock text-white" /></label>
                <input className="form-control form-transparent" value={this.state.password} onChange={this.inputHandler} type="password" placeholder="Enter Password" name="password" />
              </div>

              <button type="submit" onClick={this.submitUser} className="btn btn-dark btn-lg btn-block">login</button>
              <p className="forgot-password text-right text-white mt-4">
                Don't have an account <a href="http://localhost:3000/register">Sign UP?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    )

  }
}
export default Login;