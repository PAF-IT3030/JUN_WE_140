import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Send, ImageOutlined } from "@mui/icons-material"; // Import Send and ImageOutlined icons from Mui icons
import EditIcon from "@mui/icons-material/Edit";

function PostDialogForm({ open, handleClose }) {
  const [postData, setPostData] = useState({
    id: 0,
    name: "",
    date: "",
    description: "",
    image: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = () => {
    // You can implement your submission logic here
    console.log("Submitted post:", postData);
    setPostData({
      id: 0,
      name: "",
      date: "",
      description: "",
      image: "",
    });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        Create a New Post <EditIcon />
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          name="name"
          value={postData.name}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          label="Date"
          type="text"
          fullWidth
          name="date"
          value={postData.date}
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
        <TextField
          margin="dense"
          label="Image URL"
          type="text"
          fullWidth
          name="image"
          value={postData.image}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <ImageOutlined />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
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
