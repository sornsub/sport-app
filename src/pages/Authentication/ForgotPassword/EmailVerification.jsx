import React, { useState } from 'react'
import API from '../../../api/axios';
import { useNavigate } from "react-router-dom";

import { 
    Box,
    Container,
    Link,
    Typography,
    ThemeProvider,
  } from "@mui/material"

import { theme } from "../../../theme"

const EmailVerification = () => {

  const navigate = useNavigate();

  const [code, setCode] = useState('');

  const verifyCode = async ({code}) => {
    
    const verifyCodeRoute = "api/authen";
    const email = localStorage.getItem('email');


    const requestData = {
    email: email,
    code: code
    };

    const response = await API.post(`${verifyCodeRoute}/verify`, requestData);// [POST] https://localhost:5000/api/authen/verify, requestData

    if (response.status === 200) {
    navigate("/create-new-password");
    }
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
                  <Box sx={{
                    width: '872px',
                    textAlign: 'center',
                  }}>
                    <Typography variant="h5" component="h1" sx={{fontWeight: 'medium'}}>
                      Email Verification
                    </Typography>
                        <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                bgcolor: 'secondary.main',
                                height: '239px',
                                width: '872px',
                                borderRadius: '20px',
                                mt: 5,
                              }}>
                              <div className="flex justify-center items-center flex-col">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="42.58" height="54.75" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M11 5.5H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-.5 0V4a3.5 3.5 0 1 0-7 0v1.5"/>
                                    <path d="M7 10a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"/></g>
                                  </svg>
                                  <p className="text-white mt-5">We’ve sent a verification code to your email</p> 
                                  <div className="gap-1 relative flex justify-center items-center center mt-5 rounded-4xl h-10 w-full bg-white">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.615 19q-.69 0-1.152-.462Q3 18.075 3 17.385V6.615q0-.69.463-1.152Q3.925 5 4.615 5h14.77q.69 0 1.152.463q.463.462.463 1.152v10.77q0 .69-.462 1.152q-.463.463-1.153.463zM12 12.115l-8-5.23v10.5q0 .269.173.442t.442.173h14.77q.269 0 .442-.173t.173-.442v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.442.173H4z"/></svg>
                                    <p className="">Please check your mailbox.</p> 
                                  </div>  
                              </div>
                        </Box>
                        <p className="text-left mt-8 mb-8">Enter verification code</p>
                        <div className="flex justify-between gap-2 mb-6">
                          <input onChange={(ev) => setCode(ev.target.value)} name="code"
                          className="bg-blue text-center rounded-otp drop-shadow-md" type="text" maxLength={6} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                          {/* <input className="bg-blue w-20 h-20 text-center rounded-otp drop-shadow-md" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                          <input className="bg-blue w-20 h-20 text-center rounded-otp drop-shadow-md" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                          <input className="bg-blue w-20 h-20 text-center rounded-otp drop-shadow-md" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                          <input className="bg-blue w-20 h-20 text-center rounded-otp drop-shadow-md" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required />
                          <input className="bg-blue w-20 h-20 text-center rounded-otp drop-shadow-md" type="text" maxLength={1} pattern="[0-9]" inputMode="numeric" autoComplete="one-time-code" required /> */}
                        </div>
                        <Link href="#" color='primary.black'> 
                          Resend code
                        </Link>
                        <button type="submit" 
                                  className="mt-8 rounded-4xl bg-pink text-sm w-full px-5 py-2.5 text-center"
                                  onClick={() => verifyCode(code)}
                        >
                                    Submit
                        </button>
                  </Box>
            </Container>
          </ThemeProvider>
        </>  
  )
}

export default EmailVerification