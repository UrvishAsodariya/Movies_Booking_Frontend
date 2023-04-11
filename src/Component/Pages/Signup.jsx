import React from 'react'
import PageLoader from '../PageLoader'
import axios from 'axios';
import { useState } from 'react';

const Signup = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');

    const btnhandle = (e) => {
        e.preventDefault()
        axios.post('http://localhost:2000/signup', {
           email:email,
           password:password,
           cpassword:cpassword
        })
            .then(function (response) {
                // handle success
                console.log(response);
                // window.location.href = "/Login"
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <>
            {/* <PageLoader /> */}
            {/* ==========Sign-In-Section========== */}
            <section className="account-section bg_img" data-background="assets/images/account/account-bg.jpg">
                <div className="container">
                    <div className="padding-top padding-bottom">
                        <div className="account-area">
                            <div className="section-header-3">
                                <span className="cate">welcome</span>
                                <h2 className="title">to Boleto </h2>
                            </div>
                            <form className="account-form" onSubmit={btnhandle}>
                                <div className="form-group">
                                    <label htmlFor="email1">Email<span>*</span></label>
                                    <input type="text" placeholder="Enter Your Email" id="email" required onChange={(e) => { setemail(e.target.value) }}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass1">Password<span>*</span></label>
                                    <input type="password" placeholder="Password" id="pass1" required onChange={(e) => { setpassword(e.target.value) }}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass2">Confirm Password<span>*</span></label>
                                    <input type="password" placeholder="Conform Password" id="pass2" required onChange={(e) => { setcpassword(e.target.value) }}/>
                                </div>
                                <div className="form-group checkgroup">
                                    <input type="checkbox" id="bal" required defaultChecked />
                                    <label htmlFor="bal">I agree to the <a href="#0">Terms, Privacy Policy</a> and <a href="#0">Fees</a></label>
                                </div>
                                <div className="form-group text-center">
                                    <input type="submit" defaultValue="Sign Up" />
                                </div>
                            </form>
                            <div className="option">
                                Already have an account? <a href="sign-in.html">Login</a>
                            </div>
                            <div className="or"><span>Or</span></div>
                            <ul className="social-icons">
                                <li>
                                    <a href="#0">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" className="active">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <i className="fab fa-google" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==========Sign-In-Section========== */}

        </>
    )
}

export default Signup
