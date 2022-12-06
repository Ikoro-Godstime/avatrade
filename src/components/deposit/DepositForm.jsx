import {
  Container,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  InputAdornment,
  Modal,
  Typography,
  Box,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FiPaperclip } from "react-icons/fi";
import { wallets } from "../wallets/wallets";
import { useState, useRef, useContext } from "react";
import { style } from "./style";
import { toast } from "react-toastify";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const DepositForm = () => {
  // configure toast object
  toast.configure();
  // state to open the modal
  const [open, setOpen] = useState(false);
  const [coin, setCoin] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const amountRef = useRef();

  // function to get the coin details
  const getCoinX = (name) => {
    const coin = wallets.filter((wallet) => wallet.coin === name);
    setCoin(coin[0]);
    handleOpen();
  };

  // function to clip address
  const clipAddress = (value, name) => {
    navigator.clipboard.writeText(value);
    toast.success(`${name} address has been copied !!`, {
      theme: "colored",
      position: "top-center",
    });
  };

  // submit function
  const handleSubmit = async () => {
    try {
      // update document
      const collectionRef = collection(
        store,
        "users",
        `${user.email}`,
        "Deposits"
      );
      await addDoc(collectionRef, {
        amount: amountRef.current.value,
        date: serverTimestamp(),
        approved: false,
        method: coin.coin,
      });

      toast.info("Payment Sent", { theme: "colored", position: "top-center" });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Payment Not Sent", {
        theme: "colored",
        position: "bottom-center",
      });
    }
  };

  return (
    <Container maxWidth="xs">
      <FormControl size="small" fullWidth>
        <InputLabel>Select Payment or deposit method</InputLabel>
        <Select
          value=""
          label="Select Payment or Deposit method"
          endAdornment={
            <InputAdornment position="end">
              <RiSecurePaymentFill />
            </InputAdornment>
          }
        >
          {wallets.map((wallet) => (
            <MenuItem
              sx={{ color: "#fff" }}
              value={wallet.id}
              key={wallet.id}
              onClick={() => getCoinX(wallet.coin)}
            >
              {wallet.coin}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ width: "60%", mx: "auto" }}>
            <img src={coin.barcode} alt="" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                noWrap
                sx={{ fontWeight: "400", fontSize: "15px" }}
              >
                {coin.address}
              </Typography>
            </Box>
            <IconButton
              size="small"
              onClick={() => clipAddress(coin.address, coin.coin)}
            >
              <FiPaperclip />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", my: 2 }}>
            {" "}
            <TextField label="Amount" inputRef={amountRef} />
            <Button sx={{ ml: 1 }} onClick={handleSubmit}>
              Deposit
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default DepositForm;
