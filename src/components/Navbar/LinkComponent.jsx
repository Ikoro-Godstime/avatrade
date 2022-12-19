import { Box, Typography, Button, IconButton, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { links } from "./links";

const LinkComponent = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          py: 3,
        }}
        component={Container}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {links.map((link, index) => (
            <Link to={link.path} key={index} style={{ marginRight: "1.6rem" }}>
              <Typography sx={{ color: "#000" }}>{link.title}</Typography>
            </Link>
          ))}
          <IconButton disableRipple size="small" sx={{ mx: 2 }}>
            <FiSearch />
          </IconButton>
        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="/auth" style={{ marginRight: "2rem" }}>
              <Typography variant="body1" sx={{ fontWeight: "400" }}>
                Login
              </Typography>
            </Link>
            <Link to="/auth">
              <Button
                color="warning"
                sx={{ py: 1, borderRadius: "3rem", fontSize: "16px" }}
              >
                Register Now
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LinkComponent;
