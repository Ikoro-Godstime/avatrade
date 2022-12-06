import {
  Box,
  Typography,
  Button,
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { links } from "./sidebar";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { IconContext } from "react-icons";

const SideNav = ({ details }) => {
  const navigate = useNavigate();

  const router = (href) => {
    navigate(href);
  };

  const logOut = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Box sx={{ p: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            my: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "169px",
              alignSelf: "flex-start",
              p: 3,
              display: { xs: "none", md: "block" },
            }}
          >
            <img src="/img/logo.svg" alt="logo" />
          </Box>
          <Box
            sx={{
              alignSelf: "flex-start",
              p: 3,
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: "11px", color: "#b7c2d0" }}
              gutterBottom
            >
              MAIN ACCOUNT BALANCE
            </Typography>
            {details ? (
              <Typography
                sx={{ fontWeight: "500", fontSize: "24px", color: "#037dff" }}
              >
                {`${details.balance}.00`} <sub>USD</sub>
              </Typography>
            ) : (
              <Skeleton variant="text" />
            )}
            {details ? (
              <Typography
                sx={{ fontWeight: "500", fontSize: "14px", color: "grayText" }}
              >
                {details.balance / 17000} <sub>BTC</sub>
              </Typography>
            ) : (
              <Skeleton variant="text" />
            )}
          </Box>
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "flex-start",
              p: 3,
            }}
          >
            <Button
              sx={{ color: "#fff", mr: 2 }}
              onClick={() => router("/deposit")}
            >
              Deposit
            </Button>
            <Button
              color="warning"
              sx={{ color: "#fff" }}
              onClick={() => router("/withdraw")}
            >
              Withdraw
            </Button>
          </Box>
          <Box sx={{ alignSelf: "flex-start", pl: 3 }}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "11px", color: "#b7c2d0" }}
            >
              MENU
            </Typography>
          </Box>
          <Box sx={{ alignSelf: "flex-start", p: 3 }}>
            <List>
              {links.map((link) => (
                <ListItem disablePadding key={link.text}>
                  <ListItemButton onClick={() => router(link.path)}>
                    <ListItemIcon sx={{ minWidth: "23px" }}>
                      {link.icon}
                    </ListItemIcon>
                    <ListItemText primary={link.text} sx={{ color: "#fff" }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ alignSelf: "flex-start" }}>
            <List>
              <ListItem>
                <ListItemButton onClick={logOut}>
                  <ListItemText
                    primary="Go Back to Main Site"
                    sx={{ color: "#fff" }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </IconContext.Provider>
  );
};

export default SideNav;
