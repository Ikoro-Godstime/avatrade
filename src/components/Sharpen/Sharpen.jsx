import { Box, Container, Grid, Typography } from "@mui/material";
import { knowledge } from "./knowledge";

const Sharpen = () => {
  return (
    <Container>
      <Box sx={{ mb: 5 }}>
        <Typography
          sx={{ color: "#0B253A", fontSize: "30px", fontWeight: "700" }}
        >
          Sharpen Your Knowledge
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {knowledge.map((kn) => (
          <Grid item xs={12} md={4}>
            <Box sx={{ position: "relative" }}>
              <Box sx={{ py: 3 }}>
                <Typography
                  sx={{ fontSize: "30px", color: "#0B253A", fontWeight: "500" }}
                >
                  {kn.title}
                </Typography>
                <Typography sx={{ fontSize: "16px", fontWeight: "300", mt: 4 }}>
                  {kn.about}
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  opacity: "0.4",
                }}
              >
                <img src="/img/ava.png" alt="" />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Sharpen;
