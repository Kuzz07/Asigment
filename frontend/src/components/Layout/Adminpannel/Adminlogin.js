import { Component } from "react";


class AdminLogin extends Component {
  render() {
    return (
      <div className="screenFit">

        <div className="login-body mt-5">
          <div className="logo-div mb-3">
            <img src={process.env.PUBLIC_URL + '/logo.png'} className="img-fluid" />
          </div>
          <form>

            {/* Login PAGE  FOR ADMIN*/}

            <h3 className="text-center text-white">LOGIN</h3>

            <div className="row">
              <div className="col-md-12 input-grp d-flex">
                <label className="m-auto"> <i className="fa fa-user  text-white" /></label>
                <input className="form-control form-transparent" type="email" placeholder="Enter Email" required />
              </div>

              <div className="col-md-12 mt-3  input-grp d-flex">
                <label className="m-auto"> <i className="fa fa-lock text-white" /></label>
                <input className="form-control form-transparent" type="password" placeholder="Enter Password" required />
              </div>

              <button className="btn btn-danger mt-4 w-100 btn-lg">Login</button>

            </div>
          </form>
        </div>
      </div>
    )

  }
}
export default AdminLogin;