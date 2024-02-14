import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import DeleteButton from "../Editprofile/DeleteButton";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Modal from "@mui/material/Modal";
import Navbar from '../../components/shared/Navbar';
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// ---use import for edit start

=======
=======
// ---use import for edit start
=======
>>>>>>> ed42b90 (History_Mockup_View_V1)

=======
// ---use import for edit start

import { Box, Container, Typography, Modal } from "@mui/material";

//Component
import EditExercise from '../Exercise/EditExercise/EditExercise.jsx';

// ---use import for edit end


// ---
>>>>>>> 4a25d6c (History_Mockup_Edit_V1)
import * as React from 'react';
<<<<<<< HEAD
// import AspectRatio from '@mui/joy/AspectRatio';
// import CardOverflow from '@mui/joy/CardOverflow';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
>>>>>>> 45785d8 (History_Mockup_Edit_V1)

=======
// ---use import for edit start

>>>>>>> e3a62a0 (History_Mockup_Edit_V1)
import { Box, Container, Typography, Modal } from "@mui/material";

<<<<<<< HEAD
//Component
import EditExercise from '../Exercise/EditExercise/EditExercise.jsx';

// ---use import for edit end
=======
>>>>>>> d69d1ef (History_Mockup_V4)


// ---
<<<<<<< HEAD
>>>>>>> 9fb9e2c (History_Mockup_Edit_V1)
=======

>>>>>>> 4e4fb34 (History_Mockup_View_V1)
=======
>>>>>>> 4a25d6c (History_Mockup_Edit_V1)
>>>>>>> e3a62a0 (History_Mockup_Edit_V1)
import * as React from 'react';
=======
>>>>>>> ed42b90 (History_Mockup_View_V1)

import API from '../../api/axios';
<<<<<<< HEAD
=======
// // import UserCreate from './Create';
>>>>>>> b9f185d (History_Mockup_V4)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 45785d8 (History_Mockup_Edit_V1)
=======
//Component
import EditExercise from '../Exercise/EditExercise/EditExercise.jsx';

//Image
import createExercise from "../../components/UploadImage/UploadImage.jsx";
>>>>>>> ed42b90 (History_Mockup_View_V1)
=======
>>>>>>> 4a25d6c (History_Mockup_Edit_V1)
// codeHistory
=======
// //Component
// import EditExercise from '../Exercise/EditExercise/EditExercise.jsx';

// //Image
// import createExercise from "../../components/UploadImage/UploadImage.jsx";
// // codeHistory
>>>>>>> d69d1ef (History_Mockup_V4)
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
  const [updateExerciseActivities, setUpdateExerciseActivities] = useState([]);
  const exerciseActivitiesRoute = "api/exercise-activities";
<<<<<<< HEAD
  const user_id = localStorage.getItem('userId');
  const navigate = useNavigate();
  
  // //Moral
  // const [open, setOpen] = React.useState(false);
  // const handleClose = () => setOpen(false);
  // const handleOpen = () => setOpen(true);

  
  //Handle Modal popup
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setReload(!reload);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
    
  // const id = "65c9db8f4f0314251c487a0a";
=======
  const user_id = "65c8f4fc9aa2f67b7fbd27a7";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 45785d8 (History_Mockup_Edit_V1)
=======
>>>>>>> 4a25d6c (History_Mockup_Edit_V1)
  // For Edit Process by sent api/post SummaryData to EditExercise.jsx ;
  const [summaryData, setSummaryData] = useState({});
    //Modal popup
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
      setReload(!reload);
    };
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 9fb9e2c (History_Mockup_Edit_V1)
=======
  const navigate = useNavigate();
  
  // const id = "65c9db8f4f0314251c487a0a";
>>>>>>> 4e4fb34 (History_Mockup_View_V1)
=======
  const navigate = useNavigate();
  
  // const id = "65c9db8f4f0314251c487a0a";
=======
  // For Edit Process by sent api/post SummaryData to EditExercise.jsx ;
  const [summaryData, setSummaryData] = useState({});
    //Modal popup
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
      setReload(!reload);
    };
>>>>>>> 4a25d6c (History_Mockup_Edit_V1)
>>>>>>> e3a62a0 (History_Mockup_Edit_V1)
=======
>>>>>>> 45785d8 (History_Mockup_Edit_V1)
=======
  const navigate = useNavigate();
  
  // const id = "65c9db8f4f0314251c487a0a";
