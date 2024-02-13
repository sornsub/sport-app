<<<<<<< HEAD
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

const History2 = () =>  {
  const [exerciseActivities, setExerciseActivities] = useState([]);
  const exerciseActivitiesRoute = "api/exercise-activities";
  const user_id = "65c8f4fc9aa2f67b7fbd27a7";
  const token = localStorage.getItem('token');  // เก็บ token  login ค้างไว้

  const headers = {
      'Authorization': `Bearer ${token}`   // ขอ Token ก่อน
    }

  useEffect(() => {
    getExerciseActivityByUserId();
    }, []);
  
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
=======
//Guild สำหรับปั่นงาน

import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";

import { Box, Container, Typography, ThemeProvider, Modal } from "@mui/material"
import { theme } from "../../../theme"
import API from '../../../api/axios';

//Component
import EditExercise from '../EditExercise/EditExercise.jsx'

//Image
import createExercise from "/images/createExercise.jpg"

const SummaryExercise888 = () => {

  const navigate = useNavigate();

  const [summaryData, setSummaryData] = useState({});
  const [reload, setReload] = useState(false);   // ประกาศค่าเรื่มต้น รอรีโหลด

  //Modal popup
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);   // กดเพื่อ popup มา 
  const handleClose = () => {
    setOpen(false);                       //เปิด
    setReload(!reload);                    // reload หน้า
  };

  const token = localStorage.getItem('token');
  const headers = {
    'Authorization': `Bearer ${token}`
  }
  const exerciseActivityRoute = "api/exercise-activities";

  //Modal popup style
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
    getExerciseActivitiesByUserId();
  }, [reload]);      

  //get Exercise Activities data
  const getExerciseActivitiesByUserId  = async () => {
      
    // const id = '65b9cf92703abf9fed197cb6';
    const id = localStorage.getItem('exercise_activity_id');
    
    if(localStorage.getItem('exercise_activity_id') === null){

    }

    const response = await API.get(`${exerciseActivityRoute}/${id}`, {headers: headers}); // [GET] https://localhost:5000/api/:user_id
    console.log("response: ", response.data.data)
    // set Exercise Activities here
    if (response.data.data) {
      setSummaryData(response.data.data);
      localStorage.removeItem('exercise_activity_id');
    }

  };

   // Update Tracking Exercise Activity to api
   const updateExerciseActivity = async ({id, activity_type_id, caption, description, hour, minute, date, image}) => {  // รับข้อมูลจาก database มาเพื่อรอแก้ไข
    // const id = '65b9fced5cfcc8eb551496b6';
    const requestData = {    // เลือกว่าจะแก้ไขอะไร แล้วตั้งชื่อว่า requesdata 
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
    const response = await API.put(`${exerciseActivityRoute}/${id}`, requestData, {headers: headers});// [PUT] https://localhost:5000/api/users , requestData    ยิงไป post man
    // respons เอาไว้เช็คว่าทำงานได้รึยัง 
    if (response.statusText === "OK") {
    localStorage.setItem('exercise_activity_id', response.data.data._id);   // เว็บ browser จะช่วยในการจำค่าใน web เป็นการฝากข้อมูลเก่าไว้ก่อน แล้วเอาขข้อมูลใหม่มาโชว์
    console.log("id from update: ",response.data.data._id);
    setReload(!reload);
    navigate("/exercise-activity/summary");
    }
    console.log(response);
  };

    // Delete data
    const removeData = async (id) => {
console.log("id: ", id)
      const response = await API.delete(`${exerciseActivityRoute}/${id}`, {headers: headers})
  
      if (response.status === 200) {     // ถ้าลบสำเร็จ 105 จะช่วย reload
        setReload(!reload);
        console.log(response);
      }
    };


  return (
<>
      <ThemeProvider theme={theme}>
        <Container
          sx={{
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
              Summary your activity
            </Typography>
            
            <div className="mb-5 flex flex-col w-full bg-white border-2 border-pink rounded-main">
              <input type="hidden" id="id" value={summaryData._id} />
              <div className="flex justify-between">
                <div className="text-pink font-semibold bold p-5 flex justify-start">
                  <label htmlFor="caption">Your caption</label>
                </div>
                
                <button onClick={() => removeData(summaryData._id)} className="text-grey pr-5 flex justify-start items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>                </button>
                <button onClick={handleOpen} className="text-grey pr-5 flex justify-start items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"/></svg>
                </button>
                
              </div>  
              <textarea
                id="caption"
                rows="1"
                className="resize-none disabled:bg-white placeholder-grey outline-0 block p-5 w-full text-sm rounded-card border-grey"
                placeholder="Type some caption here..."
                value={summaryData.caption}
                disabled
              />
              
              <div className="flex justify-center">
                <img className="w-80 h-full object-cover" src={createExercise} alt="The group of women are running" />
              </div>
              <div className="text-pink font-semibold bold p-5 flex justify-start">
                <label htmlFor="description">Description</label>
              </div>
              <textarea
                id="description"
                rows="5"
                className="resize-none disabled:bg-white placeholder-grey-dark outline-0 block p-5 w-full text-sm border-grey"
                placeholder="Type some caption here..."
                value={summaryData.description}
                disabled
              />
              <div className="text-white rounded-summary bg-pink text-sm text-grey-dark p-5">
                <p>Type: {summaryData.activity_type_id}</p>
                <p>Duration: {`${summaryData.hour} hour ${summaryData.minute} minute`}</p>
                <p>Calories: xxx</p>
                <p>Date: {summaryData.date}</p>
              </div>
            </div>

            <button type="submit" 
              className="mb-6 text-white rounded-4xl bg-blue text-lg w-full py-1 text-center"
              >
              <Link href="/create-new-password" color='primary.white' underline="none">
                Share
              </Link>
            </button>

            <button type="submit" 
              className="mb-6 text-white rounded-4xl bg-pink text-lg w-full py-1 text-center"
              >
              <Link href="/create-new-password" color='primary.white' underline="none">
                Back to Dashboard
              </Link>
            </button>

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
          </Box>
        </Container>
      </ThemeProvider>
    </>
      )
}

export default SummaryExercise888
















-------------------------------------------------------------------------------------




import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { theme } from "../../../theme"
import createExercise from "/images/createExercise.jpg"


import { Box, Container, Typography, ThemeProvider, } from "@mui/material"


const EditExercise888 = ({update, summaryData, handleClose}) => {

  const navigate = useNavigate();

  const [exerciseActivity, setExerciseActivity] = useState([]);
  const exerciseActivityRoute = "api/exercise-activities";

  const token = localStorage.getItem('token');

  const headers = {
      'Authorization': `Bearer ${token}`
  }

  const [formData, setFormData] = useState({
    id: summaryData._id,
    activity_type_id: summaryData.activity_type_id,
    caption: summaryData.caption,
    description: summaryData.description,
    hour: summaryData.hour,
    minute: summaryData.minute,
    date: summaryData.date,
    image: summaryData.image
  });

  const [formErrors, setFormErrors] = useState({
    id: "",
    activity_type_id: "",
    caption: "",
    description: "",
    hour: "",
    minute: "",
    date: "",
    image: ""
  });

  useEffect(() => {
    getExerciseActivity();
  }, []);

  //get Activity type data
  const getExerciseActivity  = async () => {
      
    const response = await API.get(`${exerciseActivityRoute}`); // [GET] https://localhost:5000/api/activity-type
    console.log("response: ", response.data.data)
    // set member here
    if (response.status === 200 && response.data.data) {
      setExerciseActivity([...response.data.data]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.activity_type_id.trim()) {
      errors.activity_type_id = "Activity Type is required";
      isValid = false;
    }
    if (!formData.caption.trim()) {
      errors.caption = "Caption is required";
      isValid = false;
    }

    if (!formData.description.trim()) {
      errors.description = "Description is required";
      isValid = false;
    }

    if (!formData.hour.trim()) {
      errors.hour = "Hour is required";
      isValid = false;
    }

    if (!formData.minute.trim()) {
      errors.minute = "Minute is required";
      isValid = false;
    }
    if (!formData.date.trim()) {
      errors.date = "Date is required";
      isValid = false;
    }
    // if (!formData.image.trim()) {
    //   errors.image = "Image is required";
    //   isValid = false;
    // }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      update(formData);
      console.log("Form data submitted:", formData);
    } else {
      console.log(formErrors)
      console.log("Form submission failed due to validation errors.");
    }
  }
    
     

  return (
<>
      <ThemeProvider theme={theme}>
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
              Tracking Exercise Activity
            </Typography>
            <input type="hidden" id="id" name="id" value={formData.id} />
            <form onSubmit={handleSubmit}>
              <select onChange={handleInputChange} name="activity_type_id" className="mb-10 outline-0 block w-full p-2.5 px-0.5 rounded-4xl bg-blue text-white pl-5 text-sm">
                <option value={formData.activity_type_id}>Running</option>
>>>>>>> 2b96c38 (History mockup v.4)
                <option value="Weight training">Weight training</option>
                <option value="Hike">Hike</option>
                <option value="Yoga">Yoga</option>
                <option value="Swimming">Swimming</option>
                <option value="Bicycle ride">Bicycle ride</option>
                <option value="Walking">Walking</option>
              </select>
<<<<<<< HEAD
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
                  <CardActions>
                  <Button size="small">View</Button>           
                  <Button size="small">Delete</Button>
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

export default History2
=======

               {/* TODO: connect api */}
              {/* <select onChange={handleInputChange}>
              {activitiesType.map((activityType) => (
                <option value={formData.activityType.id}>
                  {formData.activityType.name}
                </option>
                ))}
              </select> */}
              <span className="error text-red">{formErrors.activity_type_id}</span>

              <div className="flex flex-col w-full bg-white border border-grey rounded-main">
                <div className="text-pink font-semibold bold p-5 flex justify-start">
                  <label for="caption">Your caption</label>
                </div>
                <textarea
                  id="caption"
                  rows="1"
                  name="caption"
                  className="resize-none placeholder-grey outline-0 block p-5 w-full text-sm rounded-card border-b border-grey"
                  placeholder="Type some caption here..."
                  value={formData.caption} onChange={handleInputChange}
                ></textarea>
                <span className="error text-red">{formErrors.caption}</span>
                <div className="flex justify-center">
                  <img className="w-80 h-full object-cover" src={createExercise} alt="The group of women are running" />
                </div>
                <div className="text-pink font-semibold bold p-5 flex justify-start">
                  <label for="description">Description</label>
                </div>
                <textarea
                  id="description"
                  rows="5"
                  name="description"
                  className="resize-none placeholder-grey-dark outline-0 block p-5 w-full text-sm border-grey rounded-main"
                  placeholder="Type some description here..."
                  value={formData.description} onChange={handleInputChange}
                ></textarea>
                <span className="error text-red">{formErrors.description}</span>
              </div>

              <div className="gap-2 mt-5 mb-5 flex justify-center">
                <label htmlFor="duration">Duration: </label>
                <input type="number" name="hour" placeholder="Hour" className="border" 
                value={formData.hour} onChange={handleInputChange}/>
                <span className="error text-red">{formErrors.hour}</span>

                <input type="number" name="minute" placeholder="Minute" className="border" 
                value={formData.minute} onChange={handleInputChange}/>
                <span className="error text-red">{formErrors.minute}</span>
              </div>
              <div className="gap-2 mb-5 flex justify-center">
                <label htmlFor="date">Date: </label>
                <input type="date" name="date" className="border" 
                       value={formData.date} onChange={handleInputChange} />
                <span className="error text-red">{formErrors.date}</span>
              </div>

              <button type="submit" 
                className="mb-6 text-white rounded-4xl bg-pink text-lg w-full py-1 text-center"
                >
                {/* <Link href="/create-new-password" color='primary.white' underline="none"> */}
                  Update
                {/* </Link> */}
              </button>

              <button onClick={handleClose}>Close</button>

            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </>
      )
}

export default EditExercise888
>>>>>>> 2b96c38 (History mockup v.4)
