// import the useState from the react component to control the state of the modal in the application
import React, { useState, useRef, useContext, useEffect } from "react";
// import the needed components from material ui
import {
  Box,
  Button,
  Modal,
  Paper,
  Typography,
  Fade,
  Backdrop,
  TextField,
  Divider,
  Skeleton,
  Alert,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

// import the toast components to display errors
import { toast } from "react-toastify";

// import firebase functions
// import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { store } from "../../firebase";

// user context
import { UserContext } from "../../context/UserContext";
// import moment from "moment";

// styles for the form update Modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 300, md: 500 },
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

// the component to be Rendered
const Profile = () => {
  // state to control the form modal
  const [formModalOpen, setModalOpen] = useState(false);
  // details
  const [details, setDetails] = useState(null);

  // user context
  const { user } = useContext(UserContext);

  // navigate hook
  const navigate = useNavigate();

  // set the form refs
  // const pictureRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();

  // functions to control the visibility of the modals
  // (functions to control upload modal)
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  // function to upload Profile Picture
  // const uploadPicture = async () => {
  //   try {
  //     const file = pictureRef.current.files[0];

  //     if (!file) {
  //       toast.error("Please Select an Image", {
  //         theme: "colored",
  //         position: "bottom-center",
  //       });
  //     }
  //     const imgRef = ref(bucket, `profileImg/${file.name}`);
  //     await uploadBytes(imgRef, file);
  //     const imgSrc = await getDownloadURL(imgRef);
  //     // user docRef
  //     const userRef = doc(store, "/users", `${user.email}`);
  //     await updateDoc(userRef, {
  //       profileImg: imgSrc,
  //     });

  //     toast.success("Image Uploaded", {
  //       theme: "colored",
  //       position: "top-center",
  //     });
  //     navigate("/dashboard");
  //   } catch (error) {
  //     toast.error("Could Not Upload Image", {
  //       theme: "colored",
  //       position: "bottom-center",
  //     });
  //   }
  // };

  // function to get User

  // useEffect
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const docRef = doc(store, "/users", `${user.email}`);
        const userDetails = await getDoc(docRef);

        return setDetails(userDetails.data());
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, [details, user.email]);

  // update User Details
  const updateDetails = async () => {
    try {
      const docRef = doc(store, "/users", `${user.email}`);

      if (!nameRef.current.value | !phoneRef.current.value) {
        return toast("Please fill the form correctly", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }

      await updateDoc(docRef, {
        name: nameRef.current.value,
        phone: phoneRef.current.value,
      });

      toast.info("Details have been updated", {
        theme: "colored",
        position: "top-center",
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      // toast.error("Can not Change Details Now", {
      //   theme: "colored",
      //   position: "bottom-center",
      // });
    }
  };


  return (
    <div>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          component="h1"
          gutterBottom
          sx={{ color: "#364A63", fontWeight: "500" }}
        >
          Profile Information
        </Typography>
        <Typography variant="body1" color="GrayText" component="p" gutterBottom>
          Basic info, like your name and address, that you use on our platform.
        </Typography>
      </Box>
      <Alert severity="info" sx={{ my: 2 }}>
        Remember to never share your account information,or your login details
      </Alert>
      <Box
        component={Paper}
        sx={{
          boxShadow: "none",
          p: 1,
          backgroundColor: "transparent",
          border: "1px solid dodgerblue",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <Typography
            sx={{ fontWeight: "500", color: "#949EB3", fontSize: "15px" }}
          >
            Full Name
          </Typography>
          {details ? (
            <Typography variant="body2">{details.name}</Typography>
          ) : (
            <Skeleton variant="text" width="80px" />
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <Typography
            sx={{ fontWeight: "500", color: "#949EB3", fontSize: "15px" }}
          >
            Email
          </Typography>
          {details ? (
            <Typography variant="body2">{details.email}</Typography>
          ) : (
            <Skeleton variant="text" width="80px" />
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <Typography
            sx={{ fontWeight: "500", color: "#949EB3", fontSize: "15px" }}
          >
            Phone Number
          </Typography>
          {details ? (
            <Typography variant="body2">{details.phone}</Typography>
          ) : (
            <Skeleton variant="text" width="80px" />
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <Typography
            sx={{ fontWeight: "500", color: "#949EB3", fontSize: "15px" }}
          >
            Country of Origin
          </Typography>
          {details ? (
            <Typography variant="body2">{details.country}</Typography>
          ) : (
            <Skeleton variant="text" width="80px" />
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <Typography
            sx={{ fontWeight: "500", color: "#949EB3", fontSize: "15px" }}
          >
            Created At
          </Typography>
          {details ? (
            <Typography variant="body2">{details.createdAt}</Typography>
          ) : (
            <Skeleton variant="text" width="80px" />
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <Typography
            sx={{ fontWeight: "500", color: "#949EB3", fontSize: "15px" }}
          >
            Verified
          </Typography>
          {details ? (
            <Typography variant="body2">
              {details.verified ? "Verified" : "Not Verified"}
            </Typography>
          ) : (
            <Skeleton variant="text" width="80px" />
          )}
        </Box>
      </Box>
      <Button variant="outlined" sx={{ mt: 3 }} onClick={handleOpen}>
        Edit Details
      </Button>

      <Modal
        open={formModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={formModalOpen}>
          <Box sx={style}>
            <Typography>Edit your Profile</Typography>
            <Divider />
            <Box sx={{ mt: 3 }}>
              <TextField
                margin="dense"
                label="Full Name"
                fullWidth
                sx={{ my: 2 }}
                inputRef={nameRef}
              />
              <TextField
                margin="dense"
                label="Phone Number"
                fullWidth
                inputRef={phoneRef}
              />
              <Button
                variant="outlined"
                color="warning"
                sx={{ my: 2 }}
                onClick={updateDetails}
              >
                Update
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};;;;

export default Profile;