>>>>>>> ed42b90 (History_Mockup_View_V1)
=======
>>>>>>> 4a25d6c (History_Mockup_Edit_V1)

  const token = localStorage.getItem('token');  // เก็บ token  login ค้างไว้
  const headers = {
        'Authorization': `Bearer ${token}`   // ขอ Token ก่อน
  }

  // Modal popup style
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  useEffect(() => {
    getExerciseActivityByUserId();
    }, [reload]);
  
  //get user data for show histoty 
  const getExerciseActivityByUserId = async () => {
  
   
    // const response = await API.get(`http://localhost:5173/api/exercise-activities/user/65c8f4fc9aa2f67b7fbd27a7`, {headers: headers}); 
    const response = await API.get(`${exerciseActivitiesRoute}/user/${user_id}`, {headers: headers}); // [GET] https://localhost:5000/api/exercise-activities/user/:user_id
    console.log("response: ", response.data)
    // set member here
    if (response.status === 200 && response.data.data) {
      setExerciseActivities([...response.data.data]);
    }
  };

  
    //click button to edit 1-exercise-id data 
       // get user 1-exercise-id data 
    const getExerciseActivityById = async () => {

      const response = await API.get(`${exerciseActivityRoute}/${id}`, {headers: headers}); // [GET] https://localhost:5000/api/:user_id    console.log("response: ", response.data)
      // set member here
      if (response.status === 200 && response.data.data) {
        setEditExerciseActivities([...response.data.data]);
      }
    };
    const updateExerciseActivity = async ({id, activity_type_id, caption, description, hour, minute, date, image}) => {
      // const id = '65b9fced5cfcc8eb551496b6';
      const requestData = {
        id: id,
        activity_type_id: activity_type_id,
        caption: caption,
        description: description,
        hour: hour,
        minute: minute,
        date: date,
        image: image,
      };
    console.log(requestData);
    const response = await API.put(`${exerciseActivityRoute}/${id}`, requestData, {headers: headers});// [PUT] https://localhost:5000/api/users , requestData

    if (response.statusText === "OK") {
    localStorage.setItem('exercise_activity_id', response.data.data._id);
    console.log("id from update: ",response.data.data._id);
    setReload(!reload);//
 //   navigate("/exercise-activity/summary");
    }
    console.log(response);
  };

  // Delete data
      const removeData = async (id) => {
        console.log("id: ", id)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        // const response = await API.get(`${exerciseActivitiesRoute}/user/${user_id}`, {headers: headers}); // [GET] https://localhost:5000/api/exercise-activities/user/:user_id
  
              const response = await API.delete(`${exerciseActivitiesRoute}/${id}`, {headers: headers})
=======
        const response = await API.delete(`${exerciseActivitiesRoute}/${id}`, {headers: headers})
>>>>>>> 9fb9e2c (History_Mockup_Edit_V1)
=======
        // const response = await API.get(`${exerciseActivitiesRoute}/user/${user_id}`, {headers: headers}); // [GET] https://localhost:5000/api/exercise-activities/user/:user_id
 
              const response = await API.delete(`${exerciseActivitiesRoute}/${id}`, {headers: headers})
>>>>>>> 4e4fb34 (History_Mockup_View_V1)
=======
        const response = await API.delete(`${exerciseActivitiesRoute}/${id}`, {headers: headers})
>>>>>>> e3a62a0 (History_Mockup_Edit_V1)
=======
        const response = await API.delete(`${exerciseActivitiesRoute}/${id}`, {headers: headers})
>>>>>>> 45785d8 (History_Mockup_Edit_V1)
=======
        // const response = await API.get(`${exerciseActivitiesRoute}/user/${user_id}`, {headers: headers}); // [GET] https://localhost:5000/api/exercise-activities/user/:user_id
 
              const response = await API.delete(`${exerciseActivitiesRoute}/${id}`, {headers: headers})
>>>>>>> ed42b90 (History_Mockup_View_V1)
=======
        const response = await API.delete(`${exerciseActivitiesRoute}/${id}`, {headers: headers})
>>>>>>> 4a25d6c (History_Mockup_Edit_V1)
          
              if (response.status === 200) {     // ถ้าลบสำเร็จ 105 จะช่วย reload
                 handleClose ();
                 console.log(response);
              }
            };

          
  // View data
      const pathView = async (id) => {
        console.log("id: ", id)
        // const response = await API.get(`${exerciseActivitiesRoute}/user/${user_id}`, {headers: headers}); // [GET] https://localhost:5000/api/exercise-activities/user/:user_id

              const response = await API.get(`${exerciseActivitiesRoute}/${id}`, {headers: headers})
          
              if (response.status === 200) {     // ถ้าลบสำเร็จ 105 จะช่วย reload
                localStorage.setItem('exercise_activity_id', response.data.data._id);
                navigate("/exercise-activity/summary");   
                console.log(response);
              }
            };

          
  // View data
      const pathView = async (id) => {
        console.log("id: ", id)
        // const response = await API.get(`${exerciseActivitiesRoute}/user/${user_id}`, {headers: headers}); // [GET] https://localhost:5000/api/exercise-activities/user/:user_id

              const response = await API.get(`${exerciseActivitiesRoute}/${id}`, {headers: headers})
          
              if (response.status === 200) {     // ถ้าลบสำเร็จ 105 จะช่วย reload
                localStorage.setItem('exercise_activity_id', response.data.data._id);
                navigate("/exercise-activity/summary");   
                console.log(response);
              }
            };

          
  // View data
      const pathView = async (id) => {
        console.log("id: ", id)
        // const response = await API.get(`${exerciseActivitiesRoute}/user/${user_id}`, {headers: headers}); // [GET] https://localhost:5000/api/exercise-activities/user/:user_id

              const response = await API.get(`${exerciseActivitiesRoute}/${id}`, {headers: headers})
          
              if (response.status === 200) {     // ถ้าลบสำเร็จ 105 จะช่วย reload
                localStorage.setItem('exercise_activity_id', response.data.data._id);
                navigate("/exercise-activity/summary");   
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
          <DeleteButton />
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
                    <input type="hidden" id="id" value={exerciseActivity} />
<<<<<<< HEAD
<<<<<<< HEAD
                       <Button size="small">View</Button>                       
                       <button onClick={() => pathView(exerciseActivity._id)} className="text-grey pr-5 flex justify-start items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"/></svg>
                      </button>

                       <Button size="small">Delete</Button>
                       <button onClick={handleOpen} className="text-grey pr-5 flex justify-start items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>
                       </button>    
                       {/* <button
                         onClick={handleOpen}
                         className="rounded-4xl text-white bg-red text-sm w-full px-5 py-2.5 text-center"
                        >
                         Delete Account
                        </button> */}
      <Modal
        className="self-center"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="rounded-4xl text-black bg-red text-sm w-full px-5 py-2.5 text-center"
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You are going to delete accout
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure about this ?
          </Typography>
          <input type="hidden" id="id" value={exerciseActivity} />
          <button
             onClick={() => removeData(exerciseActivity._id)}
             className="rounded-4xl text-white bg-red text-sm w-full px-5 py-2.5 text-center"
            >
             Delete for sure
          </button>
          <Typography>

<<<<<<< HEAD
          </Typography>
          <button
             onClick={() => handleClose()}
             className="rounded-4xl text-white bg-red text-sm w-full px-5 py-2.5 text-center"
            >
             Cancel
          </button>
          {/* <DeleteButtonNested /> */}
        </Box>
      </Modal>
                            </CardActions>
=======
                  <button onClick={() => removeData(exerciseActivity._id)} className="text-grey pr-5 flex justify-start items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>
                  </button>
<<<<<<< HEAD
=======
                       <Button size="small">View</Button>  
                       
                       <button onClick={() => pathView(exerciseActivity._id)} className="text-grey pr-5 flex justify-start items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>
                       </button>
=======
=======
                       <Button size="small">View</Button>  
                       
                       <button onClick={() => pathView(exerciseActivity._id)} className="text-grey pr-5 flex justify-start items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>
                       </button>

  
                       <Button size="small">Delete</Button>



                       <button onClick={() => removeData(exerciseActivity._id)} className="text-grey pr-5 flex justify-start items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>
                       </button>         

>>>>>>> ed42b90 (History_Mockup_View_V1)
               
                 {/* edit */}
                <button onClick={handleOpen} className="text-grey pr-5 flex justify-start items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"/></svg>
<<<<<<< HEAD
<<<<<<< HEAD
                </button>
>>>>>>> 45785d8 (History_Mockup_Edit_V1)

  
                       <Button size="small">Delete</Button>



                       <button onClick={() => removeData(exerciseActivity._id)} className="text-grey pr-5 flex justify-start items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>
                       </button>         

>>>>>>> 4e4fb34 (History_Mockup_View_V1)
               
                 {/* edit */}
                <button onClick={handleOpen} className="text-grey pr-5 flex justify-start items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"/></svg>
<<<<<<< HEAD
<<<<<<< HEAD
                </button>
>>>>>>> 9fb9e2c (History_Mockup_Edit_V1)

=======
                  </button> */}
=======
                </button>
>>>>>>> e3a62a0 (History_Mockup_Edit_V1)

                       <Button size="small">Edit</Button>
                    </CardActions>
>>>>>>> 4e4fb34 (History_Mockup_View_V1)
=======
                  </button> */}
