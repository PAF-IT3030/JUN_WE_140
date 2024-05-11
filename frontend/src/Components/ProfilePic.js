/*import React, { useRef, useState } from 'react';
import plusIconP from "../Images/plusIconP.png";
import { Backdrop, CircularProgress, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { uploadToCloudinary } from '../Utils/uploadToCloudinary';
import "../css/ProfilePic.css"

const ProfilePic = ({ handleClose, open }) => {
  const inputRef = useRef(null);
  const [ProfileImage, setProfileImage] = useState("");
  const [selectedProfilePicture, setSelectedProfilePicture] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectProfilePicture = async (event) => {
    setIsLoading(true);
    const profilePictureUrl = await uploadToCloudinary(event.target.files[0], "image");
    setSelectedProfilePicture(profilePictureUrl);
    setIsLoading(false);
  };


  return (
    <div className="PIstoryProfile">
          {selectedProfilePicture && <div>
            <img className="selected-image" src={selectedProfilePicture} alt="" />
          </div>}
          <input type="file" accept="image/*" onChange={handleSelectProfilePicture} style={{ display: "none" }} id="image-input" />
          <label htmlFor="image-input">
            <IconButton color="primary" component="span">
              <img src={plusIconP} alt="User Story" className="PIstoryadd" />
            </IconButton>
          </label>
      <div className="flex space-x-5 items-center mt-5">
        <div>
          
          
        </div>
      </div>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default ProfilePic;*/





/*import React from 'react'
import {useRef, useState } from 'react'
import plusIconP from "../Images/plusIconP.png";
import { Backdrop, CircularProgress, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import { uploadToCloudinary } from '../Utils/uploadToCloudinary';
import "../css/ProfilePic.css"



const ProfilePic = ({handleClose, open}) =>{
    const inputRef = useRef(null);
    const [ProfileImage, setProfileImage] = useState("");
    const [selectedProfilePicture, setSelectedProfilePicture] = useState();
    const [isLoading, setIsLoading] = useState(false);

  
    const handleSelectProfilePicture = async(event)=>{
      setIsLoading(true)
      const profilePictureUrl= await uploadToCloudinary(event.target.files
        [0],"image")
        setSelectedProfilePicture(profilePictureUrl);
        setIsLoading(false)
        formik.setFieldValue("image", profilePictureUrl)
    };


    const formik = useFormik({
      initialValues: {
        profilePicture: ""
      },

      onSubmit: (values)=>{
        console.log("formik values ", values)
      }
    });

  return (
    <div className="PIstoryProfile">
          {selectedProfilePicture && <div>
            <img className="selected-image" src={selectedProfilePicture} alt="" />
          </div>}
          <input type="file" accept="image/*" onChange={handleSelectProfilePicture} style={{ display: "none" }} id="image-input" />
          <label htmlFor="image-input">
            <IconButton color="primary" component="span">
              <img src={plusIconP} alt="User Story" className="PIstoryadd" />
            </IconButton>
          </label>
      <div className="flex space-x-5 items-center mt-5">
        <div>
          
          
        </div>
      </div>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default ProfilePic;*/


import React from 'react';
import { useRef, useState } from 'react';
import plusIconP from "../Images/plusIconP.png";
import { Backdrop, CircularProgress, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import * as yup from 'yup'; // Import yup for validation
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import { uploadToCloudinary } from '../Utils/uploadToCloudinary';
import "../css/ProfilePic.css";

const ProfilePic = ({ handleClose, open }) => {
  const inputRef = useRef(null);
  const [profileImage, setProfileImage] = useState("");
  const [selectedProfilePicture, setSelectedProfilePicture] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const userId = 19; // Assuming user ID is readily available

  const handleSelectProfilePicture = async (event) => {
    setIsLoading(true);
    const profilePictureUrl = await uploadToCloudinary(event.target.files[0], "image");
    setSelectedProfilePicture(profilePictureUrl);


    try {
      const response = await fetch(`http://localhost:8080/api/users/${userId}`, {
      method: 'PUT', // Use PATCH for partial updates
        headers: {
          'Content-Type': 'application/json',
          // Consider adding authorization headers if required by your API
        },
        body: JSON.stringify({ profilePicture: profilePictureUrl }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update profile picture: ${response.statusText}`);
      }

      console.log('Profile picture updated successfully!');
      setProfileImage(profilePictureUrl); // Update local state
    } catch (error) {
      console.error('Error updating profile picture:', error);
      // Handle errors appropriately, e.g., display user-friendly error messages
    } finally {
      setIsLoading(false);
    }
  };

  const validationSchema = yup.object({
    profilePicture: yup.string().url().required('Profile picture is required'),
  });

  const formik = useFormik({
    initialValues: {
      profilePicture: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('formik values:', values); // For debugging or logging
    },
  });

  return (
    <div className="PIstoryProfile">
      {selectedProfilePicture && (
        <div>
          <img className="selected-image" src={selectedProfilePicture} alt="" />
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleSelectProfilePicture}
        style={{ display: 'none' }}
        id="image-input"
      />
      <label htmlFor="image-input">
        <IconButton color="primary" component="span">
          <img src={plusIconP} alt="User Story" className="PIstoryadd" />
        </IconButton>
      </label>
      <div className="flex space-x-5 items-center mt-5">
        <div>
          {/* ... other form fields or content */}
        </div>
      </div>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default ProfilePic;


