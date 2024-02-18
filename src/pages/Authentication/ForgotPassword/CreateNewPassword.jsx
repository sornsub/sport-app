import React, { useState } from 'react'
import API from '../../../api/axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Joi from 'joi';

import { 
    Box,
    Container,
    Grid,
    Typography,
    ThemeProvider,
  } from "@mui/material"

import CreateNewPasswordImg from "/images/createNewPassword.jpg"
import { theme } from "../../../theme"

const CreateNewPassword = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });

  const [formErrors, setFormErrors] = useState({
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const authRoute = "api/authen";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const schema = Joi.object({
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required()
        .label('Password')
        .messages({
            'string.pattern.base': 'Password must contain only letters and numbers and be between 3 and 30 characters long'
        }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().label('Confirm Password').messages({
        'any.only': '{{#label}} does not match',
    })
});

  const handleCreateNewPassword = async (e) => {
    e.preventDefault();
    const validationResult = schema.validate(formData, { abortEarly: false });
    if (validationResult.error) {
      const errorMessage = validationResult.error.details.map(detail => {
          if (detail.context.key === 'password') {
              return `<div>Password must contain only letters and numbers and be between 3 and 30 characters long</div>`;
          }
          return `<div>${detail.message}</div>`;
      }).join('');
      MySwal.fire({
          html: errorMessage,
          icon: 'error'
      });
      return;
  }
  try {
      const requestData = {
          password: formData.password,
      }
      createNewPassword(requestData);
      
  } catch (error) {
      console.error('Error:', error);
  }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // create new password to api
  const createNewPassword = async (formData) => {

    const requestData = {
      password: formData.password
    };

    const user_id = localStorage.getItem('userId');

    const response = await API.patch(`${authRoute}/${user_id}/create-new-password`, requestData);// [POST] https://localhost:5000/api/authen/:user_id/create-new-password , requestData

    if (response.statusText === "OK") {
      Swal.fire({
          position: "center",
          icon: "success",
          title: "Reset password successfully.",
          showConfirmButton: false,
          timer: 1500
      }).then(() => {
          navigate('/login');
      });
  } else if (response.error === 'duplicate') {
      MySwal.fire({
          html: <i>{response.message}</i>,
          icon: 'error'
      });
  } else {
      MySwal.fire({
          html: <i>{response.message}</i>,
          icon: 'error'
      });
  }
  };

return (
    <ThemeProvider theme={ theme }>
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>          
          <Box sx={{
            width: '872px',
            textAlign: 'center',
          }}>
            <Typography variant="h5" component="h1" sx={{fontWeight: 'medium'}}>
                Create New Password
            </Typography>

            <Typography variant="h6" component="h6" 
                sx={{fontWeight: 'light', 
                      fontSize: 16,
                      p: 5,
                      color: '#686666'
                }}>
                Your New Password Must Be Different from Previously Used Password.
            </Typography>

                <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',}}>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: `url(${CreateNewPasswordImg})`,
                            backgroundRepeat: "no-repeat",
                            backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: 180,
                            height: 173,
                        }}
                    />
                </Box>

              <form onSubmit={handleCreateNewPassword}>
                <div className="mb-5">
                  <label htmlFor="password" 
                        className="text-left block mb-3 mt-6 text-sm text-gray-900 dark:text-white"
                  >
                    New Password
                  </label>
                  <div className="relative w-full">
                    <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="New Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        className="outline-0 pl-5 placeholder-white border-transparent rounded-4xl bg-blue bg-gray-50 text-black text-sm block w-full p-2.5" 
                    /> 
                    <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-8" onClick={togglePasswordVisibility}>
                    {showPassword ?
                        //open eye
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3.625c-4.187 0-5.945 3.766-5.945 3.844c0 .078 1.758 3.843 5.945 3.843s5.945-3.765 5.945-3.843c0-.078-1.758-3.844-5.945-3.844M2.169 5.813L.61 4.252m4.525-.354L4.5 1.843m7.331 3.97l1.559-1.56m-4.525-.355L9.5 1.843"/><path d="M5.306 7.081a1.738 1.738 0 1 0 3.388.776a1.738 1.738 0 1 0-3.388-.776"/></g></svg>
                        :
                        //close eye
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10a13.358 13.358 0 0 0 3 2.685M21 10a13.358 13.358 0 0 1-3 2.685m-8 1.624L9.5 16.5m.5-2.19a10.59 10.59 0 0 0 4 0m-4 0a11.275 11.275 0 0 1-4-1.625m8 1.624l.5 2.191m-.5-2.19a11.275 11.275 0 0 0 4-1.625m0 0l1.5 1.815M6 12.685L4.5 14.5"/></svg>
                    }
                    </button> 
                  </div>                                 
                </div>

                <div className="mb-12">
                  <label htmlFor="confirmPassword" 
                        className="text-left block mb-3 text-sm text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <div className="relative w-full">
                    <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        className="outline-0 pl-5 placeholder-white border-transparent rounded-4xl bg-blue bg-gray-50 text-black text-sm block w-full p-2.5" 
                    />
                    <span className="error">{formErrors.confirmPassword}</span>
                    <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-8" onClick={toggleConfirmPasswordVisibility}>
                      {showConfirmPassword ?
                          //open eye
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3.625c-4.187 0-5.945 3.766-5.945 3.844c0 .078 1.758 3.843 5.945 3.843s5.945-3.765 5.945-3.843c0-.078-1.758-3.844-5.945-3.844M2.169 5.813L.61 4.252m4.525-.354L4.5 1.843m7.331 3.97l1.559-1.56m-4.525-.355L9.5 1.843"/><path d="M5.306 7.081a1.738 1.738 0 1 0 3.388.776a1.738 1.738 0 1 0-3.388-.776"/></g></svg>
                          :
                          //close eye
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10a13.358 13.358 0 0 0 3 2.685M21 10a13.358 13.358 0 0 1-3 2.685m-8 1.624L9.5 16.5m.5-2.19a10.59 10.59 0 0 0 4 0m-4 0a11.275 11.275 0 0 1-4-1.625m8 1.624l.5 2.191m-.5-2.19a11.275 11.275 0 0 0 4-1.625m0 0l1.5 1.815M6 12.685L4.5 14.5"/></svg>
                      }
                    </button> 
                  </div>
                </div>                  
                  <button type="submit" 
                          className="rounded-4xl text-white bg-pink text-sm w-full px-5 py-2.5 text-center"
                  >
                    Save
                  </button>
              </form>
            </Box>
      </Container>
    </ThemeProvider>
  )
}

export default CreateNewPassword