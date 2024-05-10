import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { ErrorMessage, Formik, Field } from "formik";
import * as Yup from "yup";
import '../css/RegistrationPage.css';

import Logo_jpg from '../Images/logo.png'
import FN_png from '../Images/FN.png'
import Age_png from '../Images/Age.png'
import EM_png from '../Images/EM.png'
import ps_png from '../Images/ps.png'
import { registerUserAction } from '../Redux/Auth/auth.action';

export default function Register() {

  const initialValues = {
      firstname: '',
      lastname: '',
      age: '',
      email: '',
      password: '',
      confirmPassword: '',
};

const handleSubmit = async (values) => {
  try {
      const response = await fetch('http://localhost:8080/api/users/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
      });

      if (!response.ok) {
          throw new Error('Registration failed');
      }

      // Registration successful
      console.log('Registration successful');
      // Redirect or do something else upon successful registration
  } catch (error) {
      console.error('Registration error:', error.message);
      // Handle error
  }
};

  return (
      <>
        <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        >

        {({ handleSubmit }) => (

            <div className='Rbody'>
              <div className="container d-flex justify-content-center align-items-center">
                
                  <div className="RCard" style={{width: "30rem"}}>
                  <div className="row g-0  container d-flex justify-content-center align-items-center">
                              <div className="col-md-5 mb-3">
                                  <img src={Logo_jpg} className="logo img-fluid rounded-start" alt="Login" />
                              </div>
                    
                    <div className="col-md-8">
                    <div className="card-body">
                    <h1 className="Rcard-title text-center mb-5">Registration</h1>
                    
                        <form onSubmit={handleSubmit}>
                              <div className="Rform-outline">
                                {/*<label htmlFor="firstName" className="form-label">
                                  First Name
                                  </label>*/}
                                <Field type="text" name="firstname" className="control mb-3" placeholder="First Name" required />
                                <img src={FN_png} className="img-fluid rounded-start"  alt="Login" />
                              </div>
                              <div className="Rform-outline2">
                                {/*<label htmlFor="lastName" className="form-label">
                                  Last Name
                                  </label>*/}
                                 <Field type="text" name="lastname" className="control mb-3" placeholder="Last Name" required />
                                <img src={FN_png} className="img-fluid rounded-start"  alt="Login" />
                              </div>

                            
                              <div className="Rform-outline3">
                                {/*<label htmlFor="age" className="form-label">
                                  Age
                                </label>*/}
                                <Field type="number" name="age" className="control mb-3" placeholder="Age" required />
                                <img src={Age_png} className="img-fluid rounded-start"  alt="Login" />
                              </div>
                              {/*<div className="col">
                                <label htmlFor="dob" className="form-label">
                                  Entered date:
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="dob"
                                  onChange={(e) => setDob(e.target.value)}
                                  required
                                />
                              </div>*/}
                            <div className="Rform-outline4">
                                      {/*<label for="email" class="form-label">Email</label>*/}
                                      <Field type="email" name="email" className="control mb-3" placeholder="Email" required />
                                      <img src={EM_png} className="img-fluid rounded-start"  alt="Login" />
                                  </div>
                            <div className="Rform-outline5">
                                      {/*<label for="password" class="form-label">Password</label>*/}
                                      <Field type="password" name="password" className="control mb-3" placeholder="Password" required />
                                      <img src={ps_png} className="img-fluid rounded-start"  alt="Login" />
                                  </div>

                                  <div className="Rform-outline6 mb-2">
                                      {/*<label for="password" class="form-label">Password</label>*/}
                                      <Field type="password" name="confirmPassword" className="control mb-3" placeholder="Confirm Password" required />
                                      <img src={ps_png} className="img-fluid rounded-start"  alt="Login" />
                                  </div>
                                  {/*{error && <div className="alert alert-danger">{error}</div>}*/}
                          

                            {/* ... other form fields ... */}

                            <div className="mb-4 d-grid gap-2 container d-flex justify-content-center align-items-center">
                              <button type="submit" className="btn btn-secondary" style={{width: "8rem"}}>
                                Submit
                              </button>
                            </div>
                            <div className="text-center">
                              <span>
                                Already have an account? <Link to="/">Login</Link>
                              </span>
                            </div>
                          </form>
                    </div>
                    </div>
                    </div>
                  </div>
              </div>
            </div>
        )}
        </Formik> 
      </> 
  );
}
