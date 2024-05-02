import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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
import { format } from "date-fns";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AddCommentIcon from "@mui/icons-material/AddComment";

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
          commentId: "1",
          username: "Alice",
          description:
            "Great workout, Jhon! 💪 I'll definitely join you next time! #FitnessGoals",
          time: "September 14, 2022, 10:30 AM",
        },
        {
          commentId: "2",
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
          commentId: "3",
          username: "Alice",
          description:
            "Great workout, Jhon! 💪 I'll definitely join you next time! #FitnessGoals",
          time: "September 14, 2022, 10:30 AM",
        },
        {
          commentId: "4",
          username: "Michael",
          description: "Sounds intense! 💪 Way to go, Jhon!",
          time: "September 14, 2022, 11:15 AM",
        },
      ],
    },
    // Add more dummy data as needed
  ];

  const [post, setPost] = useState(dummyData);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState("");
  //call apis
  useEffect(() => {
    //retrive posts
    axios
      .get("http://localhost:8080/api/post/")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });

    //retrive comments
    axios
      .get("http://localhost:8080/api/comments/")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  //send data

  const handleOpenDialog = async (comment) => {
    console.log(comment,"ceeeeeeeeeee")
    if (comment) {
      // If a comment is provided, it means we are updating an existing comment
      setSelectedComment(comment);
      setNewComment(comment.description); // Populate the dialog with the existing comment
    } else {
      // If no comment is provided, it means we are adding a new comment
      setSelectedComment(null);
      setNewComment(""); // Clear the input field
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = async () => {
    setOpenDialog(false);
    console.log(selectedComment?.commentId,"commmetttttttttttttttttt",newComment)
    try {
      if (selectedComment && selectedComment.commentId) {
        // If selectedComment is not null, it means we are updating an existing comment
        const response = await axios.put(
          `http://localhost:8080/api/comments/${selectedComment.commentId}`,
          {
            comment: newComment,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Comment updated:", response.data);
      } else {
        // If selectedComment is null, it means we are adding a new comment
        const response = await axios.post(
          "http://localhost:8080/api/comments/",
          {
            userId: "uid001",
            comment: newComment,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Comment added:", response.data);
      }
      // Optionally, you can reset the form or show a success message here
    } catch (error) {
      setError("Failed to add/update comment");
      console.error("Error adding/updating comment:", error);
    }
  };

  //delete comment
  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:8080/api/comments/${commentId}`);
      // Update the state to reflect the deletion
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.commentId !== commentId)
      );
      console.log("Comment deleted:", commentId);
    } catch (error) {
      setError("Failed to delete comment");
      console.error("Error deleting comment:", error);
    }
  };

  return posts?.map((d) => (
    <Card key={d.postId} sx={{ margin: 5 }}>
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
        subheader={format(new Date(d.createdAt), "MMMM dd, yyyy HH:mm")}
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
            <IconButton onClick={() => handleOpenDialog()}>
              <AddCommentIcon />
            </IconButton>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ flexDirection: "column" }}>
          {comments?.map((comment) => (
            <Box
              key={comment.commentId}
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
                  {comment.userId}
                </Typography>
                <Typography sx={{ marginBottom: 1 }}>
                  {comment.comment}
                </Typography>
                {/* <Typography variant="caption">{d.createdAt}</Typography> */}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "auto",
                }}
              >
                <IconButton onClick={() => handleOpenDialog(comment)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDeleteComment(comment.commentId)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{selectedComment ? "Edit Comment" : "Add Comment"}</DialogTitle>
        <DialogContent>
          <TextField
            placeholder="Add comment"
            variant="outlined"
            fullWidth
            // Add onChange handler to capture input value
            onChange={(e) => setNewComment(e.target.value)}
            // Value of the input controlled by state
            value={newComment}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button color="primary" onClick={handleCloseDialog}>
            {selectedComment ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  ));
};

export default Post;
