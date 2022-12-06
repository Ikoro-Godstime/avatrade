import React, { useState, useContext, useRef } from "react";
import {
  Box,
  Button,
  Alert,
  Grid,
  Typography,
  Modal,
  Fade,
  Backdrop,
  Divider,
  TextField,
  IconButton,
  Tooltip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { store } from "../../firebase";
import { toast } from "react-toastify";
import { options } from "./options";
import { UserContext } from "../../context/UserContext";
import { GrTransaction } from "react-icons/gr";
import { AiFillBank } from "react-icons/ai";
import { BsCurrencyBitcoin } from "react-icons/bs";

const Withdrawal = () => {
  toast.configure();
  // form state
  const addressRef = useRef();
  const withdrawalAmtRef = useRef();
  const bankNameRef = useRef();
  const accountNameRef = useRef();
  const accountNumberRef = useRef();
  const bankBranchRef = useRef();
  const bankLocationRef = useRef();
  const swissRef = useRef();
  const coinRef = useRef();
  // function to set modal open and close
  const [bankModal, setBankModal] = useState(false);
  const [cryptoModal, setCryptoModal] = useState(false);
  // function to open modal
  const openBankModal = () => setBankModal(true);
  const closeBankModal = () => setBankModal(false);
  const openCryptoModal = () => setCryptoModal(true);
  const closeCryptoModal = () => setCryptoModal(false);

  // use the react router Hook
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  // function to get the method of withdraw and address
  const bankMethod = async () => {
    try {
      //  first create the collection ref
      const collectionRef = collection(
        store,
        "users",
        `/${user.email}`,
        "withdrawal"
      );
      await addDoc(collectionRef, {
        amount: withdrawalAmtRef.current.value,
        date: serverTimestamp(),
        bankName: bankNameRef.current.value,
        approved: false,
        accountName: accountNameRef.current.value,
        accountNumber: accountNumberRef.current.value,
        swissNumber: swissRef.current.value,
        bankBranch: bankBranchRef.current.value,
        bankLocation: bankLocationRef.current.value,
      });

      toast.success("Order Sent", { theme: "colored", position: "top-center" });

      navigate("/dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  // function to get the method of withdraw and address
  const cryptoMethod = async () => {
    try {
      //  first create the collection ref
      const collectionRef = collection(
        store,
        "users",
        `/${user.email}`,
        "withdrawal"
      );
      await addDoc(collectionRef, {
        amount: withdrawalAmtRef.current.value,
        date: serverTimestamp(),
        address: addressRef.current.value,
        approved: false,
        coin: coinRef.current.value,
      });

      toast.success("Order Sent", { theme: "colored", position: "top-center" });

      navigate("/dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  // the style component
  const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -20%)",
    width: { xs: "90%", md: 600 },
    bgcolor: "#fff",
    boxShadow: 24,
    p: { xs: 2, md: 3 },
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GrTransaction size="40px" color="#364A63" />
      </Box>
      <Typography
        variant="h6"
        textAlign="center"
        gutterBottom
        sx={{ color: "#364A63" }}
      >
        Withdrawal Funds
      </Typography>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tooltip title="Withdraw Via Bank Transfer" arrow>
          <IconButton
            sx={{ mx: 2, border: "1px solid dodgerBlue" }}
            onClick={openBankModal}
          >
            <AiFillBank />
          </IconButton>
        </Tooltip>
        <Tooltip title="Withdraw Via Cryptocurrency" arrow>
          <IconButton
            sx={{ border: "1px solid dodgerBlue" }}
            onClick={openCryptoModal}
          >
            <BsCurrencyBitcoin />
          </IconButton>
        </Tooltip>
      </Box>
      <Modal
        open={bankModal}
        onClose={closeBankModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={bankModal}>
          <Box sx={style}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: "500", color: "#364A63" }}
              gutterBottom
            >
              Add Bank Account
            </Typography>
            <Typography color="GrayText">
              Add your bank information to withdraw your funds.
            </Typography>
            <Divider />
            <Box sx={{ my: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Account Holder Name"
                    inputRef={accountNameRef}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Account Number"
                    inputRef={accountNumberRef}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ my: 2 }}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Bank Location/Country"
                    inputRef={bankLocationRef}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Bank Name"
                    inputRef={bankNameRef}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ my: 2 }}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Branch Name"
                    inputRef={bankBranchRef}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Swiss Code/BIC"
                    inputRef={swissRef}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Box sx={{ my: 3 }}>
                <TextField
                  label="Amount"
                  inputRef={withdrawalAmtRef}
                  fullWidth
                />
              </Box>
              <Box sx={{ my: 3 }}>
                <TextField label="Enter Remarks (optional)" fullWidth />
              </Box>
              <Alert severity="warning">
                Please Make sure the details are correct,always double check
              </Alert>
              <Button
                fullWidth
                variant="outlined"
                sx={{ my: 2 }}
                onClick={bankMethod}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>{" "}
      <Modal
        open={cryptoModal}
        onClose={closeCryptoModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={cryptoModal}>
          <Box sx={style}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: "500", color: "#364A63" }}
              gutterBottom
            >
              Add Wallet Address
            </Typography>
            <Typography color="GrayText">
              Enter your withdrawal details Below
            </Typography>
            <Divider />
            <Box sx={{ my: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <FormControl size="small" fullWidth>
                    <InputLabel>Select Coin</InputLabel>
                    <Select inputRef={coinRef} label="Select Coin">
                      {options.map((option) => (
                        <MenuItem
                          sx={{ color: "#fff" }}
                          value={option.name}
                          key={option.name}
                        >
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Enter Wallet Address"
                    inputRef={addressRef}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Box sx={{ my: 3 }}>
                <TextField
                  label="Amount"
                  inputRef={withdrawalAmtRef}
                  fullWidth
                />
              </Box>
              <Box sx={{ my: 3 }}>
                <TextField label="Enter Remarks (optional)" fullWidth />
              </Box>
              <Alert severity="warning">
                Please Make sure the details are correct,always double check
              </Alert>
              <Button
                fullWidth
                variant="outlined"
                sx={{ my: 2 }}
                onClick={cryptoMethod}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Withdrawal;
