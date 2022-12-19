import { Box, Typography } from "@mui/material";
import { country } from "./country";

const Countries = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {country.map((c) => (
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: { xs: "flex-start", md: "center" },
            my: 2,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ mx: { xs: 0, md: 2 }, justifyItem: "center" }}>
            <img src={c.img} alt="logo" />
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography
              sx={{ color: "#1A253A", fontWeight: "600", fontSize: "11px" }}
            >
              {c.name}
            </Typography>
            <Typography sx={{ fontWeight: "300", fontSize: "11px" }}>
              {c.about}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Countries;
