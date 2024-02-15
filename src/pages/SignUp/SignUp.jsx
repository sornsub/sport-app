import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Joi from 'joi';
import axios from 'axios'; // Import Axios

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Register() {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const [inputs, setInputs] = useState({
        fname: '',
        lname: '',
        email: '',
        username: '',
        password: '',
        rePassword: ''
    });

    const handleChange = (event, field) => {
        const { value } = event.target;
        setInputs(values => ({ ...values, [field]: value }));
    }

    const schema = Joi.object({
        fname: Joi.string().required().label('First Name'),
        lname: Joi.string().required().label('Last Name'),
        email: Joi.string().email({ tlds: false }).required().label('Email Address'),
        username: Joi.string().alphanum().min(3).max(30).required().label('Username'),
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
            const response = await axios.post("{{sport environment host}}/api/users/create", inputs); // Axios POST request
            const result = response.data;
            if (result.status === 'ok') {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your account has been created",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate('/');
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
                                        autoComplete="fname"
                                        name="fname"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        value={inputs.fname}
                                        onChange={(e) => handleChange(e, 'fname')}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lname"
                                        autoComplete="lname"
                                        value={inputs.lname}
                                        onChange={(e) => handleChange(e, 'lname')}
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
                                        onChange={(e) => handleChange(e, 'email')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        name="username"
                                        autoComplete="username"
                                        value={inputs.username}
                                        onChange={(e) => handleChange(e, 'username')}
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
                                                onChange={(e) => handleChange(e, 'password')}
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
                                                onChange={(e) => handleChange(e, 'rePassword')}
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

export default Register;
