import { Box, Container, Typography } from "@mui/material";
import VerificationForm from "./VerificationForm";

const VerficationContainer = () => {
  return (
    <Container>
      <Box>
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{ color: "#364A63" }}
        >
          Identity Verification
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ color: "67668B" }}
          gutterBottom
        >
          To comply with regulation you will have to go through identity
          verification.
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          sx={{
            color: "#364D77",
            fontWeight: "500",
          }}
        >
          Complete the verification steps below.
        </Typography>
      </Box>
      <VerificationForm />
    </Container>
  );
};

export default VerficationContainer;
