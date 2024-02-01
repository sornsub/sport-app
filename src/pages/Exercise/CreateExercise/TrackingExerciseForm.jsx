import React, { useState, useEffect } from 'react'
import API from '../../../api/axios';
import { Box, Container, Typography, ThemeProvider } from "@mui/material"
import { useNavigate } from "react-router-dom";

import createExercise from "/images/createExercise.jpg"
import { theme } from "../../../theme"
import { Link } from "react-router-dom"

const TrackingExerciseForm = () => {

  const navigate = useNavigate();

  const [activitiesType, setActivitiesType] = useState([]);
  const [reload, setReload] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const [id, setId] = useState("");

  const exerciseActivityRoute = "api/exercise-activities";

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
    date: "",
    image: ""
  });

  const [formErrors, setFormErrors] = useState({
    activity_type_id: "",
    caption: "",
    description: "",
    hour: "",
    minute: "",
    date: "",
    image: ""
  });

  //TODO: Waitting for connect api Activity Type (master data)

  // useEffect(() => {
  //   getActivitiesType();
  // }, [reload]);

  // //get Activity type data
  // const getActivitiesType  = async () => {
      
  //   const response = await API.get(`${exerciseActivityRoute}`); // [GET] https://localhost:5000/api/activity-type
  //   console.log("response: ", response.data.data)
  //   // set member here
  //   if (response.status === 200 && response.data.data) {
  //     setActivitiesType([...response.data.data]);
  //   }
  // };

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
      createExerciseActivity(formData);
      console.log("Form data submitted:", formData);
    } else {
      console.log(formErrors)
      console.log("Form submission failed due to validation errors.");
    }
  }

      // Create Tracking Exercise Activity to api
      const createExerciseActivity = async ({activity_type_id, caption, description, hour, minute, date, image}) => {
        const requestData = {
          activity_type_id: activity_type_id,
          caption: caption,
          description: description,
          hour: hour,
          minute: minute,
          date: date,
          image: image,
        };
        console.log(requestData);
        const response = await API.post(`${exerciseActivityRoute}`, requestData, {headers: headers});// [POST] https://localhost:5000/api/users , requestData

        if (response.status === 201) {
        // setReload(!reload);
        localStorage.setItem('exercise_activity_id', response.data.data._id);
        navigate("/exercise-activity/summary");
        }
        console.log(response);
    };

    
      // Update Tracking Exercise Activity to api
    //   const updateExerciseActivity = async ({id, activity_type_id, caption, description, hour, minute, date, image}) => {
    //     const id = '65b9fced5cfcc8eb551496b6';
    //     const requestData = {
    //       activity_type_id: activity_type_id,
    //       caption: caption,
    //       description: description,
    //       hour: hour,
    //       minute: minute,
    //       date: date,
    //       image: image,
    //     };
    //     console.log(requestData);
    //     const response = await API.put(`${exerciseActivityRoute}/${id}`, requestData, {headers: headers});// [PUT] https://localhost:5000/api/users , requestData

    //     if (response.status === 201) {
    //     // setReload(!reload);
    //     localStorage.setItem('exercise_activity_id', response.data.data._id);
    //     navigate("/exercise-activity/summary");
    //     }
    //     console.log(response);
    // };


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
            <form onSubmit={handleSubmit}>
              <select onChange={handleInputChange} name="activity_type_id" className="mb-10 outline-0 block w-full p-2.5 px-0.5 rounded-4xl bg-blue text-white pl-5 text-sm">
                <option value={formData.activity_type_id}>Running</option>
                <option value="Weight training">Weight training</option>
                <option value="Hike">Hike</option>
                <option value="Yoga">Yoga</option>
                <option value="Swimming">Swimming</option>
                <option value="Bicycle ride">Bicycle ride</option>
                <option value="Walking">Walking</option>
              </select>

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
                  Save
                {/* </Link> */}
              </button>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </>
      )
}

export default TrackingExerciseForm