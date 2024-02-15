/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import API from '../../../api/axios';
import { Box, Container, Typography, ThemeProvider } from "@mui/material"
import { useNavigate } from "react-router-dom";

import { theme } from "../../../theme"
import UploadImage from '../../../components/UploadImage/UploadImage.jsx';
import CalculateCalories from '../../../components/CalculateCalories/CalculateCalories.jsx';

const TrackingExerciseForm = () => {

  const navigate = useNavigate();
//  use state activity type backup
  const [activitiesTypeList, setActivitiesTypeList] = useState([]);
  // const [selectedActivityType, setSelectedActivityType] = useState()
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [weight, setWeight] = useState(60);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [met, setMet] = useState(3);

  const exerciseActivityRoute = "api/exercise-activities";
  const activityTypeRoute = "api/activity-type";

  const token = localStorage.getItem('token');

  const headers = {
      'Authorization': `Bearer ${token}`
  }

  const [formData, setFormData] = useState({
    activity_type_id: "",
    caption: "",
    description: "",
    hour: "",
    minute: "",
    distance: "",
    date: "",
    image: ""
  });

  const [formErrors, setFormErrors] = useState({
    activity_type_id: "",
    caption: "",
    description: "",
    hour: "",
    minute: "",
    distance: "",
    date: "",
    image: ""
  });

  

  //TODO: Waitting for connect api Activity Type (master data)

  useEffect(() => {
    getActivitiesTypeList();
    calculateCaloriesFunc();
  }, [weight, hour, minute, met]);
  
  
  // //get Activity type data
  const getActivitiesTypeList  = async () => {

    const response = await API.get(`${activityTypeRoute}`, {headers: headers}); // [GET] https://localhost:5000/api/activity-type
    console.log("response: ", response.data.data)
    // set member here
    if (response.status === 200 && response.data.data) {
      setActivitiesTypeList([...response.data.data]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // setDuration(((parseInt(formData.hour) * 60) + parseInt(formData.minute)));
    if (name === 'weight') {
      setWeight(70);
    } else if (name === 'hour' ) {
      setHour(value);
    } else if (name === 'minute' ) {
      setMinute(value);
    } else if (name === 'met') {
      setMet(3);
      // const met =  getMetFromActivityTypes();
      // setMet(met);
    }
 
  };


  // Function to calculate calories
  const calculateCaloriesFunc = () => {
    // Formula to calculate calories burned: Calories = MET * weight(kg) * time(hours) and /1000 for Kcal
    let result = ((met * weight * ((parseInt(hour) * 60) + parseInt(minute)))/1000); // duration is in minutes, convert it to hours
    setCalories(result);
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
    if (!formData.distance.trim()) {
      errors.distance = "Distance is required";
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
      createExerciseActivity(formData);
    } else {
      console.log(formErrors)
      console.log("Form submission failed due to validation errors.");
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
        const response = await API.post(`${exerciseActivityRoute}`, requestData, {headers: headers});

        if (response.status === 201) {
        localStorage.setItem('exercise_activity_id', response.data.data._id);
        navigate("/exercise-activity/summary");
        }
    };

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
          <Box sx={{ width: "872px", textAlign: "center", }} >
            <Typography variant="h5" component="h1" sx={{ fontWeight: "medium", m:5, }}>
              Tracking Exercise Activity
            </Typography>
            <form onSubmit={handleSubmit}>
              <select onChange={handleInputChange} name="activity_type_id" className="focus:ring-none mb-10 border-none block w-full p-2.5 rounded-4xl bg-blue text-white pl-5 pr-5 text-sm">
                {activitiesTypeList.map((activitiesType) => (
                  <option value={activitiesType._id}>
                    {activitiesType.name}
                  </option>
                ))}                 
              </select>
              <span className="error text-red">{formErrors.activity_type_id}</span>
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
                <span className="error text-red">{formErrors.caption}</span>
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
                <span className="error text-red">{formErrors.description}</span>
              </div>
              <div className="gap-2 mt-5 mb-5 flex justify-center">
                <label htmlFor="duration" className="text-pink font-semibold bold">Duration </label>
                <input type="number" name="hour" placeholder="input number (0-23)" className="focus:outline-pink border-grey border rounded-main pl-3 w-48" min="0" max="23"
                value={formData.hour} onChange={handleInputChange}/>
                <span className="error text-red">{formErrors.hour}</span>
                <p>hour </p>
                <p> : </p>
                <input type="number" name="minute" placeholder="input number (0-59)" className="focus:outline-pink border-grey border rounded-main pl-3 w-48" min="0" max="59"
                value={formData.minute} onChange={handleInputChange}/>
                <span className="error text-red">{formErrors.minute}</span>
                <p>minute</p>
              </div>
              <div className="gap-2 mt-5 mb-5 flex justify-center">
                <label htmlFor="distance" className="text-pink font-semibold bold">Distance </label>
                <input type="number" name="distance" placeholder="input number..." className="focus:outline-pink border-grey border rounded-main pl-3 w-40" min="0"
                value={formData.distance} onChange={handleInputChange}/>
                <span className="error text-red">{formErrors.distance}</span>
                km
              </div>
              {/* CalculateCalories Component */}
              <CalculateCalories calories={calories} />
              <div className="gap-2 mb-5 flex justify-center">
                <label htmlFor="date" className="text-pink font-semibold bold">Date </label>
                <input type="date" name="date" className="focus:outline-pink text-grey border-grey border rounded-main pl-3 pr-3" 
                       value={formData.date} onChange={handleInputChange} />
                <span className="error text-red">{formErrors.date}</span>
              </div>
              <button type="submit" className="mb-6 text-white rounded-4xl bg-pink text-lg w-full py-1 text-center"
                >
                  Save
              </button>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default TrackingExerciseForm