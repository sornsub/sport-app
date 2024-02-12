import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Navbar from '../../components/shared/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import API from '../../api/axios';
// import UserCreate from './Create';

// codeHistory
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const History = () =>  {
  const [exerciseActivities, setExerciseActivities] = useState([]);
  const exerciseActivitiesRoute = "api/exercise-activities";
  const user_id = "65c63d76e63824aa00b3c573";
  const token = localStorage.getItem('token');  // เก็บ token  login ค้างไว้

  const headers = {
      'Authorization': `Bearer ${token}`   // ขอ Token ก่อน
    }

  useEffect(() => {
    getExerciseActivityByUserId();
    }, []);
  
  //get user data
  const getExerciseActivityByUserId = async () => {
        
    const response = await API.get(`${exerciseActivitiesRoute}/user/${user_id}`, {headers: headers}); // [GET] https://localhost:5000/api/exercise-activities/user/:user_id
    console.log("response: ", response.data.data)
    // set member here
    if (response.status === 200 && response.data.data) {
      setExerciseActivities([...response.data.data]);
    }
  };

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
          <Navbar />
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Delete</Button>
              <select onChange="" name="activity_type_id" className="mb-10 outline-0 block w-full p-2.5 px-0.5 rounded-4xl bg-blue text-white pl-5 text-sm">
                <option value="Running">Running"</option>
                <option value="Weight training">Weight training</option>
                <option value="Hike">Hike</option>
                <option value="Yoga">Yoga</option>
                <option value="Swimming">Swimming</option>
                <option value="Bicycle ride">Bicycle ride</option>
                <option value="Walking">Walking</option>
              </select>
              <select onChange="" name="activity_type_id" className="mb-10 outline-0 block w-full p-2.5 px-0.5 rounded-4xl bg-blue text-white pl-5 text-sm">
                <option value="Filter">Filter"</option>
                <option value="Running">Running"</option>
                <option value="Weight training">Weight training</option>
                <option value="Hike">Hike</option>
                <option value="Yoga">Yoga</option>
                <option value="Swimming">Swimming</option>
                <option value="Bicycle ride">Bicycle ride</option>
                <option value="Walking">Walking</option>
              </select>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {exerciseActivities.map((exerciseActivity) => (
              <Grid item key={exerciseActivity} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                    {exerciseActivity.activity_type_id}
                    </Typography>
                    <Typography>
                     {exerciseActivity.caption}
                    </Typography>
                    <Typography>
                      Descriptons
                    </Typography>
                    <Typography>
                      Calroies
                    </Typography>
                    <Typography>
                      Date
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default History