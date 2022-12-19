import { Box, Typography, Container, Grid } from "@mui/material";
import { reasons } from "./reasons";

const Reason = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#0B253A" }}>
        <Container>
          <Box sx={{ py: 4 }}>
            <Typography
              variant="h4"
              component="h4"
              gutterBottom
              sx={{ color: "#fff", pt: 3, fontWeight: "700", fontSize: "30px" }}
            >
              What Makes AvaTrade Different?
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              gutterBottom
              sx={{ color: "#fff", fontWeight: "300", fontSize: "20px" }}
            >
              Join Over 1 Million Returning Clients who already made the right
              choice
            </Typography>
          </Box>
          <Grid container spacing={3} sx={{ mt: { xs: 2, md: 5 } }}>
            {reasons.map((reason) => (
              <Grid item xs={12} md={4} key={reason.id}>
                <Box sx={{ position: "relative", py: 3 }}>
                  <Box>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "24px",
                        fontWeight: "700",
                        mb: 3,
                        textTransform: "capitalize",
                      }}
                    >
                      {reason.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: "300",
                      }}
                    >
                      {reason.about}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        color: "#f1f1f1",
                        fontSize: { xs: "150px", md: "250px" },
                        fontWeight: "500",
                        opacity: "0.3",
                      }}
                    >
                      {reason.id}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Reason;
