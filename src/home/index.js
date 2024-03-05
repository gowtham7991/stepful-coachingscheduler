import React from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import logo from "../assets/stepful.png"
import jobsImage from "../assets/jobs.png"
import "./index.css"

const App = () => {
    let navigate = useNavigate();
    const browseJobsHandler = () => {
        navigate('/jobs/')
    }

    const hireTalentHandler = () => {
        navigate('/register/coach')
    }

    const signUpHandler = () => {
        navigate('/register/student')
    }

    return (
        <div >
            <div className="d-flex justify-content-between wd-main-navbar bg-light shadow p-4">
                <div>
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="200" height="50" className="d-inline-block align-text-top"/>
                    </a>
                </div>
                <div className="d-flex">
                    <div className="d-flex align-items-center wd-login-link"><Link to="/login">Log in</Link></div>
                    <button className="btn btn-primary rounded-pill mx-5" onClick={signUpHandler}>Sign up</button>
                </div>
            </div>
            <div className = "wd-main-content mt-5 mx-auto container">
                <div className = "row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="home-text">
                            <h1 className="heading1">
                                Finding Healthcare jobs has never been easier.
                            </h1>
                            <p>
                            Here at Stepful, we offer a 4-month online Medical Assistant program that prepares you to take the NHA CCMA exam. We even offer career coaching & guaranteed clinical hours. Get a job or your tuition is on us.
                            </p>
                            <div className="d-flex">
                                <button className="btn btn-primary rounded-pill" onClick={browseJobsHandler}>Browse Jobs</button>
                                <button className="btn btn-outline-secondary rounded-pill border mx-3" onClick={hireTalentHandler}>Hire Talent</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img src={jobsImage} style={{height:"100%", width:"100%"}}></img>
                    </div>
                </div>
            </div>
            <div className="p-2" style={{height: "300px", textAlign: "center", color: "white", backgroundColor: "#003C3C"}}>
                <h3 className="text-center">Featured Companies</h3>
                <div className="d-flex justify-content-between p-2">
                    <div className="wd-logo p-2"><span style={{fontSize: "30px"}}></span><i className="fa fa-twitter-square" aria-hidden="true" style={{fontSize:"60px"}}></i></div>
                    <div className="wd-logo p-2"><span style={{fontSize: "30px"}}></span><i className="fa fa-facebook-official" aria-hidden="true" style={{fontSize:"60px"}}></i></div>
                    <div className="wd-logo p-2"><span style={{fontSize: "30px"}}></span><i className="fa fa-amazon" aria-hidden="true" style={{fontSize:"60px"}}></i></div>
                    <div className="wd-logo p-2"><span style={{fontSize: "30px"}}></span><i className="fa fa-windows" aria-hidden="true" style={{fontSize:"60px"}}></i></div>
                    <div className="wd-logo p-2"><span style={{fontSize: "30px"}}></span><i className="fa fa-linkedin-square" aria-hidden="true" style={{fontSize:"60px"}}></i></div>
                </div>
            </div>
            <div className="p-5">
                <p className="h1 text-center">Today's top comapnies are hiring.</p>
                <p className="text-muted text-center h6">We partner with top US companies from early-stage startups to Fortune 500 companies to bring the best jobs in tech and finance to you.</p>
                <p className="h6 text-center"><Link to="/app/jobs">Search Jobs</Link></p>
            </div>
            <div style={{backgroundColor: "#EBF4F6", height:"150px"}} className="d-flex justify-content-between p-5">
                <div>
                    <p className="h5">500K</p>
                    <p className="h5">messages from recruiters</p>
                </div>
                <div>
                    <p className="h5">400K</p>
                    <p className="h5">jobs opportunities</p>
                </div>
                <div>
                    <p className="h5">17K</p>
                    <p className="h5">offers made</p>
                </div>
                <div>
                    <p className="h5">4</p>
                    <p className="h5">weeks time-to-hire</p>
                </div>
            </div>
        </div>
    );
}

export default App

