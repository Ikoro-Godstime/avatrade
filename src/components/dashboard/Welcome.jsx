import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Skeleton, Button, Alert } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
// import Toast
import { toast } from "react-toastify";
// import Firebase functions
import { getDoc, doc } from "firebase/firestore";
// import setter functions
import { store } from "../../firebase";
// user context
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  toast.configure();
  const { user } = useContext(UserContext);

  // set State for Name
  const [name, setName] = useState(null);

  // react router
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const docRef = doc(store, "/users", `${user.email}`);
        const userDetails = await getDoc(docRef);

        setName(userDetails.data());
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, [user.email]);

  return (
    <Box>
      <Box>
        <Typography variant="h6" color="GrayText" gutterBottom>
          Welcome
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          {name ? (
            <Typography variant="h4" gutterBottom>
              {name.name}
            </Typography>
          ) : (
            <Skeleton variant="text" />
          )}

          <Typography variant="subtitle1" color="GrayText">
            Here's a summary of your account. Have fun!
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button
            sx={{
              backgroundColor: "#364A63",
              fontWeight: "500",
              "&:hover": {
                backgroundColor: "darkblue",
              },
            }}
            endIcon={<FaArrowRight size="12px" />}
            onClick={() => navigate("/invest")}
          >
            Invest & Earn
          </Button>
          <Button
            sx={{ backgroundColor: "#037DFF", fontWeight: "500", mx: 1 }}
            endIcon={<FaArrowRight size="12px" />}
            onClick={() => navigate("/deposit")}
          >
            Deposit
          </Button>
        </Box>
      </Box>
      <Box>
        <Alert variant="outlined" severity="warning">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography variant="body1">
                Add an account that you’d like to receive payment or withdraw
                fund.
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{
                  fontWeight: "500",
                  backgroundColor: "orange",
                  my: 2,
                  "&:hover": {
                    backgroundColor: "lightyellow",
                    color: "orange",
                  },
                }}
                size="small"
                onClick={() => navigate("/withdraw")}
              >
                Add Account
              </Button>
            </Box>
          </Box>
        </Alert>
      </Box>
    </Box>
  );
};

export default Welcome;
