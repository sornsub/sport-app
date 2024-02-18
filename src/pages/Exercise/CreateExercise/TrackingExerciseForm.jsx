
import React, { useState, useEffect } from 'react'
import { Box, Container, Typography, ThemeProvider } from "@mui/material"
import { useNavigate } from "react-router-dom";
import Joi from 'joi';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { theme } from "../../../theme"
import UploadImage from '../../../components/UploadImage/UploadImage.jsx';
import CalculateCalories from '../../../components/CalculateCalories/CalculateCalories.jsx';
import ExerciseActivityAPI from '../../../api/services/exerciseActivity.js';
import ActivityTypeAPI from '../../../api/services/activityType.js';

const TrackingExerciseForm = () => {
  const MySwal = withReactContent(Swal);

  const navigate = useNavigate();
  const [activitiesTypeList, setActivitiesTypeList] = useState([]);
  const [selectedActivityType, setSelectedActivityType] = useState()
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [weight, setWeight] = useState(60);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [met, setMet] = useState(3);

  const [formData, setFormData] = useState({
    activity_type_id: "",
    caption: "",
    description: "",
    hour: "",
    minute: "",
    distance: "",
    date: ""
  });

  useEffect(() => {
    getActivitiesTypeList();
    calculateCaloriesFunc();
    getMetById()
  }, [weight, hour, minute, met, selectedActivityType]);
  
  // get Activity type data
  const getActivitiesTypeList  = async () => {

    const response = await ActivityTypeAPI.getActivitiesTypeList();
    if (response.status === 200 && response.data.data) {
      setActivitiesTypeList([...response.data.data]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'weight') {
      setWeight(70);
    } else if (name === 'hour' ) {
      setHour(value);
    } else if (name === 'minute' ) {
      setMinute(value);
    } else if (name === 'activity_type_id') {
      setSelectedActivityType(value);
    }
    calculateCaloriesFunc();
  };

  // Function to calculate calories
  const calculateCaloriesFunc = () => {
    let result = ((0.0175* met * weight * ((parseInt(hour) * 60) + parseInt(minute))).toFixed(2)); // duration is in minutes, convert it to hours
    setCalories(result);
  };

  const schema = Joi.object({
    activity_type_id: Joi.string().required().label('Activity Type'),
    caption: Joi.string().required().label('Caption'),
    description: Joi.string().required().label('Description'),
    hour: Joi.number().integer().min(0).max(23).required().label('Duration: hour')
    .messages({'string.pattern.base': 'Hour must contain only number and be between 0 and 23'}),
    minute: Joi.number().integer().min(0).max(59).required().label('Duration: minute')
    .messages({'string.pattern.base': 'Minute must contain only number and be between 0 and 59'}),
    distance: Joi.number().integer().min(0).required().label('Distance'),
    date: Joi.date().required().label('Date'),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationResult = schema.validate(formData, { abortEarly: false });
    if (validationResult.error) {
        const errorMessage = validationResult.error.details.map(detail => {
            if (detail.context.key === 'hour') {
                return `<div>Hour must contain only number and be between 0 and 23</div>`;
            }
            if(detail.context.key === 'minute'){
              return `<div>Minute must contain only number and be between 0 and 59</div>`;
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
        createExerciseActivity(formData);
    } catch (error) {
        console.error('Error:', error);
    }
  }

      // Create Tracking Exercise Activity to api
  const createExerciseActivity = async ({activity_type_id, caption, description, hour, minute, distance, date}) => {
    const requestData = {
      activity_type_id: activity_type_id, 
      caption: caption,
      description: description,
      hour: hour,
      minute: minute,
      distance: distance,
      calories: calories, // value from calculate carories function.
      date: date,
      image: image, //value from api upload image to cdn.
    };
    
    // [POST] https://localhost:5000/api/exercise-activities
    const response = await ExerciseActivityAPI.createExerciseActivity(requestData);
    console.log("response: ", response)
    if (response.success === true) {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your exercise activity has been created",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
          localStorage.setItem('exercise_activity_id', response.data._id);
          navigate("/exercise-activity/summary");
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
    if (response.status === 500) {
      setMet(0)
    }
  };
    
  const getMetById = async () => {
    const id = selectedActivityType;
    
    const response = await ActivityTypeAPI.getMetById(id);
    if (response.success === true && response.data) {
      setMet(response.data.met);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{display: "flex",alignItems: "center",justifyContent: "center"}}>
        <Box sx={{ width: "872px", textAlign: "center" }}>
          <Typography variant="h5" component="h1" sx={{ fontWeight: "medium",m:5}}>
            Tracking Exercise Activity
          </Typography>
          <form onSubmit={handleSubmit}>
            <select onChange={handleInputChange} name="activity_type_id" className="focus:ring-none mb-10 border-none block w-full p-2.5 rounded-4xl bg-blue text-white pl-5 pr-5 text-sm">
              <option value="select">Select</option>
              {activitiesTypeList.map((activitiesType) => (
                <option key={activitiesType._id} value={activitiesType._id}>
                  {activitiesType.name}
                </option>
              ))}
            </select>
            <div className="flex flex-col w-full bg-white border border-grey rounded-main">
              <div className="text-pink font-semibold bold p-5 flex justify-start">
                <label htmlFor="caption">Your caption</label>
              </div>
              <textarea
                id="caption"
                rows="1"
                name="caption"
                className="resize-none placeholder-grey outline-0 block p-5 w-full text-sm rounded-card border-b border-grey"
                placeholder="Type some caption here..."
                value={formData.caption} onChange={handleInputChange}
              />
              {/* UploadImage Component */}
              <UploadImage setImage={setImage}/>
              <div className="text-pink font-semibold bold p-5 flex justify-start">
                <label htmlFor="description">Description</label>
              </div>
              <textarea
                id="description"
                rows="5"
                name="description"
                className="resize-none placeholder-grey-dark outline-0 block p-5 w-full text-sm border-grey rounded-main"
                placeholder="Type some description here..."
                value={formData.description} onChange={handleInputChange}
              />
            </div>
            <div className="gap-2 mt-5 mb-5 flex justify-center">
              <label htmlFor="duration" className="text-pink font-semibold bold">Duration </label>
              <input type="number" name="hour" placeholder="input number (0-23)" className="focus:outline-pink border-grey border rounded-main pl-3 w-48" min="0" max="23"
              value={formData.hour} onChange={handleInputChange}/>
              <p>hour </p>
              <p> : </p>
              <input type="number" name="minute" placeholder="input number (0-59)" className="focus:outline-pink border-grey border rounded-main pl-3 w-48" min="0" max="59"
              value={formData.minute} onChange={handleInputChange}/>
              <p>minute</p>
            </div>
            <div className="gap-2 mt-5 mb-5 flex justify-center">
              <label htmlFor="distance" className="text-pink font-semibold bold">Distance </label>
              <input type="number" name="distance" placeholder="input number..." className="focus:outline-pink border-grey border rounded-main pl-3 w-40" min="0"
              value={formData.distance} onChange={handleInputChange}/>
              km
            </div>
            {/* CalculateCalories Component */}
            <CalculateCalories calories={calories} />
            <div className="gap-2 mb-5 flex justify-center">
              <label htmlFor="date" className="text-pink font-semibold bold">Date </label>
              <input type="date" name="date" className="focus:outline-pink text-grey border-grey border rounded-main pl-3 pr-3" 
                      value={formData.date} onChange={handleInputChange} />
            </div>
            <button type="submit" className="mb-6 text-white rounded-4xl bg-pink text-lg w-full py-1 text-center"
              >
                Save
            </button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default TrackingExerciseForm