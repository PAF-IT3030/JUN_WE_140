import React from 'react'
import {useRef, useState } from 'react'
import '../css/Stories.css'
import { Users } from '../Utils/Data/Data'
import Storycard from './StoryCard';


import StoryProfile8 from "../Images/StoryProfile8.png";
import plusIconB from "../Images/plusIconB.png";



function Stories() {
  const inputRef = useRef(null);
  const [image, setImage] = useState("")
  
  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0])
  };

  return (
    <div className='sstories'>
      <div className="sstoryCard">
      <div className='soverlay'></div>
      <div onClick={handleImageClick}>
      <img src={plusIconB} alt="User Story" className="storyadd" />
      {image ? <img src={URL.createObjectURL(image)} alt="" className='SeImage'  style={{width: "11rem", height: "16.1rem"}}/> : <img src={image} alt=""/>}
      <input className='input' type='file' ref={inputRef} onChange={handleImageChange}/>
      </div>

      <img src={StoryProfile8} alt="User Story" className="sstoryProfile" />
      {/*<img src={story8} className="img-fluid rounded-start" style={{width: "11rem"}} alt="Login" />*/}

      

      <p className="Stext" >Amber</p>
      </div>

      {Users.map((u) => (
        <Storycard key={u.id} user={u} />
      ))}
    </div>
  )
}

export default Stories
