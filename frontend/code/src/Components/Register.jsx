import React from "react";


function Register() {
  const handleRegister = (event) => {
    // console.log(event);
    var firstName = document.getElementById("firstName");
    console.log(firstName.value);
    if (firstName.value.trim().length === 0) {
      var fnameError = document.getElementById("fnameError");
      fnameError.innerText = "Invalid value for First Name";
      fnameError.style.display = "block";
    }

    var lastName = document.getElementById("lastName");
    console.log(lastName.value);
    if (lastName.value.trim().length === 0) {
      var lnameError = document.getElementById("lnameError");
      lnameError.innerText = "Invalid value for Last  Name";
      lnameError.style.display = "block";
    }
    
    var mailformat = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    var userEmail = document.getElementById("userEmail").value;
    console.log(mailformat.test(userEmail));
    if(!mailformat.test(userEmail)) {
      var emailError = document.getElementById("emailError");
      emailError.innerText = "Invalid email";
      emailError.style.display = "block";
    }
  }
  return (
    <div className="p-3">
    <form className="row g-3 p-3">
      <h1 className="text-center">Sign Up</h1>
      <div className="col-md-6">
        <label for="inputAddress" className="form-label"></label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder="First Name"
          required
        />
        <p 
        id = "fnameError"
        style={{ display: "none", color: "red"}}>
          error</p>
      </div>
      <div className="col-md-6">
        <label for="inputAddress" className="form-label"></label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          placeholder="Last Name"
          required
        />
        <p 
        id = "lnameError"
        style={{ display: "none", color: "red"}}>
          error</p>
      </div>
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label"></label>
        <input
          type="email"
          className="form-control"
          id="userEmail"
          placeholder="Email"
          required
        />
        <p 
        id = "emailError"
        style={{ display: "none", color: "red"}}>
          error</p>
      </div>
      <div className="col-md-6">
        <label for="inputPassword4" className="form-label"></label>
        <input
          type="password"
          className="form-control"
          id="userPassword"
          placeholder="Password"
          required
        />
        <p 
        id = "passwordError"
        style={{ display: "none", color: "red"}}>
          error</p>
      </div>

      <div className="col-12">
        <button onClick={handleRegister} type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
    </form>
    </div>
  );
}

export default Register;
