import React from 'react';
import Navigation from './Navigation';
import logo from '../images/logos.png';
import '../styles.css';


const style = (
    { backgroundColor: '#ff4500' }
)

const Base = ({ title = "MY Title",
    description = "My Description",
    classname = "text-white",
    children
}) => (
        <div>

            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>


            <Navigation />


            {/* <div classeName="container mt-auto text-white bg-light">
                <h3 classNameName="display-5">{title}</h3>
            </div> */}

            <div className={classname}> {children} </div>

            <footer className="footer footcolor p-2 card-5">
                <div className="container text-white p-3">
                    <h1><span className="tit">BAK </span><span className="badge" style={style}>SHEESH</span></h1>
                </div>
                <div className="container-fluid ">

                    {/* <!-- Primary Outline circle button with ripple effect --> */}
                    Follow Us on Social Media : <br></br><button className="btn pmd-btn-fab pmd-ripple-effect fb mr-2" type="button"><i className="fab fa-facebook-square fb"></i></button>

                    {/* <!-- Secondary Outline circle button with ripple effect --> */}
                    <button type="button" className="btn pmd-btn-fab pmd-ripple-effect tw mr-2"><i className="fab fa-twitter-square"></i></button>

                    {/* <!-- Success Outline circle button with ripple effect --> */}
                    <button className="btn pmd-btn-fab pmd-ripple-effect whats mr-2" type="button"><i className="fab fa-whatsapp"></i></button>

                    {/* <!-- Danger Outline circle button with ripple effect --> */}
                    <button type="button" className="btn pmd-btn-fab insta pmd-ripple-effect mr-2"><i className="fab fa-instagram-square"></i></button>

                    {/* <!-- Warning Outline circle button with ripple effect --> */}
                    <button type="button" className="btn pmd-btn-fab tube pmd-ripple-effect mr-2"><i className="fab fa-youtube"></i></button>

                    {/* <!-- Information Outline circle button with ripple effect --> */}
                    <button className="btn pmd-btn-fab pmd-ripple-effect gp mr-2" type="button"><i className="fab fa-google-plus-square"></i></button>

                    {/* <!-- Light Outline circle button with ripple effect --> */}
                    <button className="btn pmd-btn-fab pmd-ripple-effect git mr-2" type="button"><i className="fab fa-github-square"></i></button>

                    {/* <!-- Dark Outline circle button with ripple effect --> */}
                    <button type="button" className="btn lin pmd-btn-fab pmd-ripple-effect mr-2"><i className="fab fa-linkedin"></i></button>
                    <br></br>
                    <span className="text-white">
                        An Amazing <span className="text-danger">BAKSHEESH</span> Store </span>
                    <i className="fa fa-copyright"></i> Copyright 2020
                </div>


            </footer>

            <div className="fabs-wrapper">
                <input id="fabsCheckbox" type="checkbox" className="fabs-checkbox" />
                <label className="fabs" for="fabsCheckbox">
                    <span className="fabs-dots fabs-dots-1"></span>
                    <span className="fabs-dots fabs-dots-2"></span>
                    <span className="fabs-dots fabs-dots-3"></span>
                </label>
                <div className="fabs-wheel text-white">
                    <a href="/" className="fabs-action fabs-action-1">
                        <i className="fas fa-question"></i>
                    </a>
                    <a href="/" className="fabs-action fabs-action-2">
                        <i className="fas fa-phone-alt"></i>
                    </a>
                    <a href="/" className="fabs-action fabs-action-3">
                        <i className="fa fa-dyalog"></i>
                    </a>
                    <a href="/" className="fabs-action fabs-action-4">
                        <i className="fas fa-info"></i>
                    </a>
                </div>
            </div>

        </div>
    )

export default Base;
