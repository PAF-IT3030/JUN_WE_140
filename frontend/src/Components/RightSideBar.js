import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";

function RightSideBar() {
  const dummyWorkoutData = [
    {
      id: 0,
      coachName: "Coach Smith",
      workoutPlan: "Home workout",
      workoutDescription:
        "dips - 10x4\n pullups - 6x3\n pushups - 20x4\n setups - 100",
    },
    {
      id: 1,
      coachName: "Coach Johnson",
      workoutPlan: "Cardio Blast",
      workoutDescription:
        "Jumping jacks - 30 seconds\n High knees - 30 seconds\n Burpees - 10 reps\n Mountain climbers - 30 seconds\n Jump rope - 1 minute",
    },
    {
      id: 2,
      coachName: "Coach Williams",
      workoutPlan: "Leg Day",
      workoutDescription:
        "Squats - 12x4\n Lunges - 10x3 each leg\n Deadlifts - 8x4\n Leg press - 15x4",
    },
    {
      id: 3,
      coachName: "Coach Brown",
      workoutPlan: "Upper Body Strength",
      workoutDescription:
        "Bench press - 10x4\n Bent-over rows - 8x4\n Shoulder press - 12x3\n Bicep curls - 10x3\n Tricep dips - 15x3",
    },
    
  ];

  const [workouts, setWorkouts] = useState(dummyWorkoutData);


  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }} position="relative">
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Workouts
        </Typography>
        {workouts.map((w) => (
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary={w.coachName}
                secondary={
                  <Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {w.workoutPlan}
                    </Typography>
                    {w.workoutDescription}
                  </Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ))}
      </Box>
    </Box>
  );
}

export default RightSideBar;
