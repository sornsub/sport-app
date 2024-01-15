import { Box } from "@mui/material";
import { Button, Navbar } from "flowbite-react";
import React from "react";
import { sizing } from "@mui/system";
import { LayoutDesk } from "./LayoutDesk";

const LandingPageDesk1 = () => {
  return (
    <LayoutDesk>
      <Box className="container">
        <Box className="header">
          <Box
            className="header-top"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Box sx={{ width: 2 / 4 }}>Logo</Box>
            <Box sx={{ width: 2 / 4 }}>
              Profile and Signin register and seach bar
            </Box>
          </Box>
          <Box className="header-bottom">
            <Button>weight</Button>
            <Button>Yoga</Button>
            <Button>Running</Button>
            <Button>Hike</Button>
          </Box>
        </Box>
        <img
          src="./images/landingPage1.jpg"
          sx={{ width: 1 }}
          className="w-full"
        />
      </Box>
    </LayoutDesk>
  );
};

export default LandingPageDesk1;
