import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Navigate } from "react-router-dom";
import Navbar from "./Nav";




const Layout = ({children}) => {
  return (
    <div className="xl">
      <Navbar/>
      {children}
      <div>
        <h1>Workout anywhere</h1>
        <p>
          You can do your workout at home without any equipment, outside or at
          the gym.
        </p>
        <div>
          <Pagination
            count={4}
            renderItem={(item) => (
              <PaginationItem  slots={{ next: ArrowForwardIcon }} {...item} />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;

