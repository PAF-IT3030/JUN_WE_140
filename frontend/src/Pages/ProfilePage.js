import React from "react";
import { Box, Divider, Stack } from "@mui/material";
import SideBar from "../Components/SideBar";
import RightSideBar from "../Components/RightSideBar";
import ProfileCom from "../Components/ProfileCom";

function Profile() {
  return (
    <>
      <Box>
        <Stack direction="row" justifyContent="space-between">
          <SideBar/>
          <Divider orientation="vertical" variant="fullwidth" flexItem />
          <ProfileCom/>
          <Divider orientation="vertical" variant="fullwidth" flexItem />
          <RightSideBar/>
        </Stack>
      </Box>
    </>
  );
}

export default Profile;
