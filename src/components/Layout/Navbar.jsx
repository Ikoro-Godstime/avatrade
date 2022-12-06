import React, { useState } from "react";
import {
  IconButton,
  Box,
  Typography,
  Avatar,
  Collapse,
  Skeleton,
} from "@mui/material";
import UserNav from "./UserNav";
import { FaBars, FaChevronDown } from "react-icons/fa";

const Navbar = ({ openMobile, details }) => {
  const [show, setShow] = useState(false);

  const changeVisible = () => {
    setShow(!show);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
        }}
      >
        <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
          <IconButton
            color="info"
            aria-label="open drawer"
            onClick={() => openMobile()}
          >
            <FaBars />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
          <img src="/img/logo.svg" alt="logo" />
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mx: 1 }}>
            <Typography variant="body1" color="grayText">
              USD/GBP ={" "}
            </Typography>
            <Typography
              variant="body1"
              color="darkblue"
              sx={{ fontWeight: "400" }}
            >
              0.84
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mx: 1 }}>
            <Typography variant="body1" color="grayText">
              USD/BTC ={" "}
            </Typography>
            <Typography
              variant="body1"
              color="darkblue"
              sx={{ fontWeight: "400" }}
            >
              {" "}
              0.000062
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mx: 1 }}>
            <Typography variant="body1" color="grayText">
              USD/USDT ={" "}
            </Typography>
            <Typography
              variant="body1"
              color="darkblue"
              sx={{ fontWeight: "400" }}
            >
              1.00
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", alignSelf: "flex-end" }}
        >
          <Box sx={{ cursor: "pointer" }}>
            <Avatar onClick={changeVisible} />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              mx: 1,
            }}
          >
            {details ? (
              <Typography variant="subtitle1" color="darkolivegreen">
                {details.verified ? "Verified" : "Unverified"}
              </Typography>
            ) : (
              <Skeleton variant="text" />
            )}
            {details ? (
              <Typography
                variant="subtitle1"
                color="darkblue"
                sx={{ cursor: "pointer" }}
                onClick={changeVisible}
              >
                {details.name} <FaChevronDown size="0.4rem" />
              </Typography>
            ) : (
              <Skeleton variant="text" />
            )}
          </Box>
        </Box>
      </Box>
      <Collapse
        in={show}
        timeout="auto"
        unmountOnExit
        sx={{ position: "relative" }}
      >
        <UserNav details={details} />
      </Collapse>
    </>
  );
};

export default Navbar;
