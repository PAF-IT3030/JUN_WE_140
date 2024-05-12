import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";
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
import { format } from "date-fns";

import AddCommentIcon from "@mui/icons-material/AddComment";
import { useDispatch, useSelector } from "react-redux";
import {
  createCommentAction,
  deleteCommentAction,
  deletePostAction,
  likePostAction,
} from "../Redux/Post/post.action";
import { isLikedByReqUser } from "../Utils/isLikedByReqUser";

const Post = (item,count) => {

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);


  
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
  const handleLikePost = () => {
    dispatch(likePostAction(item?.item?.id));
  };

  //delete comment
  const handleDeleteComment = async (commentId) => {
    dispatch(deleteCommentAction(commentId));
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

  //delete post
  const handlePostDelete = async () => {
    dispatch(deletePostAction(item?.item?.id));
  }



  return (
    <Card key={item?.item?.id} sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {item?.item?.user?.firstname.charAt(0)}
          </Avatar>
        }
        action={item.count&&
          <>
            <Button>Edit</Button>
            <Button color="warning" onClick={handlePostDelete}>Delete</Button>
          </>
          
        }
        // title={d.name}
        subheader={
          "posted at: " +
          format(new Date(item?.item?.createdAt), "MMMM dd, yyyy HH:mm")
        }
      />
      <Typography variant="h6" fontFamily="Paella dish" sx={{ p: 2 }}>
        {item?.item?.title}
      </Typography>
      {item?.item?.image === "" ? (
        <CardMedia
          component="video"
          height="500px"
          src={item?.item?.video}
          title="Video"
          controls
        />
      ) : (
        <CardMedia
          component="img"
          height="20%"
          image={item?.item?.image}
          alt="Paella dish"
        />
      )}

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item?.item?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleLikePost} aria-label="add to favorites">
          {isLikedByReqUser(auth.user.id, item?.item) ? (
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          ) : (
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          )}
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
                  {comment.user?.firstname}
                </Typography>
                <Typography sx={{ marginBottom: 1 }}>
                  {comment?.comment}
                </Typography>
                {/* <Typography variant="caption">{d.createdAt}</Typography> */}
              </Box>
              {
                /* If the comment was created by the logged in user, show the edit and delete buttons */
                comment.user.id === auth.user.id && (
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
                    <IconButton onClick={() => handleDeleteComment(comment.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                )
              }
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
