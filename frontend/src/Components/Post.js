import {
  Description,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import workoutImg from "../Images/workout.jpg";
import { useState } from "react";

const Post = () => {
  const IncommingPost = {
    name: "Jhon",
    date: "September 14, 2022",
    description:
      "Hey everyone! 💪 Just crushed a killer full-body workout! Started with a 10-minute dynamic warm-up to get the blood flowing, then hit three rounds of circuits:Squats, push-ups, and bent-over rows for strength.Jumping jacks, mountain climbers, and burpees for cardio.Plank holds, Russian twists, and bicycle crunches for core work.Finished off with a 5-minute cool-down and stretch. Feeling the burn in all the right places! Who's joining me next time? #WorkoutMotivation #FitnessGoals",
    image: workoutImg,
  };

  const [post, setPost] = useState(IncommingPost);

  console.log(post, "values");
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={post.name}
        subheader={post.date}
      />
      <CardMedia
        component="img"
        height="20%"
        image={post.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
