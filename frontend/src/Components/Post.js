import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import workoutImg from "../Images/workout.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  const initialPost = {
    postId: 0,
    userId: "",
    name: "",
    date: "",
    description: "",
    image: "",
    Vedio: "",
    comments: [
      {
        commentId: "",
        username: "",
        description: "",
        time: "",
      },
    ],
  };
  const dummyData = [
    {
      id: 0,
      name: "Jhon",
      date: "September 14, 2022",
      description:
        "Hey everyone! 💪 Just crushed a killer full-body workout! Started with a 10-minute dynamic warm-up to get the blood flowing, then hit three rounds of circuits:Squats, push-ups, and bent-over rows for strength.Jumping jacks, mountain climbers, and burpees for cardio.Plank holds, Russian twists, and bicycle crunches for core work.Finished off with a 5-minute cool-down and stretch. Feeling the burn in all the right places! Who's joining me next time? #WorkoutMotivation #FitnessGoals",
      image: workoutImg,
      comments: [
        {
          commentId: "",
          username: "Alice",
          description:
            "Great workout, Jhon! 💪 I'll definitely join you next time! #FitnessGoals",
          time: "September 14, 2022, 10:30 AM",
        },
        {
          commentId: "",
          username: "Michael",
          description: "Sounds intense! 💪 Way to go, Jhon!",
          time: "September 14, 2022, 11:15 AM",
        },
      ],
    },
    {
      id: 1,
      name: "Alice",
      date: "October 3, 2022",
      description:
        "Good morning! 🌞 Started my day with a refreshing run in the park. The crisp air and morning dew made it extra invigorating! Now, time for a hearty breakfast before tackling the day ahead. Wishing everyone a fantastic day ahead! #MorningRun #FreshStart",
      image:
        "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?cs=srgb&dl=pexels-pixabay-414029.jpg&fm=jpg",
      comments: [
        {
          commentId: "",
          username: "Alice",
          description:
            "Great workout, Jhon! 💪 I'll definitely join you next time! #FitnessGoals",
          time: "September 14, 2022, 10:30 AM",
        },
        {
          commentId: "",
          username: "Michael",
          description: "Sounds intense! 💪 Way to go, Jhon!",
          time: "September 14, 2022, 11:15 AM",
        },
      ],
    },
    {
      id: 2,
      name: "Emma",
      date: "November 20, 2022",
      description:
        "Happy Sunday, everyone! 🌟 Just finished baking some delicious cookies with my family. The house smells amazing! Now, it's time to cozy up with a cup of hot cocoa and enjoy these sweet treats. Wishing you all a relaxing day filled with warmth and joy! #FamilyTime #BakingFun",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRow-N3NdCB2L4Is9f3qXwk1ObLJf2W8fNqq74Jcwamzg&s",
      comments: [
        {
          commentId: "",
          username: "Alice",
          description:
            "Great workout, Jhon! 💪 I'll definitely join you next time! #FitnessGoals",
          time: "September 14, 2022, 10:30 AM",
        },
        {
          commentId: "",
          username: "Michael",
          description: "Sounds intense! 💪 Way to go, Jhon!",
          time: "September 14, 2022, 11:15 AM",
        },
      ],
    },
    {
      id: 3,
      name: "Michael",
      date: "December 5, 2022",
      description:
        "Feeling grateful for the little things in life today. ☺️ Took a moment to pause and appreciate the beauty of nature on my morning walk. The sunlight filtering through the trees, the chirping of birds - it's the simple moments like these that remind me of life's blessings. Wishing you all a peaceful day ahead! #Gratitude #NatureWalk",
      image:
        "https://plus.unsplash.com/premium_photo-1664109999537-088e7d964da2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D",
      comments: [
        {
          commentId: "",
          username: "Alice",
          description:
            "Great workout, Jhon! 💪 I'll definitely join you next time! #FitnessGoals",
          time: "September 14, 2022, 10:30 AM",
        },
        {
          commentId: "",
          username: "Michael",
          description: "Sounds intense! 💪 Way to go, Jhon!",
          time: "September 14, 2022, 11:15 AM",
        },
      ],
    },
    {
      id: 4,
      name: "Sophia",
      date: "January 10, 2023",
      description:
        "Hello, everyone! 👋 Excited to share that I just adopted a furry friend from the shelter. Meet Max - the newest member of our family! 🐾 Can't wait for all the adventures and cuddles ahead. Remember, adopt don't shop! #AdoptDontShop #NewFamilyMember",
      image:
        "https://tempo.fit/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F5j7k2jx5znk1%2F5CcrranP2sCAemEK07mR3a%2Fbcd0b2bef750a1ceccf331945c377e9b%2Flunge.jpg&w=3840&q=80",
      comments: [
        {
          commentId: "",
          username: "Alice",
          description:
            "Great workout, Jhon! 💪 I'll definitely join you next time! #FitnessGoals",
          time: "September 14, 2022, 10:30 AM",
        },
        {
          commentId: "",
          username: "Michael",
          description: "Sounds intense! 💪 Way to go, Jhon!",
          time: "September 14, 2022, 11:15 AM",
        },
      ],
    },
    {
      id: 5,
      name: "Oliver",
      date: "February 22, 2023",
      description:
        "Happy birthday to me! 🎉 Grateful for another year of life, love, and laughter. Celebrating with good food, great friends, and lots of cake! 🎂 Here's to making more unforgettable memories in the year ahead! #BirthdayCelebration #AnotherYearOlder",
      image:
        "https://fitnessdocumentation.com/_next/image?url=https%3A%2F%2Fstorage.fitnessdocumentation.com%2Fsam_sulek2_2b0c8f713e.jpg&w=3840&q=75",
      comments: [
        {
          commentId: "",
          username: "Alice",
          description:
            "Great workout, Jhon! 💪 I'll definitely join you next time! #FitnessGoals",
          time: "September 14, 2022, 10:30 AM",
        },
        {
          commentId: "",
          username: "Michael",
          description: "Sounds intense! 💪 Way to go, Jhon!",
          time: "September 14, 2022, 11:15 AM",
        },
      ],
    },
  ];

  const [post, setPost] = useState(dummyData);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [posts, setPosts] = useState();

  const handleOpenDialog = (comment) => {
    setSelectedComment(comment);
    setOpenDialog(true);
  };

  const handleCloseDialog = (postId) => {
    setOpenDialog(false);
    console.log(postId, "POST");
  };

  const [newComment, setNewComment] = useState("");

  //retrive posts
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/post/")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);
  console.log(posts, "posts");

  const handleCommentSubmit = (postId) => {
    // Logic to submit the new comment
    // You can use the postId to identify which post the comment belongs to
    console.log("post :", postId);
    // Reset the input field after submission
    // setNewComment("");
  };

  return posts.map((d) => (
    <Card key={d.id} sx={{ margin: 5 }}>
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
        // title={d.name}
        subheader={d.createdAt}
      />
      <Typography variant="h6" fontFamily="Paella dish" sx={{ p: 2 }}>
        {d.title}
      </Typography>
      <CardMedia
        component="img"
        height="20%"
        image={`data:image/jpeg;base64,${d.filePath}`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {d.description}
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
      {/* Comment Section */}
      <Accordion>
        <AccordionSummary aria-controls="comment-content" id="comment-header">
          <Box
            width="100%"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="subtitle2">Comments</Typography>
            <IconButton onClick={(comment) => handleOpenDialog(comment)}>
              <DriveFileRenameOutlineIcon />
            </IconButton>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ flexDirection: "column" }}>
          {/* {d.comments.map((comment, index) => ( */}
          <Box
            // key={index}
            sx={{
              marginBottom: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ bgcolor: "#ff6f61", marginRight: 2 }}>
              {/* {comment.username.charAt(0)} */}
            </Avatar>
            <Box>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold", marginBottom: 1 }}
              >
                {/* {comment.username} */}
              </Typography>
              <Typography sx={{ marginBottom: 1 }}>
                {/* {comment.description} */}
              </Typography>
              {/* <Typography variant="caption">{comment.time}</Typography> */}
            </Box>
          </Box>
          {/* ))} */}
        </AccordionDetails>
      </Accordion>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add Comment</DialogTitle>
        <DialogContent>
          <Typography>{selectedComment?.description}</Typography>
          <TextField
            placeholder="Add comment"
            variant="outlined"
            fullWidth
            // Add onChange handler to capture input value
            onChange={(e) => setNewComment(e.target.value)}
            // Value of the input controlled by state
            value={newComment}
            // Handle submission of the comment
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleCommentSubmit(d.id);
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button color="primary" onClick={() => handleCloseDialog(d.id)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  ));
};

export default Post;
