import { Container, Grid, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <Container>
      <Grid container spacing={4} sx={{ py: 5 }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography
              variant="h4"
              component="h4"
              sx={{
                textAlign: { xs: "center", md: "left" },
                color: "#0B253A",
                fontWeight: "500",
              }}
              gutterBottom
            >
              Become Our Partner in Trade
            </Typography>
            <Typography
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
              gutterBottom
            >
              Boost your customer base and join an active community of over
              145,000 registered partners!
            </Typography>
            <Link to="/auth">
              <Button
                color="primary"
                sx={{
                  py: 1,
                  borderRadius: "3rem",
                  fontSize: "16px",
                  mt: 3,
                  fontWeight: "500",
                }}
              >
                Become A Partner
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img src="/img/avapartner-pc.png" alt="partner" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Partners;