=======
                </button>
>>>>>>> 4a25d6c (History_Mockup_Edit_V1)

                       <Button size="small">Edit</Button>
                    </CardActions>
>>>>>>> ed42b90 (History_Mockup_View_V1)
                    <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
<<<<<<< HEAD
<<<<<<< HEAD
                    image={exerciseActivity.image}
                    />

                    <CardContent sx={{ flexGrow: 1 }}>
                    {/* <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography> */}
                    <Typography>
                    Caption: {exerciseActivity.caption}
                    </Typography>
                    <Typography>
                    Description: {exerciseActivity.description}
                    </Typography>
                    <Typography>
                    Type: {exerciseActivity.activity_type_id}
                    </Typography>
                    <Typography>
                    Duration: {exerciseActivity.hour}:{exerciseActivity.minute}
                    </Typography>
                    <Typography>
                    Distance: 
                    </Typography>
                    <Typography>
                    Calories: 
                    </Typography>
                    <Typography>
                    Date: {exerciseActivity.date}
=======
                    image="https://source.unsplash.com/random?wallpapers"
                     />
                    <CardContent sx={{ flexGrow: 1 }}>
                    {/* <Typography gutterBottom variant="h5" component="h2">
                    {exerciseActivity.activity_type_id}
                    </Typography> */}
                    {/* <Typography >
                      <img src={exerciseActivity.image} alt="The group of women are running" />
                    </Typography>
                    <Card sx={{ height: '20%', display: 'flex', flexDirection: 'column' }}>
                    <img src={exerciseActivity.image} alt="The group of women are running" />
                     </Card>  */}
                    <Typography>
                    Caption: {exerciseActivity.caption}
                    </Typography>
                    <Typography>
                    Description: {exerciseActivity.description}
                    </Typography>
                    <Typography>
                    Type: {exerciseActivity.activity_type_id}
                    </Typography>
                    <Typography>
                    Duration: {exerciseActivity.hour}:{exerciseActivity.minute}
                    </Typography>
                    <Typography>
<<<<<<< HEAD
                    {exerciseActivity.date}
>>>>>>> 4e4fb34 (History_Mockup_View_V1)
=======
                    Calories: {exerciseActivity.calories}
                    </Typography>
                    <Typography>
                    Date: {exerciseActivity.date}
>>>>>>> b9f185d (History_Mockup_V4)
=======
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
                    {exerciseActivity.description}
                    </Typography>
                    <Typography>
                      Calroies
                    </Typography>
                    <Typography>
                    {exerciseActivity.date}
>>>>>>> ed42b90 (History_Mockup_View_V1)
                    </Typography>
                    </CardContent>
             
                </Card>
              </Grid>
               ))     
         
            }
          </Grid>
        </Container>

            <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                <Container
                  sx={{
                    // height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "872px",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h1"
                      sx={{ fontWeight: "medium",
                            m:5,
                    }}
                    >
                      Update Tracking Exercise Activity
                    </Typography>
                    <EditExercise update={updateExerciseActivity} summaryData={summaryData} handleClose={handleClose}/>
                  </Box>
                </Container>
              </Modal>
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
