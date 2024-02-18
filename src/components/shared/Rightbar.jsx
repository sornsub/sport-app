import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import API from "../../api/axios";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { Box, Typography, ThemeProvider } from "@mui/material";

import AvatarImg from "/images/default_avatar.png";
import { theme } from "./../../theme";
import formatDate from '../../utils/formatDate';
import ExerciseActivityAPI from '../../api/services/exerciseActivity';

const drawerWidth = 310;

const Rightbar = () => {
  const [user, setUser] = useState([]);
  const [dob, setDob] = useState();
  const [favActivityTypes, setFavActivityTypes] = useState([]);

  const userRoute = "api/users";
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    getUserDataById();
    getFavActivityTypeByUserId();
  }, []);

  //get user data
  const getUserDataById = async () => {
    const user_id = localStorage.getItem('userId');
    const response = await API.get(`${userRoute}/${user_id}`, {
      headers: headers,
    }); // [GET] https://localhost:5000/api/users
    if (response.status === 200 && response.data.data) {
      setUser(response.data.data);
      //Convert format date
      const dateOfBirth = formatDate.convertDateFormat(user.date_of_birth);
      setDob(dateOfBirth);
    }
  };
  
  const getFavActivityTypeByUserId = async () => {
    const user_id = localStorage.getItem('userId');
    const response = await ExerciseActivityAPI.getFavoriteActivityTypeByUserId(user_id);
    if (response.success === true && response.data) {
      setFavActivityTypes(response.data);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              height: "100%",
              boxSizing: "border-box",
              bgcolor: "primary.main",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <Divider />
          <div className="max-w-full">
            <img
              src={
                user.avatar !== null || user.avatar !== "undefined"
                  ? user.avatar
                  : AvatarImg
              }
              className="object-cover h-auto max-w-full"
            />
          </div>
          <Box sx={{ height: "100%", m: 4, color: "primary.black" }}>
            <input type="hidden" id="id" value={user._id} />
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: "medium",
                display: "flex",
                justifyContent: "center",
                mb: 2,
              }}
            >
              {`Hi, ${user.firstName} ${user.lastName}`}
              <br />
              {`@${user.userName}`}
            </Typography>

            <Typography variant="p" component="h2">
              Email: {user.email}
            </Typography>
            <Typography variant="p" component="h2">
              Phone: {user.phone}
            </Typography>
            <Typography variant="p" component="h2">
              {`Date of Birth: ${dob}`}
            </Typography>
            <Typography variant="p" component="h2">
              {`Gender: ${user.gender}`}
            </Typography>
            <Typography variant="p" component="h2">
              {`Height: ${user.height} cm`}
            </Typography>
            <Typography variant="p" component="h2">
              {`Weight: ${user.weight} kg`}
            </Typography>
          </Box>
          <div className="mb-5 flex justify-center items-center">
            <a href="/edit-profile">
              <button className="font-semibold rounded-4xl p-2 text-center w-fit h-10 bg-white text-pink">
                Edit profile
              </button>{" "}
            </a>
          </div>
          <Divider />
          <Box sx={{ height: "100%", m: 4, color: "primary.black" }}>
            <Typography variant="p" component="h2" sx={{ mb: 2 }}>
              Favorite Activity
            </Typography>
            {/* TODO: waitting for activity type api */}
            <div className="flex-wrap gap-6 mb-3 flex text-black h-10 w-full">
            {favActivityTypes.map((favActivityType,index) => (
              <Link to="/activity-type">
                <div key={index} className="whitespace-nowrap p-2 rounded-4xl bg-white">
                  {favActivityType.activity_type_name}               
                </div>
              </Link>
            ))}
            </div>
          </Box>
        </Drawer>
      </ThemeProvider>
    </>
  );
};

export default Rightbar;
