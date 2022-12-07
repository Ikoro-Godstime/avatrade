import React from "react";
import { Box, Typography } from "@mui/material";
import { toast } from "react-toastify";
// import DepositTable from "./DepositTable";
import DepositForm from "./DepositForm";
import { RiSecurePaymentFill } from "react-icons/ri";

const DepositComponent = () => {
  // configure Toast
  toast.configure();

  return (
    <Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RiSecurePaymentFill size="50px" color="#364A63" />
        </Box>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ fontWeight: "500", color: "#364A63" }}
          gutterBottom
        >
          Deposit Funds
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ color: "#71798F" }}
          gutterBottom
        >
          Select from payment options below
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "#8FBEE9" }}
          textAlign="center"
          gutterBottom
        >
          Secure and safely deposit money into your account.
        </Typography>
      </Box>
      <DepositForm />
      {/* <DepositTable /> */}
    </Box>
  );
};

export default DepositComponent;
