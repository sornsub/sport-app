import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Joi from 'joi';
import AuthApi from '../../../api/services/auth';

import { 
    Box,
    Container,
    Grid,
    Typography,
    ThemeProvider,
  } from "@mui/material"
  
import LoginImg from "/images/login.jpg"
import { theme } from "../../../theme"
import { Link } from "react-router-dom"
    
const Login = () => {
  
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //set condition for validate field input
  const schema = Joi.object({
    email: Joi.string().email({ tlds: false }).required().label('Email'),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required()
        .label('Password')
        .messages({
            'string.pattern.base': 'Password must contain only letters and numbers and be between 3 and 30 characters long'
        }),
  });

  //validate field input
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationResult = schema.validate(formData, { abortEarly: false });
    //if error then show alert
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
    //if valid call api login
    try {
      loginApi(formData);
    } catch (error) {
        console.error('Error:', error);
    }

  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  // axios call login api
  const loginApi = async ({ email, password }) => {
    const requestData = {
      email: email,
      password: password
    };
    //while logging in show alert loading...
    Swal.fire({
      title: "Logging in...",
      html: "Please wait...",
      timerProgressBar: true,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });
  
    try {
      const response = await AuthApi.login(requestData);
      if (response.status === 200) {
        const { token, userId } = response.data;
        // Store the tokens in localStorage or secure cookie for later use
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
  
        //after loged in show alert success.
        Swal.fire({
          icon: 'success',
          title: 'Logged in successfully!',
          timer: 1500,
          timerProgressBar: true,
          didClose: () => {
            navigate("/dashboard");
          }
        });
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      //if login failed show alert error
      const errorMessage = error.response.data.error.message ? error.response.data.error.message : 'Login failed';

      Swal.fire({
        icon: 'error',
        title: 'Login failed',
        text: errorMessage,
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
              backgroundImage: `url(${LoginImg})`,
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
                  Login
                </Typography>
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                  {/* Email */}
                  <div className="mb-5">
                    <label htmlFor="email" 
                          className="text-left block mb-3 mt-6 text-sm"
                    >
                          Username or email
                    </label>
                    <input type="text" id="email" name="email"
                          className="outline-0 pl-5 placeholder-white border-transparent rounded-4xl bg-blue text-black text-sm block w-full p-2.5" 
                          placeholder="Username or email" 
                          value={formData.email}
                          onChange={handleInputChange}
                            />
                  </div>
                  {/* Password */}
                  <label htmlFor="password" 
                          className="text-left block mb-3 mt-6 text-sm"
                  >
                          Password
                  </label>
                  <div className="mb-3 relative w-full">
                    <input type={showPassword ? "text" : "password"} id="password" name="password"
                        className="outline-0 pl-5 placeholder-white border-transparent rounded-4xl bg-blue bg-gray-50 text-black text-sm block w-full p-2.5" 
                        placeholder="Password" 
                        value={formData.password} 
                              onChange={handleInputChange} 
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
                  <div className="flex items-start mb-8">
                    <p className="text-pink text-sm">
                      <Link to="/forgot-password">Forgot password?</Link>
                    </p>
                  </div>
                  {/* Login button */}
                  <div className="mb-5">
                      <button type="submit" 
                              className="rounded-4xl text-white bg-pink text-sm w-full px-5 py-2.5 text-center"
                              >
                                Login
                      </button>
                  </div>
                  {/* Signup Link */}
                  <p className="text-sm text-gray-900 dark:text-gray-300">Don’t have an account ? <Link to="/signup" className="text-pink">Sign up</Link></p>
                </form>
              </Box>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
  
export default Login
  