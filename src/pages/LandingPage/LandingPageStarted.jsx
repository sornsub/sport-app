import { Box } from "@mui/material";
import Navbar from "./Nav";

const LandingPageStarted = () => {
  return (
   
      <Box>
        <Navbar />
        <div>
          <h1>Start Right now</h1>
          <p>
            Simple, flexible, built for you. Discover personal training,
            reimagined. This time, fitness revolves around you. Your{" "}
            <strong>schedule</strong>, your <strong>workouts</strong> ,{" "}
            <strong>your coach</strong>.
          </p>
          <button>Get started now</button>
        </div>
        <img src="./images/landingPage5.jpg" />
      </Box>
    
  );
};

export default LandingPageStarted;
