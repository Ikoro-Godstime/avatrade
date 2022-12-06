import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

import "../register-form/form.css";

const LoginForm = () => {
  // navigation
  const navigate = useNavigate();
  // toast config
  toast.configure();
  // login form Ref
  const emailRef = useRef();
  const passwordRef = useRef();

  const [showPassword, setShowPassword] = useState(false);

  // input functions
  const showPasswordFn = () => {
    setShowPassword(!showPassword);
  };

  const loginUser = async (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (!emailRef.current.value | !passwordRef.current.value) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    }
    // sign in user
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // store the token in session
      sessionStorage.setItem("token", user.user.refreshToken);
      // redirect to dashboard
      toast.success("Welcome Back !!", {
        position: "top-center",
        theme: "colored",
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast("Password is Incorrect", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/user-not-found") {
        toast("User Not Found", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      if (!emailRef.current.value) {
        toast("Enter Recovery Mail", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      } else {
        sendPasswordResetEmail(auth, emailRef.current.value);
        toast.info("Check Your Email for a reset Link", {
          theme: "colored",
          position: "top-center",
        });
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast("Enter Recovery Mail", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  return (
    <Box sx={{ p: { xs: 2, md: 6 } }}>
      <Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: "500", textTransform: "capitalize", color: "#fff" }}
          gutterBottom
        >
          Login into account
        </Typography>
        <Typography variant="body2" color="GrayText">
          Sign in into your account using your email and passcode.
        </Typography>
      </Box>
      <Box>
        <TextField
          type="email"
          name="email"
          margin="normal"
          label="Enter Email"
          fullWidth
          inputRef={emailRef}
          sx={{ my: 2 }}
        />
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
            inputRef={passwordRef}
            size="small"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={showPasswordFn}
                  edge="end"
                >
                  {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Box sx={{ my: 2, cursor: "pointer" }}>
          <Typography variant="body2" color="gray" onClick={resetPassword}>
            Click to Here to Recover Password.
          </Typography>
        </Box>
      </Box>
      <Button fullWidth variant="contained" color="primary" onClick={loginUser}>
        Sign In
      </Button>
    </Box>
  );
};

export default LoginForm;
