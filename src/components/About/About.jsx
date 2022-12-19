import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import Slider from "react-slick";
import { about } from "./lists";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ color: "#0B253A", my: 2, fontWeight: "semiBold" }}
        textAlign="center"
      >
        You're in good Company
      </Typography>
      <div>
        <Slider {...settings}>
          {about.map((ab) => (
            <Box
              sx={{
                p: 2,
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                height: "300px",
              }}
            >
              <Typography
                sx={{ color: "#0B253A", fontWeight: "400" }}
                textAlign="center"
              >
                {ab.title}
              </Typography>

              <Typography sx={{ color: "#000", my: 3 }} textAlign="center">
                {ab.about}
              </Typography>
              <Typography sx={{ color: "#cecece", my: 3 }} textAlign="center">
                {ab.person}
              </Typography>
              <Box
                sx={{
                  width: "10%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="/img/trustpilotstart.png" alt="trustpilot" />
              </Box>
            </Box>
          ))}
        </Slider>
      </div>
    </Box>
  );
};

export default About;
