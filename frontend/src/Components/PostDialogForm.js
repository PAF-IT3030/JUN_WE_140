import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { Send, ImageOutlined } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

function PostDialogForm({ open, handleClose }) {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    file: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    
    setPostData({ ...postData, file: file });
  };

  const handleSubmit = async () => {
    try {
      // Create FormData object
      const formData = new FormData();
      formData.append("title", postData.title);
      formData.append("description", postData.description);
      formData.append("file", postData.file);

      // Make a POST request to your backend endpoint
      const response = await axios.post(
        "http://localhost:8080/api/post/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response from backend:", response.data);
      handleClose();
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  // Log postData after it's updated
  useEffect(() => {
    console.log("PostData after submit:", postData);
  }, [postData]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        Create a New Post <EditIcon />
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          name="title"
          value={postData.title}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          multiline
          rows={4}
          name="description"
          value={postData.description}
          onChange={handleInputChange}
        />

        {/* Image upload input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
          id="imageUri"
        />
        <label htmlFor="imageUri">
          <Button variant="contained" component="span">
            Upload Image <ImageOutlined />
          </Button>
        </label>

        {/* Display uploaded image */}
        {postData.file && (
          <div>
            <Typography variant="body1">Uploaded Image:</Typography>
            <img
              className="imageUri"
              src={URL.createObjectURL(postData.file)}
              alt="Uploaded"
              style={{ maxWidth: "100%", marginTop: "10px" }}
            />
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <IconButton onClick={handleSubmit} color="primary" aria-label="post">
          <Send />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
}

export default PostDialogForm;
