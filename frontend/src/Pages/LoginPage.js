import React from 'react'
import axios from "axios";
import '../css/Login.css';
//import Styles from '../styles/Register.module.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Formik, Field } from "formik";
import * as Yup from "yup";

import Logo_jpg from '../Images/logo.png'
import user_png from '../Images/user.png'
import ps_png from '../Images/ps.png'
import fb_png from '../Images/fb.png'
import google_png from '../Images/google.png'
import { Link } from 'react-router-dom';
import { loginUserAction } from '../Redux/Auth/auth.action';
 

export default function LoginPage() {
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    const initialValues = {
        email: "",
        password: "",
    };

    const handleSubmit = async (values, { setSubmitting }) => {
       dispatch(loginUserAction({data: values}));
       
    };
 
 
    return (
        
        <div className='body'>
            <div className="container d-flex justify-content-center align-items-center">
            
                <div className="Card" style={{width: "30rem"}}>
                    <div className="row g-0 container d-flex justify-content-center align-items-center">
                    <div className="col-md-5 mb-3">
                            <img src={Logo_jpg} className="logo img-fluid rounded-start" alt="Login" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title text-center mb-4"> Login </h1>
                                
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={Yup.object({
                                        email: Yup.string()
                                            .email('Invalid email address')
                                            .required('Required'),
                                        password: Yup.string()
                                            .required('Required'),
                                    })}
                                    onSubmit={handleSubmit}
                                >
                                
                                {({ handleSubmit, isSubmitting }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-outline mb-3">
                                        {/*<label htmlFor="email" className="form-label">Username</label>*/}
                                        <Field type="email" name="email" className="control" placeholder="Username" required/>
                                        <img src={user_png} className="img-fluid rounded-start"  alt="Login" />
                                    </div>
                                    <div className="form-outline2 mb-4">
                                        {/*<label htmlFor="password" className="form-label">Password</label>*/}
                                        <Field type="password" name="password" className="control" placeholder="Password" required/>
                                        <img src={ps_png} className="img-fluid rounded-start"  alt="Login" />
                                    </div>
                                    <div className="mb-4 d-grid gap-2 container d-flex justify-content-center align-items-center">
                                        <button type="submit" className="btn btn-secondary" style={{width: "8rem"}} disabled={isSubmitting}>Login</button>
                                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                                        {/*<a href="/register" className="btn btn-primary">Register</a>*/}
                                    </div>
    
                                    <div className="text-center">
                                        <span className="text-center fw-bold mx-3 mb-0">
                                            Don't have an account? <Link to="/Register">Register</Link>
                                        </span>
                                    </div>
    
                                    <div className="divider d-flex align-items-center my-1">
                                        <p className="text-center fw-bold mx-3 mb-0">or continue with</p>
                                    </div>
    
                                    <div className="mx-2 my-1 container d-flex justify-content-center align-items-center">
                                    <a className="nav-link" href="https://facebook.com/?_rdc=1&_rdr"><img src={fb_png} className="img-fluid rounded-start" style={{width: "5rem"}} alt="Login" /></a>
                                    <a className="nav-link" href="https://accounts.google.com/v3/signin/identifier?ifkv=ARZ0qKIB7iY3gBASX5q1QnqJtovIixK_BmGD8oziA-47TUGuhb9R45HnmHciTqDzvDWIf3I5MzU0&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-2113908948%3A1711027852069384&theme=mn&ddm=0"><img src={google_png} className="img-fluid rounded-start" style={{width: "6.5rem"}} alt="Login" /></a>
                                    </div>
                                
                                    {/* Forgot password link */}
                                    <div className="mb-2 text-center">
                                        <span>Forgot Password? <a href='/fogotPassword'>Reset</a></span>
                                    </div>
                                
                                </form>
                                )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 
}