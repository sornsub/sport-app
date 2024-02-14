import { Box } from "@mui/material";

import Swipers from "./Swipers";

export const LayoutDesk = ({ children }) => {
  return (
    <div className="bg-pink h-full text-white">
      <div className="flex h-[200px] justify-between">
        <Box className="mr-[20px]">
          {/* picture */}
          <img
            src="images/logoRemoveBg.png"
            className="size-52 pl-6 object-cover"
          />
        </Box>
        {/* Intro nav menu */}
        <Box className="flex gap-x-20 items-center pr-5">
          <a href="#">
            <strong>Service</strong>
          </a>
          <a href="#">Why us</a>
          <a href="#">Pricing</a>
          <a href="#">Review</a>
        </Box>
        {/* Register and Sign in button */}
        <Box className="flex gap-x-10 items-center p-5">
          <button
            type="submit"
            className="shadow-lg outline-0 w-[150px] border-transparent rounded-4xl text-white block w-full p-2.5 bg-blue hover:opacity-70"
          >
            <a href="/signup">Register</a>
          </button>
          <button
            type="submit"
            className="shadow-lg outline-0 w-[180px] border-transparent rounded-4xl bg-blue bg-gray-50 text-white block w-full p-2.5 hover:opacity-70"
          >
            <a href="/login">Sign in</a>
          </button>
        </Box>
      </div>
      {/* ปลุกใจในตัวคุณ */}
      <div className="flex flex-col ml-40">
        <span className="">พร้อมสู้</span>
        <span>กายพร้อม ใจพร้อม</span>
        <span>เราทำได้</span>
      </div>
      {/* Swiper */}
      <Box>
        <Swipers />
      </Box>
    </div>
  );
};

export default LayoutDesk;
