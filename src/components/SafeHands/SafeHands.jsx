import { Box, Button, Container, Typography, Grid } from "@mui/material";
import Countries from "./Countries";
import { Link } from "react-router-dom";

const SafeHands = () => {
  return (
    <Container sx={{ my: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mb: 12,
          p: 3,
        }}
      >
        <Typography
          sx={{ color: "#0B253A", fontSize: "30px", fontWeight: "500", my: 3 }}
        >
          You're in Safe Hands
        </Typography>
        <Typography sx={{ my: 4 }}>
          AvaTrade is regulated across 9 jurisdictions, with a wide global
          corporate presence.
        </Typography>
        <Link to="/auth">
          <Button
            color="warning"
            sx={{
              py: 1,
              px: 2,
              borderRadius: "3rem",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Register Now
          </Button>
        </Link>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: { xs: "40%", md: "80%" }, mx: "auto" }}>
            <img src="/img/map.png" alt="map" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Countries />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SafeHands;
