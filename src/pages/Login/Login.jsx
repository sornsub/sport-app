import { 
    Box,
    Container,
    Grid,
    Typography,
    createTheme,
    IconButton,
    ThemeProvider,
    Stack
  } from "@mui/material"
  

  import AndikaRegular from "/fonts/Andika-Regular.ttf"
  import LoginImg from "/images/login.jpg"
  
  const defaultTheme = createTheme({
    palette:{
      primary: {
        light: '#E76F6D',
        main: '#E76F6D',
        dark: '#e35957',
        white: '#fff',
      },
      typography: {
        fontFamily: "Andika",
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'Andika';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Andika'), local('Andika-Regular'), url(${AndikaRegular}) format('ttf');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        },
      },
    }
  })
  
  const Login = () => {
  
    return (
      <>
      <ThemeProvider theme={defaultTheme}>
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
              // border: 2,
              // borderColor: 'primary.main',
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
                textAlign: 'center',
                alignItems: 'center',
                border: 2,
                borderLeft: 0,
                borderColor: 'primary.main',
                borderRadius: '0 18px 18px 0',
                // height: 480,
                p: 4,
              }}>
                <Typography variant="h5" component="h1" >
                  Login
                </Typography>
              <form className="max-w-sm mx-auto">
                <div className="mb-5">
                  <label htmlFor="email" 
                         className="text-left block mb-3 mt-6 text-sm text-gray-900 dark:text-white"
                  >
                         Username or email
                  </label>
                  <input type="email" id="email" 
                         className="pl-5 placeholder-white border-transparent rounded-4xl bg-blue bg-gray-50 text-black text-sm block w-full p-2.5" 
                         placeholder="Username or email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" 
                         className="text-left block mb-3 text-sm text-gray-900"
                  >
                    Password
                  </label>
                  <input type="password" id="password" 
                         className="pl-5 placeholder-white border-transparent rounded-4xl bg-blue text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                         placeholder="Password" required />
                </div>
                <div className="flex items-start mb-10">
                  <p className="text-pink text-sm text-gray-900 dark:text-gray-300"><a href="#">Forgot password?</a></p>
                </div>
                <div className="mb-5">
                  <button type="submit" 
                          className="rounded-4xl text-white bg-pink text-sm w-full px-5 py-2.5 text-center"
                          >
                            Login
                  </button>
                </div>
                <p className="text-sm text-gray-900 dark:text-gray-300">Don’t have an account ? <a href="#" className="text-pink">Sign up</a></p>
              </form>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
      </>
    )
  }
  
  export default Login
  