import { Box } from "@mui/material";

import Swipers from "./Swipers";

export const LayoutDesk = ({ children }) => {
  return (
    <Box className="container h-full w-auto bg-pink text-white">
      <Box className="">
        <Box className="mx-4">
          <Box className="">
            <img
              src="images/logoFitness.jpg"
              className="size-28 pl-6 object-cover"
            />
          </Box>
          <Box className="flex gap-x-10 items-center ">
            <button
              type="submit"
              className="outline-0 pl-5 border-transparent rounded-4xl bg-blue bg-gray-50 text-white block w-full p-2.5"
            >
              <a href="/signup">Register</a>
            </button>
            <button
              type="submit"
              className="outline-0 pl-5 border-transparent rounded-4xl bg-blue bg-gray-50 text-white block w-full p-2.5"
            >
              <a href="/signup">Sign in</a>
            </button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Swipers />
      </Box>
    </Box>
  );
};

export default LayoutDesk;
