import {
  Box,
  Stack,
  Skeleton,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";
import PostDialogForm from "./PostDialogForm";
import Stories from "./Stories"
import { AddBox } from "@mui/icons-material";

function Feed() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <Box>
        <Stories/>
      </Box>
      <Box>
        <TextField
          onClick={handleOpenDialog}
          margin="dense"
          label="What's on your mind?"
          type="text"
          fullWidth
          multiline
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleOpenDialog}>
                <AddBox />
              </IconButton>
            ),
          }}
        />
        <PostDialogForm open={dialogOpen} handleClose={handleCloseDialog} />
      </Box>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </>
      )}
    </Box>
  );
}

export default Feed;
