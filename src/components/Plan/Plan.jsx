import React from "react";
import { plans } from "./plans";
import { Box, Paper, Typography, Button, Grid, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GrStatusGood } from "react-icons/gr";

const Plan = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ mt: 6 }}>
        <Box>
          <Box>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              OUR INVESTMENT PLAN
            </Typography>
            <Typography variant="body1" textAlign="center">
              Choose how you want to invest with us.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Container>
          <Grid container spacing={3}>
            {plans.map((plan) => (
              <Grid item xs={12} md={4}>
                <Paper sx={{ backgroundColor: "#fff" }}>
                  <Box sx={{ backgroundColor: "dodgerBlue", p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h1"
                      textAlign="center"
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontCapitalize: "uppercase",
                      }}
                    >
                      {plan.title}
                    </Typography>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography
                      variant="h4"
                      component="h1"
                      textAlign="center"
                      sx={{
                        fontWeight: "bold",
                        fontCapitalize: "uppercase",
                      }}
                    >
                      <sup>$</sup>
                      {plan.price}
                      <sub>USD</sub>
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 3 }}>
                    {plan.about.map((a) => (
                      <Box
                        sx={{
                          p: 1,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ mr: 1 }}>
                          <GrStatusGood />
                        </Box>
                        <Typography
                          gutterBottom
                          variant="body1"
                          component="p"
                          sx={{ fontWeight: "bold" }}
                        >
                          {a}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Button
                      fullWidth
                      color="primary"
                      variant="contained"
                      onClick={() => navigate("/register")}
                    >
                      Get Started !!!
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Plan;
