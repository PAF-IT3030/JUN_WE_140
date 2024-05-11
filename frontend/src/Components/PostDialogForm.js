import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  IconButton,
  Box,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { Send, ImageOutlined } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import { uploadToCloudinary } from "../Utils/uploadToCloudinary";
import { useDispatch } from "react-redux";
import { createPostAction } from "../Redux/Post/post.action";

function PostDialogForm({ open, handleClose }) {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleImageUpload = async (event) => {
    const imageUrl = await uploadToCloudinary(event.target.files[0], "image");
    setSelectedImage(imageUrl);
    setIsLoading(false);
    formik.setFieldValue("image", imageUrl);
  };

  const handleVedioUpload = async (event) => {
    const videoUrl = await uploadToCloudinary(event.target.files[0], "video");
    setSelectedVideo(videoUrl);
    setIsLoading(false);
    formik.setFieldValue("video", videoUrl);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: "",
      video: "",
    },
    onSubmit: (values) => {
      console.log("formik values", values);
      dispatch(createPostAction(values));
    },
  });

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
      <DialogTitle>
        Create a New Post <EditIcon />
      </DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
          >
            <TextField
              margin="dense"
              label="Title"
              type="text"
              fullWidth
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              multiline
              rows={4}
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            {selectedVideo ? (
              ""
            ) : (
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                  id="image-input"
                  multiple
                />
                <label htmlFor="image-input">
                  <Button variant="contained" component="span">
                    Upload Image <ImageOutlined />
                  </Button>
                </label>
              </div>
            )}

            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected Image"
                style={{ maxWidth: "100%" }}
              />
            )}
            {selectedImage ? (
              ""
            ) : (
              <div>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVedioUpload}
                  style={{ display: "none" }}
                  id="video-input"
                  multiple
                />
                <label htmlFor="video-input">
                  <Button variant="contained" component="span">
                    Upload Video <ImageOutlined />
                  </Button>
                </label>
              </div>
            )}

            {selectedVideo && (
              <video width="320" height="240" controls>
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Box>
        </form>
        <Backdrop
          sx={{ color: "#ffff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
          onClick={handleClose}
        >
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected Image"
              style={{ maxWidth: "100%" }}
            />
          ) : (
            <CircularProgress color="inherit" />
          )}
        </Backdrop>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <IconButton
          onClick={formik.handleSubmit}
          color="primary"
          aria-label="post"
        >
          <Send />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
}

export default PostDialogForm;
