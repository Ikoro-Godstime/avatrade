import React, { useContext } from "react";
import { Typography, Box, Paper, Grid, Button } from "@mui/material";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { store } from "../../firebase";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { plans } from "../Plan/plans";

const Investment = () => {
  toast.configure();

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const addInvestment = async (amount, plan) => {
    try {
      // get the user deposit
      const docRef = doc(store, "/users", `${user.email}`);
      const userDetails = await getDoc(docRef);
      const balanceAmount = userDetails.data().balance;
      const depositedAmount = userDetails.data().deposited;
      const totalPackages = userDetails.data().totalPackages;
      console.log({ balanceAmount, depositedAmount, totalPackages });
      if ((amount > balanceAmount) | (amount > depositedAmount)) {
        toast.error("insufficent Fund", {
          theme: "colored",
          position: "bottom-center",
        });
        navigate("/deposit");
      } else {
        await updateDoc(docRef, {
          balance: depositedAmount - amount,
          totalPackages: totalPackages + 1,
          activePages: plan,
        });

        toast.info("Request Submitted", {
          theme: "colored",
          position: "top-center",
        });

        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box>
        <Typography variant="body1" component="div">
          Choose a plan to Invest In...
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={3}>
          {plans.map((plan) => (
            <Grid item xs={12} md={5}>
              <Paper sx={{ p: 2, backgroundColor: "#fff" }}>
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="div"
                    color="GrayText"
                  >
                    {plan.title}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                    <sub>$</sub>
                    <Typography
                      variant="h6"
                      component="div"
                      gutterBottom
                      color="dodgerblue"
                      sx={{ fontWeight: "bold" }}
                    >
                      {plan.price}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Features
                    </Typography>
                    <Typography
                      variant="body2"
                      component="div"
                      gutterBottom
                      sx={{ my: 2 }}
                    >
                      Duration : {plan.Duration}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="div"
                      gutterBottom
                      sx={{ my: 2 }}
                    >
                      Minimum Withdrawal : $10
                    </Typography>
                    <Typography
                      variant="body2"
                      component="div"
                      gutterBottom
                      sx={{ my: 2 }}
                    >
                      Portfoilo Tracker
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ mt: 2, mb: 2 }}>
                  <Button
                    color="primary"
                    fullWidth
                    onClick={() => addInvestment(plan.min, plan.title)}
                  >
                    Get Started !!
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Investment;
