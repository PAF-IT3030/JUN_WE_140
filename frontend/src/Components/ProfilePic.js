import React from 'react'
import {useRef, useState } from 'react'
import plusIconP from "../Images/plusIconP.png";

function ProfilePic() {
    const inputRef = useRef(null);
    const [ProfileImage, setProfileImage] = useState("")
  
  const handleProfileImageClick = () => {
    inputRef.current.click();
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setProfileImage(event.target.files[0])
  };
  return (
    <div className="PIstoryProfile">
        <div onClick={handleProfileImageClick}>
            <img src={plusIconP} alt="User Story" className="PIstoryadd" />
            {ProfileImage ? <img src={URL.createObjectURL(ProfileImage)} alt="" className='PISetImage'/> : <img src={ProfileImage} alt=""/>}
            <input className='input' type='file' ref={inputRef} onChange={handleProfileImageChange}/>
        </div>
    </div>
  )
}

export default ProfilePic





