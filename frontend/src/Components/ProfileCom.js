import React, {useRef, useState } from 'react'
import '../css/ProfileCom.css'
import { Users } from '../Utils/Data/Data'
import Storycard from './StoryCard';


import StoryProfile8 from "../Images/StoryProfile8.png";
import plusIconB from "../Images/plusIconB.png";
import story8 from "../Images/story8.jpg";
import { Box } from '@mui/material';
import ProfilePic from './ProfilePic';
import age from '../Images/Age3.png'
import weight from '../Images/Weight3.png'
import height from '../Images/Height7.png'
import email from '../Images/email1.png'
import phone from '../Images/phone1.png'
import Post from './Post';



function ProfileCom() {
  const inputRef = useRef(null);
  const [BackgroundImage, setBackgroundImage] = useState("")
  
  const handleBackgroundImageClick = () => {
    inputRef.current.click();
  };

  const handleBackgroundImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setBackgroundImage(event.target.files[0])
  };

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
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
          <h1 className="IPcard-title">Yugantha Polhengoda</h1>
        </div>
        <form onSubmit={{/*handleSubmit*/}}>
                <div className="IPform-outline">
                <img src={age} className="age"  alt="" />
                  <label htmlFor="firstName" className="label">
                    Age : <span className='span'>24</span>
                     </label>
                </div>
                <div className="IPform-outline">
                <img src={weight} className="weight"  alt="" />
                  <label htmlFor="firstName" className="label">
                    Weight : <span className='span'>56kg</span>
                     </label>
                </div>
                <div className="IPform-outline">
                <img src={height} className="height"  alt="" />
                  <label htmlFor="firstName" className="label">
                    Height : <span className='span'>164cm</span>
                     </label>
                </div>
                <div className="IPform-outline">
                <img src={email} className="email"  alt="" />
                  <label htmlFor="firstName" className="label">
                    Email : <span className='span'>yuganthapolhengoda@gmail.com</span>
                     </label>
                </div>
                <div className="IPform-outline">
                <img src={phone} className="phone"  alt="" />
                  <label htmlFor="firstName" className="label">
                    Phone No : <span className='span'>+94 767801452</span>
                     </label>
                </div>
        </form>
    </div>

    <div className="MealPlan">
        <h1 className='MealPlanTitle'>Meal Plan</h1>
    </div>
    </Box>

    <Box className='post'>
    <Post />
    </Box>

    </Box>
  )
}

export default ProfileCom
