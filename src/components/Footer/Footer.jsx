import { Box, Container, Grid, Typography } from "@mui/material";
import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#0B253A", p: 4 }}>
      <Container>
        <Box
          sx={{
            width: { xs: "10%", md: "5%" },
            mx: "auto",
            my: 5,
          }}
        >
          <img src="/img/footer-logo.png" alt="footer logo" />
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={12} md={8}>
            <Box sx={{ mt: 3 }}>
              <Typography variant="body1" component="p" sx={{ color: "#fff" }}>
                AVA Trade EU Ltd is regulated by the Central Bank of Ireland.
                (No.C53877) Ava Trade Markets Ltd. is regulated by the B.V.I
                Financial Services Commission Ava Capital Markets Australia Pty
                Ltd is regulated by the ASIC No.406684.
              </Typography>
              <Typography variant="body1" component="p" sx={{ color: "#fff" }}>
                Ava Capital Markets Pty is regulated by the South African
                Financial Sector Conduct Authority (FSCA No.45984).
              </Typography>
              <Typography variant="body1" component="p" sx={{ color: "#fff" }}>
                Ava Trade Japan K.K. is licensed and regulated in Japan by the
                Financial Services Agency (License No.: 1662), the Financial
                Futures Association of Japan (License No.: 1574).
              </Typography>
              <Typography variant="body1" component="p" sx={{ color: "#fff" }}>
                Ava Trade Middle East Ltd is regulated by the Abu Dhabi Global
                Markets (ADGM) Financial Regulatory Services Authority (FRSA)
                (No.190018). DT Direct Investment Hub Ltd. is regulated by the
                Cyprus Securities and Exchange Commission (No. 347/17).
              </Typography>
              <Typography variant="body1" component="p" sx={{ color: "#fff" }}>
                ATrade Ltd is regulated in Israel by the Israel Securities
                Authority (No. 514666577). Read AvaTrade risk disclosure before
                trading Forex, CFD’s, and/or FX Options. Forex, CFD and FX
                Options trading involves substantial risk of loss and is not
                suitable for all investors.
              </Typography>
              <Typography variant="body1" component="p" sx={{ color: "#fff" }}>
                Copyright © 2007-2022 Ava Trade Markets Ltd. All rights
                reserved.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <FooterForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
