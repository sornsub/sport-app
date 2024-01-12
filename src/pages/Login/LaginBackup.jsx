import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { 
      // Avatar,
         Button, 
         CssBaseline,
         TextField,
         FormControlLabel,
         Checkbox,
         Link,
         Paper,
         Box,
         Container,
         StyleProvider,
         Grid,
         Typography,
         createTheme,
         ThemeProvider
       } from "@mui/material"
       

import LoginImg from "/images/login.jpg"

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://bobtail-soda.com/">
        Bobtail Soda
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    })
  }

  const defaultTheme = createTheme({
    palette:{
      primary: {
        light: '#E76F6D',
        main: '#E76F6D',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
      otherColor:{
        main:"#999"
      }
    }
  })

  return (
    <>
    <StyleProvider injectFirst /> 
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

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
            border: 2,
            borderColor: 'primary.main',
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

          <Grid item xs={12} sm={8} md={5} 
            sx={{
              textAlign: 'center',
              p: 4,
            }}>
              {/* <Typography variant="h5" component="h1" >
                Login
              </Typography>  */}
              <h1>Login</h1>
              

<form className="max-w-sm mx-auto">
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

          </Grid>
        </Box>
      </Container>
      </Grid>
    </ThemeProvider>
    </>
  )
}

export default Login
