import React from "react";

function Register() {
  return (
    <div className="p-3">
    <form className="row g-3 p-3">
      <h1 className="text-center">Sign Up</h1>
      <div className="col-md-6">
        <label for="inputAddress" className="form-label"></label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="First Name"
          required
        />
      </div>
      <div className="col-md-6">
        <label for="inputAddress" className="form-label"></label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Last Name"
          required
        />
      </div>
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label"></label>
        <input
          type="email"
          className="form-control"
          id="inputEmail4"
          placeholder="Email"
          required
        />
      </div>
      <div className="col-md-6">
        <label for="inputPassword4" className="form-label"></label>
        <input
          type="password"
          className="form-control"
          id="inputPassword4"
          placeholder="Password"
          required
        />
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
    </form>
    </div>
  );
}

export default Register;
