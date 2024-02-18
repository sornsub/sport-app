import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Joi from 'joi';
import API from '../../../api/axios';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Phone } from '@mui/icons-material';

const theme = createTheme();

function SignUp() {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        phone: '',
        password: '',
        rePassword: ''
    });

    const handleChange = (value, field) => {
        setInputs(prevInputs => ({ ...prevInputs, [field]: value }));
    }

    const schema = Joi.object({
        firstName: Joi.string().required().label('First Name'),
        lastName: Joi.string().required().label('Last Name'),
        email: Joi.string().email({ tlds: false }).required().label('Email Address'),
        userName: Joi.string().alphanum().min(3).max(30).required().label('Username'),
        phone: Joi.string().pattern(new RegExp('^[0-9]{9,10}$')).min(9).max(10).required().label('Phone'),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required()
            .label('Password')
            .messages({
                'string.pattern.base': 'Password must contain only letters and numbers and be between 3 and 30 characters long'
            }),
        rePassword: Joi.string().valid(Joi.ref('password')).required().label('Re-Password').messages({
            'any.only': '{{#label}} does not match',
        })
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationResult = schema.validate(inputs, { abortEarly: false });
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
            const authRoute = 'api/authen'
            const requestData = {
                firstName: inputs.firstName,
                lastName: inputs.lastName,
                email: inputs.email,
                userName: inputs.userName,
                password: inputs.password,
                phone: inputs.phone
            }
            const response = await API.post(`${authRoute}/signup`, requestData); // Axios POST request
            const result = response.data;
            if (result.success === true) {
                localStorage.setItem('email', requestData.email);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your account has been created",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate('/email-verification/signup');
                });
            } else if (result.error === 'duplicate') {
                MySwal.fire({
                    html: <i>{result.message}</i>,
                    icon: 'error'
                });
            } else {
                MySwal.fire({
                    html: <i>{result.message}</i>,
                    icon: 'error'
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative', // Relative positioning for absolute logo positioning
                    }}
                >
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="firstName"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        value={inputs.firstName}
                                        onChange={(e) => handleChange(e.target.value, 'firstName')}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lastName"
                                        value={inputs.lastName}
                                        onChange={(e) => handleChange(e.target.value, 'lastName')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        value={inputs.email}
                                        onChange={(e) => handleChange(e.target.value, 'email')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="userName"
                                        label="Username"
                                        name="userName"
                                        autoComplete="userName"
                                        value={inputs.userName}
                                        onChange={(e) => handleChange(e.target.value, 'userName')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="phone"
                                        label="Phone"
                                        name="phone"
                                        autoComplete="phone"
                                        value={inputs.phone}
                                        onChange={(e) => handleChange(e.target.value, 'phone')}
                                    />
                                </Grid>
                                {schema.validate({ password: inputs.password }).error && ( // Hide password field if not valid
                                    <>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="new-password"
                                                value={inputs.password}
                                                onChange={(e) => handleChange(e.target.value, 'password')}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="rePassword"
                                                label="Re-enter Password"
                                                type="password"
                                                id="rePassword"
                                                autoComplete="new-password"
                                                value={inputs.rePassword}
                                                onChange={(e) => handleChange(e.target.value, 'rePassword')}
                                            />
                                        </Grid>
                                    </>
                                )}
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, bgcolor: '#E76F6D' }}
                            >
                                Register
                            </Button>
                            <Grid container justifyContent="flex-start">
                                <Grid item>
                                    Already have an account?{' '}
                                    <Link href="/login" variant="body2">
                                        Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
export default SignUp;