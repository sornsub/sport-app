import { useEffect, useState } from "react";
import validator from "validator";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import isLength from "validator/lib/isLength";
import isAlpha from "validator/lib/isAlpha";
import equals from "validator/lib/equals";
import isStrongPassword from "validator/lib/isStrongPassword";
import isNumeric from "validator/lib/isNumeric";
import toDate from "validator/lib/toDate";
import toInt from "validator/lib/toInt";
import axios, { isCancel, AxiosError } from "axios";
import { Link } from "react-router-dom";
import Navmenu from "../../components/shared/Navmenu";
import Copyright from "../../components/shared/Copyright";
import Navbar from "../../components/shared/Navbar";
import API from "../../api/axios";
import UploadImage from "../../components/UploadImage/UploadImage";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ChangePasswordNested = ({ oldPassword, newPassword }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleSubmitChangePassword = async (e) => {
    e.preventDefault();
    const request = { oldPassword, newPassword };
    const checkOldPassword = `/api/authen/check-password/${userId}`;
    const changePassword = `/api/users/${userId}`;
    try {
      const response = await API.post(checkOldPassword, request, {
        headers: headers,
      });
      // ตรวจสอบ response จาก backend
      if (response.status === 200) {
        const response = await API.post(changePassword, request, {
          headers: headers,
        });
        if (response.status === 200) console.log('change password success');
      } else {
        alert("Failed to change password");
      }
    } catch (error) {
      console.error("Error sending change password request", error);
      alert("An error occurred while sending data to the backend.");
    }
    // navigate("/login");
  };
  return (
    <button
      onClick={handleSubmitChangePassword}
      className="rounded-4xl text-white bg-red text-sm w-full px-5 py-2.5 text-center"
    >
      Change Password
    </button>
  );
};

const ChangePassword = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  return (
    <div className="flex justify-center">
      <button
        onClick={handleOpen} 
        className="rounded-4xl text-white bg-pink text-sm w-full px-5 py-2.5 text-center"
        >
        Change Password
      </button>
      <Modal
        className="self-center"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="rounded-4xl text-black bg-red text-sm w-full px-5 py-2.5 text-center"
        >
          <input
            className="outline-0 pl-5 placeholder-white border-transparent rounded-4xl bg-blue text-black text-sm block w-full p-2.5"
            type="text"
            placeholder="old password"
            value={oldPassword}
            onChange={(ev) => setOldPassword(ev.target.value)}
          />
          <input
            className="outline-0 pl-5 placeholder-white border-transparent rounded-4xl bg-blue text-black text-sm block w-full p-2.5"
            type="text"
            placeholder="new password"
            value={newPassword}
            onChange={(ev) => setNewPassword(ev.target.value)}
          />
          <ChangePasswordNested
            oldPassword={oldPassword}
            newPassword={newPassword}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default ChangePassword;
