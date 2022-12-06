import * as React from "react";
import PropTypes from "prop-types";
import { AppBar, Box, Drawer, Toolbar, CssBaseline } from "@mui/material";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
// import firebase functions
import { doc, getDoc } from "firebase/firestore";
import { store } from "../../firebase";

// user context
import { UserContext } from "../../context/UserContext";

const drawerWidth = 340;

const Layout = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // details
  const [details, setDetails] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /// user context
  const { user } = React.useContext(UserContext);

  // useEffect
  React.useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const docRef = doc(store, "/users", `${user.email}`);
        const userDetails = await getDoc(docRef);

        return setDetails(userDetails.data());
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, [details, user.email]);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex", bgcolor: "background.default" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            bgcolor: "#fff",
          }}
          elevation={1}
        >
          <Navbar details={details} openMobile={handleDrawerToggle} />
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <SideNav details={details} />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <SideNav details={details} />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {props.children}
        </Box>
      </Box>
    </>
  );
};

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
