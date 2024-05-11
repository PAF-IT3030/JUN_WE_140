import React from "react";
import { Grid } from "@mui/material";
import SideBar from "../Components/SideBar";

import ProfileCom from "../Components/ProfileCom";

function Profile(user) {
  return (
    <Grid container>
      <Grid item xs={2}>
        <SideBar />
        {/* <Divider orientation="vertical" variant="fullwidth" flexItem /> */}
      </Grid>
      <Grid item xs={10}>
        <ProfileCom user={user} />
      </Grid>
    </Grid>
  );
}

export default Profile;
