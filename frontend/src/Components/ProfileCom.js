import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import '../css/ProfileCom.css'
import { Users } from '../Utils/Data/Data'
import Storycard from './StoryCard';


import StoryProfile8 from "../Images/StoryProfile8.png";
import plusIconB from "../Images/plusIconB.png";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Tab, Tabs } from '@mui/material';
import ProfilePic from './ProfilePic';
import age from '../Images/Age2.png'
import weight from '../Images/Weight.png'
import height from '../Images/Height.png'
import email from '../Images/email.png'
import phone from '../Images/phone.png'
import Post from './Post';
import ProfileModal from './ProfileModal';
import { ControlPointSharp, Edit } from '@mui/icons-material';



function ProfileCom() {
  const inputRef = useRef(null);
  const [BackgroundImage, setBackgroundImage] = useState("")
  const [openPopup, setOpenPopup] = useState(false); // State for managing modal visibility
  const [users, setUsers] = useState(null);
  const [value, setValue] = React.useState('posts');

  const tabs=[
    {value:"posts", name:"Posts"},
    {value:"Reels", name:"Reels"},
    {value:"meal plan", name:"Meal Plan"},
    {value:"saved", name:"Saved"},
  ]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // Fetch user data from API
    axios.get('http://localhost:8080/api/users/19')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []); 
  
  const handleBackgroundImageClick = () => {
    inputRef.current.click();
  };

  const handleBackgroundImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setBackgroundImage(event.target.files[0])
  };

  return (
    <>
    <Box className="box" flex={4} p={{ xs: 0, md: 2 }}>
    <div className='BIstories'>
      <div className="BIstoryCard">
      <div className='BIoverlay'></div>
      <div onClick={handleBackgroundImageClick}>
      <img src={plusIconB} alt="User Story" className="BIstoryadd" />
      {BackgroundImage ? <img src={URL.createObjectURL(BackgroundImage)} alt="" className='BISetImage'/> : <img src={BackgroundImage} alt=""/>}
      <input className='input' type='file' ref={inputRef} onChange={handleBackgroundImageChange}/>
      </div>
      
      <ProfilePic className='ProfilePic'/>
      {/*<img src={StoryProfile8} alt="User Story" className="PIstoryProfile" />*/}
      {/*<img src={story8} className="PIBackground img-fluid rounded-start" alt="Login" />*/}
      </div>
      
      
    </div>
    <Box className="Flex">
    <div className="IPCard">
        <div className="">
          <h1 className="IPcard-title">{users ? `${users.firstname} ${users.lastname}` : 'Loading...'}<EditIcon className='editIcon' onClick={() => setOpenPopup(true) } /></h1>
        </div>
        <div className='followCount'>
          <span>41 posts</span>
          <span>35 followers</span>
          <span>12 followings</span>
        </div>
        
        <form onSubmit={{/*handleSubmit*/}}>
        <hr className='hr'/>
                <div className="IPform-outline">
                <img src={age} className="age"  alt="" />
                  <label htmlFor="firstName" className="label">
                    Age : <span className='span'>{users ? users.age : 'Loading...'}</span>
                     </label>
                </div>
                <div className="IPform-outline">
                <img src={weight} className="weight"  alt="" />
                  <label htmlFor="firstName" className="label">
                    Weight : <span className='span'>{users ? users.weight : 'Loading...'}</span>
                     </label>
                </div>
                <div className="IPform-outline">
                <img src={height} className="height"  alt="" />
                  <label htmlFor="firstName" className="label">
                    Height : <span className='span'>{users ? users.height : 'Loading...'}</span>
                     </label>
                </div>
                <div className="IPform-outline">
                <img src={email} className="email"  alt="" />
                  <label htmlFor="firstName" className="label">
                    Email : <span className='span'>{users ? users.email : 'Loading...'}</span>
                     </label>
                </div>
                <div className="IPform-outline">
                <img src={phone} className="phone"  alt="" />
                  <label htmlFor="firstName" className="label">
                    Phone No : <span className='span'>{users ? users.phoneNo : 'Loading...'}</span>
                     </label>
                </div>
        </form>
    </div>
    </Box>
    <section>
    <Box className="Tabs" sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        {tabs.map((item) =><Tab value={item.value} label={item.name} wrapped/>)}
      </Tabs>
    </Box>
    </section>
    {/* Conditionally render the ProfileModal */}
    {openPopup && (
      <section>
        <ProfileModal  
          openPopup= {openPopup}
          setOpenPopup = {setOpenPopup}>
        </ProfileModal>
      </section>
    )}
    </Box>
    </>
  )
}

export default ProfileCom;
