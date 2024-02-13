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


import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import CardOverflow from '@mui/joy/CardOverflow';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';


import API from '../../api/axios';
// import UserCreate from './Create';

//Component
import EditExercise from '../Exercise/EditExercise/EditExercise.jsx';

//Image
import createExercise from "../../components/UploadImage/UploadImage.jsx";
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
  const [reload, setReload] = useState(false);
  const [exerciseActivities, setExerciseActivities] = useState([]);
  const exerciseActivitiesRoute = "api/exercise-activities";
  const user_id = "65c8f4fc9aa2f67b7fbd27a7";
  
  // const id = "65c9db8f4f0314251c487a0a";

  const token = localStorage.getItem('token');  // เก็บ token  login ค้างไว้


  const headers = {
      'Authorization': `Bearer ${token}`   // ขอ Token ก่อน
    }

  useEffect(() => {
    getExerciseActivityByUserId();
    }, [reload]);
  
  //get user data
  const getExerciseActivityByUserId = async () => {
    console.log("Fromgetexercise");
   
    // const response = await API.get(`http://localhost:5173/api/exercise-activities/user/65c8f4fc9aa2f67b7fbd27a7`, {headers: headers}); 
    const response = await API.get(`${exerciseActivitiesRoute}/user/${user_id}`, {headers: headers}); // [GET] https://localhost:5000/api/exercise-activities/user/:user_id
    console.log("response: ", response.data)
    // set member here
    if (response.status === 200 && response.data.data) {
      setExerciseActivities([...response.data.data]);
    }
  };

  // Delete data
      const removeData = async (id) => {
        console.log("id: ", id)
        // const response = await API.get(`${exerciseActivitiesRoute}/user/${user_id}`, {headers: headers}); // [GET] https://localhost:5000/api/exercise-activities/user/:user_id
 
              const response = await API.delete(`${exerciseActivitiesRoute}/${id}`, {headers: headers})
          
              if (response.status === 200) {     // ถ้าลบสำเร็จ 105 จะช่วย reload
                setReload(!reload);
                console.log(response);
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
              <Grid item key={exerciseActivity._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardActions>
                  <Button size="small">View</Button>       
                  <Button size="small">Delete</Button>

                  <input type="hidden" id="id" value={exerciseActivity} />

                  <button onClick={() => removeData(exerciseActivity._id)} className="text-grey pr-5 flex justify-start items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>
                  </button>
               
                  {/* <button onClick={handleOpen} className="text-grey pr-5 flex justify-start items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"/></svg>
                  </button> */}

                  <Button size="small">Edit</Button>
                  </CardActions>
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
                    {exerciseActivity.activity_type_id}
                    </Typography>
                    <Typography>
                    {exerciseActivity.caption}
                    </Typography>
                    <Typography>
                    {exerciseActivity.description}
                    </Typography>
                    <Typography>
                      Calroies
                    </Typography>
                    <Typography>
                    {exerciseActivity.date}
                    </Typography>
                  </CardContent>

                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
{/* 
     <Card
      size="lg"
      variant="plain"
      orientation="horizontal"
      sx={{
        textAlign: 'center',
        maxWidth: '100%',
        width: 393,
        // to make the demo resizable
        resize: 'horizontal',
        // overflow: 'auto',
      }}
     >

     <CardOverflow
        variant="solid"
        color="primary"
        sx={{
          flex: '0 0 200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'left',
          // px: 'var(--Card-padding)',
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 293 }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
        <AspectRatio ratio="19/8" objectFit="contain" variant="plain">
          <img
            alt=""
            src="https://static.vecteezy.com/system/resources/previews/006/409/485/original/people-thinking-to-make-decision-problem-solving-and-find-creative-ideas-with-question-mark-in-flat-cartoon-background-for-poster-illustration-vector.jpg"
          />
        </AspectRatio>
        <CardContent>
          <Typography level="title-lg">Need Some Help?</Typography>
          <Typography fontSize="sm" sx={{ mt: 0.5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor.
          </Typography>
        </CardContent>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            '--variant-borderWidth': '2px',
            borderRadius: 40,
            borderColor: 'primary.500',
            mx: 'auto',
          }}
        >
          See FAQ
        </Button>
      </CardContent>
    </Card> */}

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
