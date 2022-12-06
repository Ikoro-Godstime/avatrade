import { Box, Grid } from "@mui/material";
import { MiniChart } from "react-tradingview-embed";

const ChartGrid = () => {
  return (
    <Box sx={{ my: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Box>
            <MiniChart
              widgetProps={{
                colorTheme: "light",
                height: "220",
                width: "100%",
                symbol: "BINANCE:BTCUSDT",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <MiniChart
              widgetProps={{
                colorTheme: "light",
                height: "220",
                width: "100%",
                symbol: "CURRENCYCOM:USDTUSD",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChartGrid;
