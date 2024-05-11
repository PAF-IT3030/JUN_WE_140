import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import SideBar from "../Components/SideBar";
import Feed from "../Components/Feed";
import RightSideBar from "../Components/RightSideBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Meals from "../Components/Meals";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../Redux/Auth/auth.action";

export default function HomePage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store => store);

  console.log(auth , "auth");
  useEffect(() => {
     dispatch(getUserAction(jwt));
  }, [jwt]);

  
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <SideBar />
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={7} lg={6}>
        {/* {location.pathname === "/home" && (
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/meals" element={<Meals />} />
          </Routes>
        )} */}
        <Feed/>
      </Grid>

      <Grid item xs={2}>
        <RightSideBar />
      </Grid>
    </Grid>
  );
}
