import React from 'react'
import {useRef, useState } from 'react'
import './Stories.css'
import { Users } from '../../Pages/Data'
import Storycard from '../StoryCard/StoryCard';
import StoryProfile2 from '../../images/img/StoryProfile2.jpg'

import StoryProfile8 from "../img/StoryProfile8.png";
import plusIconB from "../img/plusIconB.png";
import story8 from "../img/story8.jpg";
import StoryProfile3 from "../img/StoryProfile3.jpg";
import StoryProfile4 from "../img/StoryProfile4.jpg";


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
      <img src={story8} className="img-fluid rounded-start" style={{width: "11rem"}} alt="Login" />

      

      <p className="Stext" >Amber</p>
      </div>

      {Users.map((u) => (
        <Storycard key={u.id} user={u} />
      ))}
    </div>
  )
}

export default Stories
