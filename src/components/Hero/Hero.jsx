import React from "react";
import { Box, Typography, Button, Grid, Container, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { items } from "./items";

const Hero = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/img/bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container sx={{ p: { xs: 2, md: 6 } }}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                  color: "#0B253A",
                  fontWeight: "600",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                A World-Class Trading Experience
              </Typography>
              <Typography
                variant="body1"
                component="p"
                gutterBottom
                sx={{
                  fontWeight: "300",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Be empowered to trade CFDs on FX, Stocks, Commodities, Crypto,
                Indices & Options. Get advanced tools, personalised support,
                uncompromising security.
              </Typography>
              <Link to="/auth">
                <Button
                  color="warning"
                  sx={{ py: 1, borderRadius: "3rem", fontSize: "16px", mt: 3 }}
                >
                  Register Now
                </Button>
              </Link>
              <Box sx={{ width: "30%", mt: 3 }}>
                <img src="/img/trustpilotstart.png" alt="trustPilot" />
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              {items.map((item) => (
                <Box
                  component={Paper}
                  sx={{
                    mb: 2,
                    p: 2,
                    backgroundColor: "#f4f5f5",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ width: "8%" }}>
                      <img src={item.logo} alt={item.quota} />
                    </Box>
                    <Typography sx={{ fontWeight: "500" }} textAlign="left">
                      {item.quota}
                    </Typography>
                    <Typography>{item.price}</Typography>
                    <Typography>{item.percent}</Typography>
                    <Typography>Trade</Typography>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Hero;
