// ProfileModal.js
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

} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { useFormik } from "formik";
import { updateProfileAction } from "../Redux/Auth/auth.action";
import { useDispatch } from "react-redux";

export default function ProfileModal(props) {
  const { openPopup, setOpenPopup } = props;

  const handleClose = () => {
    setOpenPopup(false);
  };


  const handleDeleteUser = async () => {
  };

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      // image: "",
      age: 0,
      // weight: null,
      // height: null,
      email: "",
      // phoneNo: null,
    },
    onSubmit: (values) => {
      console.log("update formik values", values);
      dispatch(updateProfileAction(values));
    },
  });

  return (
    <Dialog open={openPopup} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          <EditIcon sx={{ marginRight: 1 }} />
          Edit Profile Details
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ padding: "2rem" }}>
      
          <Box component="form" onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="First Name"
                  name="firstname"
                  value={formik.firstname}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Last Name"
                  name="lastname"
                  value={formik.lastname}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Age"
                  name="age"
                  type="number"
                  value={formik.age}
                  onChange={formik.handleChange}
                />
              </Grid>
              {/* <Grid item xs={6}>
                <FormControl variant="outlined" fullWidth margin="normal">
                  <InputLabel htmlFor="weight">Weight</InputLabel>
                  <OutlinedInput
                    id="weight"
                    label="Weight"
                    type="number"
                    name="weight"
                    value={formik.weight}
                    onChange={formik.handleChange}
                    endAdornment={
                      <InputAdornment position="end">kg</InputAdornment>
                    }
                  />
                </FormControl>
              </Grid> */}
              {/* <Grid item xs={6}>
                <FormControl variant="outlined" fullWidth margin="normal">
                  <InputLabel htmlFor="height">Height</InputLabel>
                  <OutlinedInput
                    id="height"
                    label="Height"
                    type="number"
                    name="height"
                    value={formik.height}
                    onChange={formik.handleChange}
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
                  />
                </FormControl>
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  name="email"
                  type="email"
                  value={formik.email}
                  onChange={formik.handleChange}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Phone No"
                  name="phoneNo"
                  type="tel"
                  value={formik.phoneNo}
                  onChange={formik.handleChange}
                />
              </Grid> */}
            </Grid>
            <Box mt={2} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginRight: "1rem" }}
              >
                Save
              </Button>
              <Button
                type="button"
                variant="contained"
                color="error"
                onClick={handleDeleteUser}
              >
                Delete
              </Button>
            </Box>
          </Box>
      </DialogContent>
    </Dialog>
  );
}
