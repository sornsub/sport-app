import { useState } from "react";
import API from "../../api/axios";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // เพิ่ม import Swal
import validatePassword from "./validatePassword";

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

const ChangePasswordNested = ({ oldPassword, newPassword, handleClose }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("userId");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleSubmitChangePassword = async (e) => {
    e.preventDefault();
    const request = { oldPassword, password: newPassword };
    const checkOldPassword = `/api/authen/check-password/${user_id}`;
    const changePassword = `api/authen/${user_id}/create-new-password`;

    //////////////////////////////////////////////////////////////////////

    // Validate password here

    if (!oldPassword || !newPassword) {
      handleClose();
      oldPassword = await validatePassword(oldPassword);
      newPassword = await validatePassword(newPassword);
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Please enter both old and new passwords",
      });
      return;
    }

    try {
      const response = await API.patch(checkOldPassword, request, {
        headers: headers,
      });
      // ตรวจสอบ response จาก backend
      if (response.status === 200) {
        const response = await API.patch(changePassword, request, {
          headers: headers,
        });
        if (response.status === 200) {
          console.log("change password success");
          Swal.fire({
            title: "Change Password Success.",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("./images/justdoit.gif")
              left top
              no-repeat
            `,
          });
          handleClose(); // ปิด Modal เมื่อสำเร็จ
        }
      } else {
        handleClose();
        Swal.fire({
          icon: "error",
          title: "Failed to change password",
          text: "Please try again later",
        });
      }
    } catch (error) {
      console.error("Error sending change password request", error.message);
      handleClose();
      Swal.fire({
        icon: "error",
        title: "An error occurred",
        text: "Please try again later",
      });
    }
  };
  return (
    <div className="md:flex justify-evenly ">
      <div className="md:w-2/5 mb-10 md:mb-0">
        <label
          className="text-left block mb-3 mt-6 text-sm"
          htmlFor="First Name"
        ></label>
        <button
          onClick={handleSubmitChangePassword}
          className="rounded-4xl text-white bg-red text-sm w-full px-5 py-2.5 text-center"
        >
          Done
        </button>
      </div>
      <div className="md:w-2/5"></div>
    </div>
  );
};

const ChangePassword = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

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
          <div className="md:flex justify-evenly ">
            <div className="md:w-2/5 mb-10 md:mb-0">
              <label
                className="text-left block mb-3 mt-6 text-sm"
                htmlFor="First Name"
              >
                Old Password
              </label>
              <input
                className="outline-0 pl-5 placeholder-white border-transparent rounded-4xl bg-blue text-black text-sm block w-full p-2.5"
                type="password"
                placeholder="old password"
                value={oldPassword}
                onChange={(ev) => setOldPassword(ev.target.value)}
              />
            </div>
            <div className="md:w-2/5"></div>
          </div>

          <div className="md:flex justify-evenly ">
            <div className="md:w-2/5 mb-10 md:mb-0">
              <label
                className="text-left block mb-3 mt-6 text-sm"
                htmlFor="First Name"
              >
                New Password
              </label>
              <input
                className="outline-0 pl-5 placeholder-white border-transparent rounded-4xl bg-blue text-black text-sm block w-full p-2.5"
                type="password"
                placeholder="new password"
                value={newPassword}
                onChange={(ev) => setNewPassword(ev.target.value)}
              />
            </div>
            <div className="md:w-2/5"></div>
          </div>

          <ChangePasswordNested
            oldPassword={oldPassword}
            newPassword={newPassword}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default ChangePassword;
