import React, { useRef, useState } from "react";
import "../css/ProfileCom.css";

import plusIconB from "../Images/plusIconB.png";
import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton, Tab, Tabs, Typography } from "@mui/material";
import ProfilePic from "./ProfilePic";
import age from "../Images/Age2.png";
import weight from "../Images/Weight.png";
import height from "../Images/height.png";
import email from "../Images/email.png";
import phone from "../Images/phone.png";
import Post from "./Post";
import ProfileModal from "./ProfileModal";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {  deleteUserAction } from "../Redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";


function ProfileCom() {
  const inputRef = useRef(null);
  const [BackgroundImage, setBackgroundImage] = useState("");
  const [openPopup, setOpenPopup] = useState(false); // State for managing modal visibility
  const [users, setUsers] = useState(null);
  const [value, setValue] = useState("posts");

  const { auth, post } = useSelector((state) => state);

  const tabs = [
    { value: "posts", name: "Posts" },
    { value: "workouts", name: "Workouts" },
    { value: "meal plan", name: "Meal Plan" },
  ];

  const filteredPosts = (post.posts = post.posts.filter(
    (post) => post.user.id === auth.user.id
  ));

  console.log(filteredPosts, "filteredPosts");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBackgroundImageClick = () => {
    inputRef.current.click();
  };

  const handleBackgroundImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setBackgroundImage(event.target.files[0]);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleProfileDelete = () => {
    dispatch(deleteUserAction(auth?.user?.id));
    navigate("/register");

  }

  return (
    <>
      <Box className="box" flex={4} p={{ xs: 0, md: 2 }}>
        <div className="BIstories">
          <div className="BIstoryCard">
            <div className="BIoverlay"></div>
            <div onClick={handleBackgroundImageClick}>
              <img src={plusIconB} alt="User Story" className="BIstoryadd" />
              {BackgroundImage ? (
                <img
                  src={URL.createObjectURL(BackgroundImage)}
                  alt=""
                  className="BISetImage"
                />
              ) : (
                <img src={BackgroundImage} alt="" />
              )}
              <input
                className="input"
                type="file"
                ref={inputRef}
                onChange={handleBackgroundImageChange}
              />
            </div>

            <ProfilePic className="ProfilePic" />
            {/*<img src={StoryProfile8} alt="User Story" className="PIstoryProfile" />*/}
            {/*<img src={story8} className="PIBackground img-fluid rounded-start" alt="Login" />*/}
          </div>
        </div>
        <Box className="Flex">
          <div className="IPCard">
            <div className="">
              <h1 className="IPcard-title">
                {`${auth.user?.firstname} ${auth.user?.lastname}`}
                <EditIcon
                  className="editIcon"
                  onClick={() => setOpenPopup(true)}
                />
                <Box sx={{display:"flex", flexDirection:"row"}}>
                  <Typography sx={{ p: 3 }} fontSize={20}>
                    Delete Profile
                  </Typography>
                  <IconButton onClick={handleProfileDelete}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </h1>
            </div>
            <div className="followCount">
              <span>41 posts</span>
              <span>{auth.user?.followers?.length} followers</span>
              <span>{auth.user?.followings?.length} followings</span>
            </div>

            <form
              onSubmit={
                {
                  /*handleSubmit*/
                }
              }
            >
              <hr className="hr" />
              <div className="IPform-outline">
                <img src={age} className="age" alt="" />
                <label htmlFor="firstName" className="label">
                  Age :{" "}
                  <span className="span">{auth.user?.age?.toString()}</span>
                </label>
              </div>
              <div className="IPform-outline">
                <img src={weight} className="weight" alt="" />
                <label htmlFor="firstName" className="label">
                  Weight :{" "}
                  <span className="span">
                    {users ? users.weight : "Loading..."}
                  </span>
                </label>
              </div>
              <div className="IPform-outline">
                <img src={height} className="height" alt="" />
                <label htmlFor="firstName" className="label">
                  Height :{" "}
                  <span className="span">
                    {users ? users.height : "Loading..."}
                  </span>
                </label>
              </div>
              <div className="IPform-outline">
                <img src={email} className="email" alt="" />
                <label htmlFor="firstName" className="label">
                  Email : <span className="span">{auth.user?.email}</span>
                </label>
              </div>
              <div className="IPform-outline">
                <img src={phone} className="phone" alt="" />
                <label htmlFor="firstName" className="label">
                  Phone No :{" "}
                  <span className="span">
                    {users ? users.phoneNo : "Loading..."}
                  </span>
                </label>
              </div>
            </form>
          </div>
        </Box>
        <section>
          <Box className="Tabs" sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs?.map((item) => (
                <Tab value={item.value} label={item.name} wrapped />
              ))}
            </Tabs>
          </Box>
          <div>
            {value === "posts" ? (
              <div className="space-y-5 w-[70%] my-10">
                {filteredPosts.map((post) => (
                  <div className="border border-slate-500 rounded-md">
                    <Post item={post} button={true} />
                  </div>
                ))}
              </div>
            ) : value === "workouts" ? (
              <div className="flex gap-2">workouts</div>
            ) : (
              <div>meal plan</div>
            )}
          </div>
        </section>

        {openPopup && (
          <section>
            <ProfileModal
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            ></ProfileModal>
          </section>
        )}
      </Box>
    </>
  );
}

export default ProfileCom;
