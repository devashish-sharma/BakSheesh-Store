import React, { useState } from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';
import { signup } from '../auth/helper';

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  const { name, email, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false })
    signup({ name, email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in SignUp"));
  };

  const signUpForm = () => {
    return (

      <div className="container">
        <div className="row card-1">
          <div className="col-6 offset-sm-3 text-left">
            <form >
              <div className="form-group">
                <label className="text-dark">Name</label>
                <input
                  className="form-control"
                  onChange={handleChange("name")}
                  type="text"
                  placeholder="Full name"
                  value={name}
                />
              </div>
              <div className="form-group">
                <label className="text-dark">Email</label>
                <input
                  className="form-control"
                  onChange={handleChange("email")}
                  placeholder="Email"
                  type="email"
                  value={email}
                />
              </div>
              <div className="form-group">
                <label className="text-dark">Password</label>
                <input
                  className="form-control"
                  onChange={handleChange("password")}
                  placeholder="Enter Password"
                  type="password"
                  value={password}
                />
              </div>
              <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      // <div className="row">
        // <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success alert-heading alert-dismissible fade show" 
            role="alert"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin"> Login Here</Link>
          </div>
        // </div>
      // </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title="Signup Page" description="A Page for user to signup!" className="container mt-2 mb-5">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      {/* <p className="text-white text-center"> {JSON.stringify(values)}</p> */}
    </Base>
  );
}


export default Signup;
