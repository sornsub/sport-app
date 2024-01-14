import { Box } from "@mui/material";
import Navbar from "./Nav";
import Layout from "./Layout";

const LandingPage6 = () => {
  return (
    <Layout>
      <Box>
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
        <img src="./images/login.jpg" />
      </Box>
    </Layout>
  );
};

export default LandingPage6;
