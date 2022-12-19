import { Box, Typography, Container } from "@mui/material";
import { firstPartners, secondPartners } from "./partners";

const Trusted = () => {
  return (
    <>
      <Box sx={{ p: 2, backgroundColor: "#F1F1F1" }}>
        <Typography
          variant="h4"
          component="h4"
          textAlign="center"
          sx={{ color: "#0B253A" }}
        >
          Trusted By
        </Typography>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            my: 2,
          }}
        >
          {firstPartners.map((partner) => (
            <Box key={partner.id}>
              <img src={partner.image} alt="img" />
            </Box>
          ))}
        </Container>
      </Box>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          my: 2,
          gap: "1rem",
          overflowX: { xs: "scroll", md: "hidden" },
          p: 2,
        }}
      >
        {secondPartners.map((partner) => (
          <Box key={partner.id}>
            <img src={partner.image} alt="img" />
          </Box>
        ))}
      </Container>
      <Box>
        <Typography variant="subtitle1" textAlign="center" sx={{ my: 2 }}>
          *Some Payment Options may not be available in your country
        </Typography>
      </Box>
    </>
  );
};

export default Trusted;
