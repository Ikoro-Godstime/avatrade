import { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import { FaBars } from "react-icons/fa";
import { links } from "./links";
import { Link } from "react-router-dom";

const MobileNav = () => {
  //  toggle function and State for the Navigation bar
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleMobileDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // drawer components
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleMobileDrawer}
      onKeyDown={toggleMobileDrawer}
    >
      <List>
        {links.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link to={text.path}>
                <ListItemText primary={text.title} sx={{ color: "#000" }} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <Box
          sx={{
            p: 1,
            display: "flex",

            alignItems: "center",
          }}
        >
          <Link to="/auth">
            <Button
              color="warning"
              sx={{
                py: 1,
                borderRadius: "3rem",
                fontSize: "16px",
                mt: 3,
                fontWeight: "500",
              }}
            >
              Join Us
            </Button>
          </Link>
          <Link to="/auth">
            <Button
              color="warning"
              variant="outlined"
              sx={{
                py: 1,
                borderRadius: "3rem",
                fontSize: "16px",
                mt: 3,
                mx: 2,

                fontWeight: "500",
              }}
            >
              login
            </Button>
          </Link>
        </Box>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar sx={{ display: { xs: "block", md: "none" } }} position="static">
        <Toolbar>
          <IconButton onClick={toggleMobileDrawer} disableRipple>
            <FaBars color="#000" />
          </IconButton>
          <Box>
            <img src="/img/logo.svg" alt="avatrade logo" />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleMobileDrawer}
        PaperProps={{
          sx: { backgroundColor: "#f4f4f5f4" },
        }}
      >
        {list()}
      </Drawer>
    </>
  );
};

export default MobileNav;
