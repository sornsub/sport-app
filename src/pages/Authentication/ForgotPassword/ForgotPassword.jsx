import React from 'react'
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
                    <form className="max-w-sm mx-auto">
                      <div className="pb-5 mb-5">
                        <label htmlFor="email" 
                              className="text-left block mb-3 mt-6 text-sm text-gray-900 dark:text-white"
                        >
                              Enter your email address
                        </label>
                        <input type="email" id="email" 
                              className="outline-0 pl-5 placeholder-white border-transparent rounded-4xl bg-blue bg-gray-50 text-black text-sm block w-full p-2.5" 
                              placeholder="Email" required />
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