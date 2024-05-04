import React from "react";
import { Box, Divider, Stack } from "@mui/material";
import SideBar from "../Components/SideBar";
import Feed from "../Components/Feed";
import RightSideBar from "../Components/RightSideBar";

function HomePage() {
  return (
    <>
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
