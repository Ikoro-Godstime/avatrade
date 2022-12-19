import React from "react";
import { Link } from "react-router-dom";
import { FaShieldVirus } from "react-icons/fa";
import { Box, Typography, Container } from "@mui/material";
import LinkComponent from "./LinkComponent";

const Navbar = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          py: 2,
          display: { xs: "none", md: "block" },
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Link to="/">
                <img src="/img/logo.svg" alt="avatrade logo" />
              </Link>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FaShieldVirus />
                <Typography>AvaProtect</Typography>
                <sup>TM</sup>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <LinkComponent />
    </React.Fragment>
  );
};

export default Navbar;
