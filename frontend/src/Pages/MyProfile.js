import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import '../css/MyProfile.css';
import Avatar_png from '../images/Avatar.png'

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'profile', // Initial active tab
    };
  }

  // Function to handle tab click
  handleTabClick = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    return (
      <div className="container d-flex justify-content-center ">
        <div className=" Card col-md-6" style={{width: "80rem",height: "50rem"}}>
        <div className="row">
          <div className="col-md-3">
            {/* Vertical Tabs */}
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a
                className={`nav-link ${this.state.activeTab === 'profile' ? 'active' : ''}`}
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected={this.state.activeTab === 'profile'}
                onClick={() => this.handleTabClick('profile')}
              >
                Profile
              </a>
              <a
                className={`nav-link ${this.state.activeTab === 'settings' ? 'active' : ''}`}
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected={this.state.activeTab === 'settings'}
                onClick={() => this.handleTabClick('settings')}
              >
                Settings
              </a>
              <a
                className={`nav-link ${this.state.activeTab === 'activity' ? 'active' : ''}`}
                id="v-pills-activity-tab"
                data-toggle="pill"
                href="#v-pills-activity"
                role="tab"
                aria-controls="v-pills-activity"
                aria-selected={this.state.activeTab === 'activity'}
                onClick={() => this.handleTabClick('activity')}
              >
                Activity
              </a>
            </div>
          </div>
          <div className="col-md-9">
            {/* Tab Content */}
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className={`tab-pane fade ${this.state.activeTab === 'profile' ? 'show active' : ''}`}
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <div className="col-md-7 mb-3 container d-flex justify-content-center align-items-center">
                    <img src={Avatar_png} className="img-fluid rounded-start" style={{width: "10rem"}} alt="Login" />
                </div>

                <div className="col-md-7 mb-3 container d-flex justify-content-center align-items-center">
                <h2>User Profile</h2><br/>
                </div>

                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5">
                        <label htmlFor="firstNameInput">First Name</label>
                        <input type="text" className="form-control col-md-10" /*value={firstname} id="firstNameInput" onChange={e => setFirstName(e.target.value)}*/ placeholder="First Name" /><br/>
                    </div>
 
                    <div className="col-md-5">
                        <label htmlFor="LastNameInput">Last Name</label>
                        <input type="text" className="form-control col-md-10" /*value={lastname} id="LastNameInput" onChange={e => setLastName(e.target.value)}*/ placeholder="Last Name" /><br/>
                    </div>
                     
                    <div className="col-md-5">
                        <label htmlFor="LastNameInput">Email</label>
                        <input type="text" className="form-control col-md-10" /*value={lastname} id="LastNameInput" onChange={e => setLastName(e.target.value)}*/ placeholder="Email" /><br/>
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="LastNameInput">Age</label>
                        <input type="text" className="form-control col-md-10" /*value={lastname} id="LastNameInput" onChange={e => setLastName(e.target.value)}*/ placeholder="Age" /><br/>
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="LastNameInput">Gender</label>
                        <input type="text" className="form-control col-md-10" /*value={lastname} id="LastNameInput" onChange={e => setLastName(e.target.value)}*/ placeholder="Gender" /><br/>
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="LastNameInput">Fitness Goal</label>
                        <input type="text" className="form-control col-md-10" /*value={lastname} id="LastNameInput" onChange={e => setLastName(e.target.value)}*/ placeholder="Build Muscle" /><br/>
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="LastNameInput">Weight</label>
                        <input type="text" className="form-control col-md-10" /*value={lastname} id="LastNameInput" onChange={e => setLastName(e.target.value)}*/ placeholder="Weight" /><br/>
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="LastNameInput">Height</label>
                        <input type="text" className="form-control col-md-10" /*value={lastname} id="LastNameInput" onChange={e => setLastName(e.target.value)}*/ placeholder="Height" /><br/>
                    </div>
                </div>
                <div className="col-md-7 mb-3 container d-flex justify-content-center align-items-center">
                    <div className="col-md-7">
                        <button className="btn btn-primary" /*onClick={updateProfileDetails}*/>Update</button>
                    </div>
 
                    <div className="col-md-3">
                        <button className="btn btn-danger" /*onClick={deleteProfileDetails}*/>Delete</button>
                    </div>
                </div>
                
              </div>
              <div
                className={`tab-pane fade ${this.state.activeTab === 'settings' ? 'show active' : ''}`}
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >

                <h3 className="col-md-7 mb-3 container d-flex justify-content-center align-items-center">Change Password</h3><br/>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-7">
                        <label htmlFor="firstNameInput">Enter New Password</label>
                        <input type="text" className="form-control col-md-10" /*value={firstname} id="firstNameInput" onChange={e => setFirstName(e.target.value)}*/ placeholder="Enter New Password" /><br/>
                    </div>
 
                    <div className="col-md-7">
                        <label htmlFor="LastNameInput">Confirm New Password</label>
                        <input type="text" className="form-control col-md-10" /*value={lastname} id="LastNameInput" onChange={e => setLastName(e.target.value)}*/ placeholder="Confirm New Password" /><br/>
                    </div>
                </div>  
                <div className="col-md-7 mb-3 container d-flex justify-content-center align-items-center">
                <button type="submit" class="btn btn-primary" /*onClick={resetSubmit}*/>Submit</button>
                </div><br/>
    
                {/*<div >
                <a href="/profile" class="btn btn-danger" /*onClick={cancel}>Cancel</a>
                </div> */} 
               <div className="col-md-7 mb-3 container d-flex justify-content-center align-items-center">
                <h3>Notification Preferences</h3><br/>
                </div>
                
                
                <label className="col-md-7 mb-3 container d-flex justify-content-center align-items-center">
                <p>Turn Notifications On/Off</p>
                    <input type="checkbox"/>
                </label>
                
                {/* Add more settings options as needed */}
              </div>
              <div
                className={`tab-pane fade ${this.state.activeTab === 'activity' ? 'show active' : ''}`}
                id="v-pills-activity"
                role="tabpanel"
                aria-labelledby="v-pills-activity-tab"
              >
                <h2>Recent Activity</h2>
                {/* Add user activity details */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default MyProfile;
