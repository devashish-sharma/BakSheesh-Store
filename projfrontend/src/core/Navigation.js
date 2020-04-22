import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { signout, isAuthenticated } from '../auth/helper';
import '../styles.css';
import corona from '../images/dothefive.gif';

const currenttab = (history, path) => {
    if (history.location.pathname === path) {
        return {
            color: "#ff4500", borderTop: "1px solid #ff4500", borderMargin: '2px', fontFamily: 'Allerta Stencil'
        }
    } else {
        return { color: "#ffffff" }
    }
}

const style = (
    { backgroundColor: '#ff4500', fontFamily: 'Philosopher' }
)

const navigation = ({ history }) =>
    (

        <div>

            <div className="container-fluid">
                <nav className="navbar-dark">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-9 mt-1">
                                <form className="form-inline d-flex active-cyan">
                                    <input className="form-control form-control-sm " type="text" placeholder="Search Here"
                                        aria-label="Search" />
                                    <button type="button" href="/" className="btn btn-sm btn-outline-light mt-auto "><i className="fa fa-search active-cyan" aria-hidden="false"></i>
                                    </button>
                                </form>
                            </div>

                            <div className="col-3 mt-1 text-right">
                                <a href="https://www.google.com">
                                    <button type="button" className="btn btn-sm btn-outline-warning" data-toggle="tooltip" data-placement="left" animation="true" data-html="true" title="<b>Do Five Things!!!</b> ">CORONA UPDATE </button>
                                </a>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
            <div className="line mt-2 "></div>

            <nav className="navbar navbar-expand-lg fixed-top d-flex" data-spy="affix">

                <Link
                    // style={currenttab(history, "/")}
                    className="navbar-brand text-white"
                    to="/"
                >
                    <h1><span className="tit">BAK</span><span className="badge" style={style}>SHEESH</span></h1>
                </Link><i className="fa fa-gift-card text-white fa-3x"></i>
                {/* <i class="fa fa-gifts fa-2x text-white" aria-hidden="true"></i> */}
                {/* <i class="fa fa-cog fa-spin fa-2x fa-fw" style={btnbg}></i> */}

                <button className="navbar-toggler btn btn-outline-danger btn-sm" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <i className="fa fa-align-justify text-light" aria-hidden="true"></i></button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-auto text-center" >
                        <li className="nav-item active ">
                            <Link
                                style={currenttab(history, "/")}
                                className="nav-link"
                                to="/"
                            ><i className="fa fa-home fa-fw" aria-hidden="true"></i> Home
                         </Link>
                        </li>

                        <li className="nav-item dropdown" >
                            <a className="nav-link dropdown-toggle"
                                style={currenttab(history, "/user/dashboard")}
                                href="/"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                            >
                                <i className="fab fa-bitbucket fa-fw" aria-hidden="true"></i> Products
                                </a>
                            <div className="dropdown pmd-dropdown">
                                <div className="dropdown-menu bg-dark">
                                    <h5 className="dropdown-header">Products</h5>
                                    <div className="dropdown-divider"></div>
                                    <a href="/" className="dropdown-item text-warning">My Orders</a>
                                    <a href="/" className="dropdown-item text-warning">My Profile</a>
                                    <a href="/" className="dropdown-item text-warning">Signout</a>
                                </div>
                            </div>
                        </li>

                        {isAuthenticated() && isAuthenticated().user.role === 0 && (
                            <li className="nav-item">
                                <Link
                                    style={currenttab(history, "/user/dashboard")}
                                    className="nav-link"
                                    to="/user/dashboard"
                                >
                                    <i className="fa fa-tachometer-alt fa-fw" aria-hidden="true"></i> Dashboard
                    </Link>
                            </li>
                        )}
                        {isAuthenticated() && isAuthenticated().user.role === 1 && (
                            <li className="nav-item">
                                <Link
                                    style={currenttab(history, "/admin/dashboard")}
                                    className="nav-link"
                                    to="/admin/dashboard"
                                >
                                    <i className="fa fa-tachometer-alt fa-fw" aria-hidden="true"></i> Admin Dashboard
                    </Link>
                            </li>
                        )}
                        {!isAuthenticated() && (
                            <Fragment>
                                <li className="nav-item">
                                    <Link
                                        style={currenttab(history, "/signup")}
                                        className="nav-link"
                                        to="/signup"
                                    >
                                        <i className="fa fa-user-plus fa-fw" aria-hidden="true"></i> Signup
                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        style={currenttab(history, "/signin")}
                                        className="nav-link"
                                        to="/signin"
                                    >
                                        <i className="fa fa-user fa-fw" aria-hidden="true"></i> Signin
                    </Link>
                                </li>
                            </Fragment>
                        )}
                        {/* {isAuthenticated() && ( */}
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={currenttab(history, "")}
                                to="/">
                                <i className="fa fa-address-book fa-fw" aria-hidden="true"></i> Reach Us
                            </Link>
                        </li>
                        {/* )} */}

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={currenttab(history, "")}
                                to="/">
                                <i className="fa fa-info-circle fa-fw" aria-hidden="true"></i> About Us
                            </Link>
                        </li>

                        {isAuthenticated() && (
                            <li className="nav-item">
                                <div className="dropdown dmenu">
                                    <a className="nav-link dropdown-toggle " style={currenttab(history, "/user/dashboard")} href="/" id="navbarDropdown" role="button" data-toggle="dropdown">
                                        <i className="fa fa-user fa-fw" aria-hidden="true"></i> Profile
                                </a>
                                    <div className="dropdown pmd-dropdown">
                                        <div className="dropdown-menu px-3 py-3 bg-dark">
                                            <h5 className="dropdown-header">User Settings</h5>
                                            <div className="dropdown-divider"></div>
                                            <a href="/" className="dropdown-item text-warning">My Orders</a>
                                            <a href="/" className="dropdown-item text-warning">My Profile</a>
                                            <Link
                                                className="dropdown-item text-warning"
                                                to=""
                                                onClick={() => {
                                                    signout(() => {
                                                        history.push("/")
                                                    });
                                                }}>
                                                <i className="fa fa-sign-out-alt fa-fw" aria-hidden="true"></i> Signout
                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        )}
                        {/* </ul>

                    <ul className="navbar-nav text-center"> */}
                        <li className="nav-item">
                            <Link
                                style={currenttab(history, "/cart")}
                                navbg="true"
                                className="nav-link"
                                to="/cart"
                            >
                                <i className="fa fa-cart-plus fa-1x fa-fw" aria-hidden="true"></i> Cart
                    </Link>
                        </li>
                    </ul>
                </div>
            </nav>


        </div >
    );

export default withRouter(navigation);
