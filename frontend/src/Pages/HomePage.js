import React from "react";
import { Box, Divider, Grid, Stack } from "@mui/material";
import PrimarySearchAppBar from "../Components/PrimarySearchAppBar";
import SideBar from "../Components/SideBar";
import Feed from "../Components/Feed";
import RightSideBar from "../Components/RightSideBar";

function HomePage() {
  return (
    <>
      {/* <NavBar/> */}
      <PrimarySearchAppBar />
      <Box>
        <Stack direction="row" justifyContent="space-between">
          <SideBar/>
          <Divider orientation="vertical" variant="fullwidth" flexItem />
          <Feed/>
          <Divider orientation="vertical" variant="fullwidth" flexItem />
          <RightSideBar/>
        </Stack>
      </Box>
    </>
  );
}

export default HomePage;
