import React, { useState } from 'react'
import API from '../../../api/axios';

import { 
    Box,
    Container,
    Grid,
    Typography,
    ThemeProvider,
  } from "@mui/material"

import ForgotPasswordImg from "/images/forgotpassword.jpg"
import { theme } from "../../../theme"
import { Link } from "react-router-dom"

const ForgotPassword = () => {

  const [formData, setFormData] = useState({
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
  });

  const authRoute = "api/authen";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (validateForm()) {
      forgotPassword(formData);
      console.log("Form data submitted:", formData);
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  }

      // forgot password to api
      const forgotPassword = async (email) => {
        const requestData = {
        email: email,
        };
        console.log(requestData);
        const response = await API.post(`${authRoute}/forgot-password`, requestData);// [POST] https://localhost:5000/api/users , requestData

        if (response.status === 201) {
        setReload(!reload);
        }

        console.log(response);
    };


  return (
          <>
          <ThemeProvider theme={ theme }>
            <Container
              sx={{
                height: '100vh',          
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Box
                sx={{
                  width: 760,
                  height: 480,
                  borderRadius: '20px',
                  bgcolor: 'primary.white',
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)',
                }}
                >
      
                <Grid
                  item
                  xs={false}
                  sm={4}
                  md={7}
                  sx={{
                    backgroundImage: `url(${ForgotPasswordImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundColor: (t) =>
                      t.palette.mode === "light"
                        ? t.palette.grey[50]
                        : t.palette.grey[900],
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: 380,
                    height: 480,
                    borderRadius: '18px 0 0 18px',
                  }}
                />
      
                <Grid item xs={false} sm={4} md={7} 
                  sx={{
                    fontFamily: 'Inter',
                    textAlign: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    border: 2,
                    borderLeft: 0,
                    borderColor: 'primary.main',
                    borderRadius: '0 18px 18px 0',
                    p: 4,
                  }}>

                  <Box sx={{
                    width: '100%',
                  }}>
                    <Typography variant="h5" component="h1" sx={{fontWeight: 'medium'}}>
                        Forgot Password
                    </Typography>
                    <form className="max-w-sm mx-auto" onSubmit={handleForgotPassword}>
                      <div className="pb-5 mb-5">
                        <label htmlFor="email" 
                              className="text-left block mb-3 mt-6 text-sm text-gray-900 dark:text-white"
                        >
                              Enter your email address
                        </label>
                        <input type="text" name="email" placeholder="Email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="outline-0 pl-5 placeholder-white border-transparent rounded-4xl bg-blue bg-gray-50 text-black text-sm block w-full p-2.5" 
                        />
                        <span className="error">{formErrors.email}</span>
                      </div>                  
                      <div className="mb-5 pb-2">
                          <button type="submit" 
                                  className="rounded-4xl text-white bg-pink text-sm w-full px-5 py-2.5 text-center"
                                  >
                                  <Link to="/email-verification">
                                    Send
                                  </Link>
                          </button>
                      </div>
                      <p className="text-sm text-gray-900 dark:text-gray-300">Back to <Link to="/signup" className="text-pink">Sign up</Link></p>
                    </form>
                  </Box>
                </Grid>
              </Box>
            </Container>
          </ThemeProvider>
        </>  
  )
}

export default ForgotPassword