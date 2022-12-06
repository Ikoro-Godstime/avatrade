import React, { useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, store } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./form.css";
import {
  Button,
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

const RegisterForm = () => {
  // control the input fields
  const [disable, setDisable] = useState(false);
  const [country, setCountry] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  // toast configuration
  toast.configure();
  // navigation router hook
  const navigate = useNavigate();
  // refs for form
  const firstNameRef = useRef();
  const LastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const countryRef = useRef();

  // input functions
  const showPasswordFn = () => {
    setShowPassword(!showPassword);
  };

  // fetch countries
  const fetchCountry = async () => {
    try {
      const apiCall = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const response = await apiCall.json();
      const countriesAndCities = response.data;

      const countries = countriesAndCities.map((country) => {
        return {
          main: country.country,
        };
      });
      setCountry(countries);
    } catch (error) {
      setDisable(true);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  // function to create and save user to the database
  const saveUser = async (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (
      !firstNameRef.current.value |
      !emailRef.current.value |
      !phoneRef.current.value |
      !passwordRef.current.value |
      !countryRef.current.value |
      !LastNameRef.current.value |
      !passwordConfirmRef.current.value
    ) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    }
    //create the user in firebase and then save to firestore
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // send verification
      sendEmailVerification(user);
      // set the backdrop

      // add to the database
      await setDoc(doc(store, "users", emailRef.current.value), {
        email: user.email,
        name: `${firstNameRef.current.value} ${LastNameRef.current.value}`,
        phone: phoneRef.current.value,
        password: passwordRef.current.value,
        country: countryRef.current.value,
        balance: 0,
        profit: 0,
        bonus: 20,
        deposited: 0,
        refBonus: 0,
        totalPackages: 0,
        activePackages: 0,
        verified: user.emailVerified,
        createdAt: user.metadata.creationTime,
        uid: user.uid,
        block: false,
      });
      // toast notification
      toast.success("Welcome to Avatrade,You can now login", {
        position: "top-center",
        theme: "colored",
      });
      // redirect user to login
      navigate("/auth");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast("Email is already in use", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/weak-password") {
        toast("Password Should be Greater than six characters", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/invalid-email") {
        toast("Invalid Email", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box>
        <Typography variant="h6" sx={{ mb: 1, color: "#fff" }}>
          Create An Account
        </Typography>
        <Typography variant="body2" color="GrayText" sx={{ mb: 1 }}>
          Sign up with your email and get started with your free account.
        </Typography>
      </Box>
      <Box>
        <Grid container columnSpacing={2} rowSpacing={1}>
          <Grid item xs={12} md={6}>
            <TextField
              type="text"
              label="First Name"
              inputRef={firstNameRef}
              name="firstName"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              type="text"
              label="Last Name"
              inputRef={LastNameRef}
              name="lastName"
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <TextField
          type="email"
          label="Enter Email"
          inputRef={emailRef}
          name="email"
          margin="normal"
          fullWidth
          sx={{ mb: 1 }}
        />
        <TextField
          type="tel"
          label="Phone Number"
          inputRef={phoneRef}
          name="telephone"
          margin="normal"
          fullWidth
          sx={{ mb: 1 }}
        />
        <Grid container columnSpacing={2} rowSpacing={1} sx={{ my: 1 }}>
          <Grid item xs={12} md={6}>
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
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="password">Confirm Password</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                inputRef={passwordConfirmRef}
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
                label="Confirm Password"
              />
            </FormControl>
          </Grid>
        </Grid>
        <FormControl fullWidth sx={{ mt: 2, mb: 4 }} disable={disable}>
          <InputLabel>Country</InputLabel>
          <Select inputRef={countryRef} label="Select Country" size="small">
            {country.map((count, index) => (
              <MenuItem value={count.main} key={index}>
                {count.main}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={saveUser}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterForm;
