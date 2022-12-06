import { Box, Typography } from "@mui/material";
import React from "react";
import { AdvancedChart } from "react-tradingview-embed";

const TradingViews = () => {
  return (
    <div>
      <Box sx={{ mt: 4 }}>
        <AdvancedChart
          widgetProps={{
            theme: "light",
            height: "500px",
            allow_symbol_change: "true",
          }}
        />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="caption" textAlign="center">
          avatrade.cc © 2022
        </Typography>
      </Box>
    </div>
  );
};

export default TradingViews;
