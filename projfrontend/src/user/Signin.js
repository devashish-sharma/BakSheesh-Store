import React, { useState } from 'react';
import Base from '../core/Base';
import { Link, Redirect } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from '../auth/helper';
import '../styles.css';

const Signin = () => {
  const [values, setValues] = useState({
    email: "dev@gmail.com",
    password: "dev12345",
    error: "",
    loading: false,
    didRedirect: false
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true })
    signin({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
              email: "",
              password: "",
              error: "",
              loading: true

            });
          });
        }
      })
      .catch(console.log("Error in Signin"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />
      } else {
        return <Redirect to="/user/dashboard" />
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  }

  const signInForm = () => {
    return (
      <div className="container">
        <div className="row card-1">
          <div className="col-6 offset-sm-3">

            <form >
              <div className="form-group">
                <label className="text-dark">Email</label>
                <input
                  onChange={handleChange("email")}
                  className="form-control"
                  type="email"
                  autoFocus
                  required
                  value={email}
                />
              </div>
              <div className="form-group">
                <label className="text-dark">Password</label>
                <input
                  onChange={handleChange("password")}
                  className="form-control"
                  type="password"
                  autoFocus
                  required
                  value={password}
                />
              </div>
              <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title="Signin Page" description="A Page for user to signin!">
      <div className="container-fluid mt-2">

        {loadingMessage()}
        {errorMessage()}
        {signInForm()}
        {performRedirect()}
      </div>
      {/* <p className="text-white text-center"> {JSON.stringify(values)}</p> */}
    </Base>
  );
}

export default Signin;
