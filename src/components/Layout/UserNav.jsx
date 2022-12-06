import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  Skeleton,
} from "@mui/material";
import { FaWallet, FaUserAlt, FaPowerOff } from "react-icons/fa";
import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const UserNav = ({ details }) => {
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <Paper
      sx={{
        position: "absolute",
        right: 4,
        mx: 2,
        backgroundColor: "#fff",
        borderTopColor: "dodgerBlue",
        borderTopWidth: "2px",
        borderTopStyle: "solid",
      }}
    >
      {/* container */}
      <Box>
        {/* user Profile Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            backgroundColor: "#F5F6FA",
          }}
        >
          <Box>
            <Avatar alt="JO" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: 3,
            }}
          >
            {details ? (
              <Typography
                variant="subtitle2"
                sx={{ color: "#40536B", fontWeight: "bold" }}
              >
                {details.name}
              </Typography>
            ) : (
              <Skeleton variant="text" />
            )}
            {details ? (
              <Typography variant="subtitle2" sx={{ color: "GrayText" }}>
                {details.email}
              </Typography>
            ) : (
              <Skeleton variant="text" />
            )}
          </Box>
        </Box>
        <Box sx={{ my: 2, p: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ color: "#8094AE", letterSpacing: "1.5px" }}
          >
            ACCOUNT BALANCE
          </Typography>
          {details ? (
            <Typography
              sx={{
                color: "#037dff",
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              {`${details.balance}.00`} <sub>USD</sub>
            </Typography>
          ) : (
            <Skeleton variant="text" />
          )}
          {details ? (
            <Typography
              sx={{
                color: "#526484",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              {details.balance / 17000} BTC
            </Typography>
          ) : (
            <Skeleton variant="text" />
          )}
        </Box>
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
            <Typography
              sx={{
                fontSize: "13.6px",
                fontWeight: "400",
                color: "#0892FB",
                cursor: "pointer",
                mr: 2,
              }}
              onClick={() => navigate("/deposit")}
            >
              Deposit Funds
            </Typography>
            <FaWallet color="#0892FB" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
            <Typography
              sx={{
                fontSize: "13.6px",
                fontWeight: "400",
                color: "#0892FB",
                cursor: "pointer",
                mr: 2,
              }}
              onClick={() => navigate("/withdraw")}
            >
              Withdraw Funds
            </Typography>
            <FaWallet color="#0892FB" />
          </Box>
        </Box>
        <Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/account")}>
                <ListItemIcon sx={{ minWidth: "24px" }}>
                  <FaUserAlt />
                </ListItemIcon>
                <ListItemText primary="View Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={logOut}>
                <ListItemIcon sx={{ minWidth: "24px" }}>
                  <FaPowerOff />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Paper>
  );
};

export default UserNav;
