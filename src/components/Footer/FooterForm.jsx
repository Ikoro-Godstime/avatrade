import { Box, TextField, Typography } from "@mui/material";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
  FaLinkedinIn,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const FooterForm = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h5" sx={{ color: "#fff", fontWeight: "600" }}>
          GET THE FRESHEST AVATRADE NEWS
        </Typography>

        <TextField
          placeholder="Enter your email address"
          fullWidth
          variant="standard"
          color="info"
          sx={{ mt: 3, color: "#fff", borderColor: "#fff" }}
        />
      </Box>
      <IconContext.Provider value={{ color: "#fff", size: "40px" }}>
        <Box sx={{ my: 3 }}>
          <Typography variant="h5" sx={{ color: "#fff", fontWeight: "600" }}>
            FOLLOW US
          </Typography>
          <Box sx={{ mt: 2, display: "flex" }}>
            <Box sx={{ mr: 1 }}>
              <FaFacebookSquare />
            </Box>
            <Box sx={{ mr: 1 }}>
              <FaYoutubeSquare />
            </Box>
            <Box sx={{ mr: 1 }}>
              <FaInstagramSquare />
            </Box>
            <Box sx={{ mr: 1 }}>
              <FaTwitterSquare />
            </Box>
            <Box sx={{ mr: 1 }}>
              <FaLinkedinIn />
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ color: "#fff", fontWeight: "600" }}>
            GET OUR APP
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box>
              <FaGooglePlay />
            </Box>
            <Box>
              <FaApple />
            </Box>
          </Box>
        </Box>
      </IconContext.Provider>
    </Box>
  );
};

export default FooterForm;
