// ProfileModal.js

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  InputAdornment,
  InputLabel,
  FormControl,
  OutlinedInput,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

export default function ProfileModal(props) {
  const { openPopup, setOpenPopup } = props;
  const userId = 19; // Provided user id

  const [userToUpdate, setUserToUpdate] = useState({
    firstname: '',
    lastname: '',
    age: '',
    weight: '',
    height: '',
    email: '',
    phoneNo: '',
    profilePicture: ''
  });

  const handleClose = () => {
    setOpenPopup(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userToUpdate),
      });

      if (response.status === 200) {
        console.log('User profile updated successfully!');
        handleClose();
        // Reload the page after successful update
        window.location.reload();
      } else {
        console.error('Error updating user profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleChange = (event) => {
    setUserToUpdate({ ...userToUpdate, [event.target.name]: event.target.value });
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/${userId}`);
      if (response.status === 200) {
        const userData = await response.json();
        setUserToUpdate(userData);
      } else {
        console.error('Error fetching user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  const handleDeleteUser = async () => {
    const confirmation = window.confirm('Are you sure you want to delete this user? This action cannot be undone.');

    if (confirmation) {
      try {
        const response = await fetch(`http://localhost:8080/api/users/${userId}`, {
          method: 'DELETE',
        });

        if (response.status === 200) {
          console.log('User deleted successfully!');
          handleClose(); // Close the modal after deletion
          // Reload the page after successful deletion
          window.location.reload();
        } else {
          console.error('Error deleting user:', response.statusText);
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <Dialog open={openPopup} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          <EditIcon sx={{ marginRight: 1 }} />
          Edit Profile Details
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ padding: '2rem' }}>
        <Box component="form" onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth margin="normal" label="First Name" name="firstname" value={userToUpdate.firstname} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth margin="normal" label="Last Name" name="lastname" value={userToUpdate.lastname} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth margin="normal" label="Age" name="age" type="number" value={userToUpdate.age} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel htmlFor="weight">Weight</InputLabel>
                <OutlinedInput
                  id="weight"
                  label="Weight"
                  type="number"
                  name="weight"
                  value={userToUpdate.weight}
                  onChange={handleChange}
                  endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel htmlFor="height">Height</InputLabel>
                <OutlinedInput
                  id="height"
                  label="Height"
                  type="number"
                  name="height"
                  value={userToUpdate.height}
                  onChange={handleChange}
                  endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth margin="normal" label="Email" name="email" type="email" value={userToUpdate.email} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth margin="normal" label="Phone No" name="phoneNo" type="tel" value={userToUpdate.phoneNo} onChange={handleChange} />
            </Grid>
          </Grid>
          <Box mt={2} textAlign="center">
            <Button type="submit" variant="contained" color="primary" sx={{ marginRight: '1rem' }}>
              Save
            </Button>
            <Button type="button" variant="contained" color="error" onClick={handleDeleteUser}>
              Delete
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}























