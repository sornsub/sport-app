import React from 'react'
import { 
    Box,
    Container,
    Grid,
    Typography,
    ThemeProvider,
  } from "@mui/material"

import CreateNewPasswordImg from "/images/createNewPassword.jpg"
import { theme } from "../../../theme"
import { Link } from "react-router-dom"

const CreateNewPassword = () => {
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

                    <form className="">
                      <div className="mb-5">
                        <label htmlFor="new-password" 
                              className="text-left block mb-3 mt-6 text-sm text-gray-900 dark:text-white"
                        >
                              New Password
                        </label>
                        <div class="relative w-full">
                            <input type="password" id="new-password" 
                                className="outline-0 pl-5 placeholder-white border-transparent rounded-4xl bg-blue bg-gray-50 text-black text-sm block w-full p-2.5" 
                                placeholder="New Password" required 
                            />  
                            <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 10a13.358 13.358 0 0 0 3 2.685M21 10a13.358 13.358 0 0 1-3 2.685m-8 1.624L9.5 16.5m.5-2.19a10.59 10.59 0 0 0 4 0m-4 0a11.275 11.275 0 0 1-4-1.625m8 1.624l.5 2.191m-.5-2.19a11.275 11.275 0 0 0 4-1.625m0 0l1.5 1.815M6 12.685L4.5 14.5"/>
                                </svg>   
                            </button>  
                        </div>                                 
                      </div>                  
                      <div className="mb-12">
                        <label htmlFor="confirm-password" 
                              className="text-left block mb-3 text-sm text-gray-900 dark:text-white"
                        >
                              Confirm Password
                        </label>
                        <div class="relative w-full">
                            <input type="password" id="confirm-password" 
                                className="outline-0 pl-5 placeholder-white border-transparent rounded-4xl bg-blue bg-gray-50 text-black text-sm block w-full p-2.5" 
                                placeholder="Confirm Password" required />
                                <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 10a13.358 13.358 0 0 0 3 2.685M21 10a13.358 13.358 0 0 1-3 2.685m-8 1.624L9.5 16.5m.5-2.19a10.59 10.59 0 0 0 4 0m-4 0a11.275 11.275 0 0 1-4-1.625m8 1.624l.5 2.191m-.5-2.19a11.275 11.275 0 0 0 4-1.625m0 0l1.5 1.815M6 12.685L4.5 14.5"/>
                                    </svg>   
                                </button>
                        </div>
                      </div>                  
                          <button type="submit" 
                                  className="rounded-4xl text-white bg-pink text-sm w-full px-5 py-2.5 text-center"
                                  >
                            <Link to="/login">
                                Save
                            </Link>
                          </button>
                    </form>
                  </Box>
            </Container>
          </ThemeProvider>
        </>  
  )
}

export default CreateNewPassword