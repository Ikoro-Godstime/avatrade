import { Container, Paper, Box, Tab, Tabs, Typography } from "@mui/material";
import { outerBox, paperStyle, alignItems } from "../style/authStyle";
import { useState, useEffect } from "react";
import RegisterForm from "../components/register-form/Form";
import LoginForm from "../components/login-form/Form";
import { symbols } from "../utlis/coins";
import { TickerTape } from "react-tradingview-embed";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const Auth = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.tidio.co/snl3qnlltg2jt07n00nymf66ahlzlnpf.js";
    document.body.append(script);
  }, []);

  return (
    <>
      <Box sx={outerBox}>
        <Container sx={{ width: { sm: "90%", md: "40%" }, mx: "auto" }}>
          <Box>
            <Paper sx={paperStyle}>
              <Box>
                <Tabs value={value} onChange={handleChange} centered>
                  <Tab label="Register" />
                  <Tab label="Login" />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <RegisterForm />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <LoginForm />
                </TabPanel>
              </Box>
              <Box sx={alignItems}>
                <Typography variant="caption" textAlign="center" gutterBottom>
                  © avatrade.cc
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
      <Box>
        <TickerTape widgetProps={{ symbols }} />
      </Box>
    </>
  );
};

export default Auth;


