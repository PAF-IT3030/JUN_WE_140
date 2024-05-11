import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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
import { useState } from "react";
import axios from "axios";
import { format } from "date-fns";

import AddCommentIcon from "@mui/icons-material/AddComment";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction, likePostAction } from "../Redux/Post/post.action";
import { isLikedByReqUser } from "../Utils/isLikedByReqUser";

const Post = (item) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  const [comments, setComments] = useState(null);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();
  const {auth} = useSelector(store=>store)

  const handleOpenDialog = async (comment) => {
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
    handleAddComment();
  };

  //like post action
  const handleLikePost=()=>{
    console.log(item?.item?.id)
    dispatch(likePostAction(item?.item?.id))
  }

  //delete comment
  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:8080/api/comments/${commentId}`);
      // Update the state to reflect the deletion
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.commentId !== commentId)
      );
      
    } catch (error) {
      setError("Failed to delete comment");
      console.error("Error deleting comment:", error);
    }
  };
  const handleAddComment = () => {
    const reqData = {
      postId: item?.item?.id,
      data: {
        comment: newComment,
      },
    };
    dispatch(createCommentAction(reqData));
  };

  console.log(item?.item.liked,"liked")

  return (
    <Card key={item?.item?.id} sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {item?.item?.user?.firstname.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        // title={d.name}
        subheader={format(
          new Date(item?.item?.createdAt),
          "MMMM dd, yyyy HH:mm"
        )}
      />
      <Typography variant="h6" fontFamily="Paella dish" sx={{ p: 2 }}>
        {item?.item?.title}
      </Typography>
      <CardMedia
        component="img"
        height="20%"
        image={item?.item?.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item?.item?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleLikePost} aria-label="add to favorites">
         {isLikedByReqUser(auth.user.id,item?.item) ?  <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />:
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "white" }} />}
          />
         }
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
          {item?.item?.comments?.map((comment) => (
            <Box
              key={comment?.id}
              sx={{
                marginBottom: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ bgcolor: "#ff6f61", marginRight: 2 }}>
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  {comment?.user?.firstname.charAt(0)}
                </Avatar>
              </Avatar>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "bold", marginBottom: 1 }}
                >
                  {/* {comment.userId} */}
                </Typography>
                <Typography sx={{ marginBottom: 1 }}>
                  {comment?.comment}
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
                <IconButton onClick={() => handleDeleteComment(comment)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {selectedComment ? "Edit Comment" : "Add Comment"}
        </DialogTitle>
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
  );
};

export default Post;
