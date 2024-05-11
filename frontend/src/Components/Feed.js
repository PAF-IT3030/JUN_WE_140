import {
  Box,
  Stack,
  Skeleton,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostDialogForm from "./PostDialogForm";
import { AddBox } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostAction } from "../Redux/Post/post.action";


function Feed() {
  const [loading, setLoading] = useState(true);
  const dispatch= useDispatch();
  const { post } = useSelector((state) => state);
  
  useEffect(() => {
    //retrive posts
    dispatch(getAllPostAction());
    
  }, []);

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
        {post?.posts?.map((d)=><Post item={d}/>) }
        </>
      )}
    </Box>
  );
}

export default Feed;
