import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { theme } from "../../../theme"
import CalculateCalories from '../../../components/CalculateCalories/CalculateCalories.jsx';
import UploadImage from '../../../components/UploadImage/UploadImage.jsx';
import { Box, Container, Typography, ThemeProvider, Button, Modal } from "@mui/material"
import ActivityTypeAPI from '../../../api/services/activityType';
import moment from 'moment';

const EditExercise = ({update, summaryData, handleClose, reload, setReload}) => {
  const navigate = useNavigate();
  const [activitiesTypeList, setActivitiesTypeList] = useState([]);
  const [selectedActivityType, setSelectedActivityType] = useState(summaryData.activity_type_id)
  const [activitiesTypeData, setActivitiesTypeData] = useState([]);

  const [calories, setCalories] = useState(summaryData.calories);
  const [weight, setWeight] = useState(60);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [met, setMet] = useState(3);

  //Dropzone Modal
  const [modalOpen, setModalOpen] = useState(false);
  const handleDropZoneOpen = () => setModalOpen(true);
  const handleDropZoneClose = () => setModalOpen(false);

  const [image, setImage] = useState("");


  // const [reload, setReload] = useState(false);
  const [formData, setFormData] = useState({
    id: summaryData._id,
    activity_type_id: summaryData.activity_type_id,
    caption: summaryData.caption,
    description: summaryData.description,
    hour: summaryData.hour,
    minute: summaryData.minute,
    date: moment(summaryData.date).format("YYYY-MM-DD"),
    distance: summaryData.distance,
    calories: calories,
    image: image !== "" ? image : summaryData.image
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

  // For get Type Activity
  useEffect(() => {
    getActivityTypeById();
    calculateCaloriesFunc();
    getActivitiesTypeList()
    getMetById()
  }, [calories, weight, hour, minute, met, selectedActivityType]);

  // Get Activity Type List
  const getActivitiesTypeList  = async () => {
    const response = await ActivityTypeAPI.getActivitiesTypeList();
    if (response.status === 200 && response.data.data) {
      setActivitiesTypeList([...response.data.data]);
    }
  };

  // Function to calculate calories
  const calculateCaloriesFunc = () => {
    let result = ((0.0175* met * weight * ((parseInt(hour) * 60) + parseInt(minute))).toFixed(2)); // duration is in minutes, convert it to hours
    setCalories(result);
  };

  const getMetById = async () => {
    const id = selectedActivityType;
    
    const response = await ActivityTypeAPI.getMetById(id);
    if (response.success === true && response.data) {
      setMet(response.data.met);
    }
  };

  const getActivityTypeById = async () => {

    const id = summaryData.activity_type_id;
    const response = await ActivityTypeAPI.getActivityTypeById(id)
    if (response.success === true && response.data) {
      setActivitiesTypeData(response.data);
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

  // Link to History
  // const BackToHistory = async (id) => {
  //       navigate("/history");        
  // };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.activity_type_id === null) {
      errors.activity_type_id = "Activity Type is required";
      isValid = false;
    }
    if (!formData.caption === null) {
      errors.caption = "Caption is required";
      isValid = false;
    }

    if (!formData.description === null) {
      errors.description = "Description is required";
      isValid = false;
    }

    if (!formData.hour === null) {
      errors.hour = "Hour is required";
      isValid = false;
    }

    if (!formData.minute === null) {
      errors.minute = "Minute is required";
      isValid = false;
    }
    if (!formData.date === null) {
      errors.date = "Date is required";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const requestData = {
        id: summaryData._id,
        activity_type_id: selectedActivityType, 
        caption: formData.caption,
        description: formData.description,
        hour: formData.hour,
        minute: formData.minute,
        distance: formData.distance,
        calories: calories, // value from calculate carories function.
        date: formData.date,
        image: image !== "" ? image : formData.image, //value from api upload image to cdn.
      };
      
      update(requestData);
      setReload(!reload)
    } else {
      console.log(formErrors)
      console.log("Form submission failed due to validation errors.");
    }
  }
    
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow:'scroll',
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container sx={{display: "flex",alignItems: "center",justifyContent: "center"}}>
          <Box sx={{ width: "872px", textAlign: "center" }}>
            <Typography variant="h5" component="h1" sx={{ fontWeight: "medium",m:5}}>
              Edit Exercise Activity
            </Typography>
            <input type="hidden" id="id" name="id" value={activitiesTypeData.id} />
            <form onSubmit={handleSubmit}>
              <select onChange={handleInputChange} name="activity_type_id" value={formData.activity_type_id} className="focus:ring-none mb-10 border-none block w-full p-2.5 rounded-4xl bg-blue text-white pl-5 pr-5 text-sm">
                <option value="select">Select</option>
                {activitiesTypeList.map((activitiesType) => (
                  <option key={activitiesType._id} value={activitiesType._id}>
                    {activitiesType.name}
                  </option>
                ))}
              </select>
              <span className="error text-red">{activitiesTypeData.name}</span>
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
                ></textarea>
                <span className="error text-red">{formErrors.caption}</span>
                <div className="flex justify-center flex-col items-center">
                  <img className="w-80 h-full object-cover" src={image !== "" ? image : formData.image} alt="The group of women are running" />
                  
                  {/* <img className="w-80 h-full object-cover" src={createExercise} alt="The group of women are running" /> */}
                  <button onClick={handleDropZoneOpen} className="block w-36 items-center mb-6 text-white rounded-4xl bg-pink text-lg py-1 text-center">
                    Update Image
                  </button> 
                </div>
                
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
              <div className="gap-2 mt-5 mb-5 flex justify-center">
                <label htmlFor="distance" className="text-pink font-semibold bold">Distance </label>
                <input type="number" name="distance" placeholder="input number..." className="focus:outline-pink border-grey border rounded-main pl-3 w-40" min="0"
                value={formData.distance} onChange={handleInputChange}/>
                km
              </div>
              {/* CalculateCalories Component */}
              <CalculateCalories calories={calories} /> 
              <div className="gap-2 mb-5 flex justify-center">
                <label htmlFor="date">Date: </label>
                <input type="date" name="date" className="border" 
                        value={formData.date} onChange={handleInputChange} />
                <span className="error text-red">{formErrors.date}</span>
              </div>

              <button type="submit" className="mb-6 text-white rounded-4xl bg-pink text-lg w-full py-1 text-center">
                Update
              </button>
              {/* <button onClick={() => BackToHistory(id)} type="submit" 
              className="mb-6 text-white rounded-4xl bg-pink text-lg w-full py-1 text-center"
              >              
                  Update
              </button> */}
              {/* <button onClick={handleSubmit()} type="submit" 
              className="mb-6 text-white rounded-4xl bg-pink text-lg w-full py-1 text-center"
              >              
                  Update
              </button> */}
              <button onClick={handleClose} className="mb-6 text-white rounded-4xl bg-pink text-lg w-full py-1 text-center">
                Close
              </button>
              {/* <button onClick={handleClose}>Close</button> */}
            </form>
          </Box>
        </Container>
      </ThemeProvider>

      <div>
        <Modal
          open={modalOpen}
          onClose={handleDropZoneClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>  
            <UploadImage setImage={setImage}/>
          </Box>
        </Modal>
      </div>
    </>
  )
}

export default EditExercise