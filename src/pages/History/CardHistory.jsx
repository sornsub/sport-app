import { useState, useEffect } from 'react'
import { Card, 
         CardActions,
         CardContent,
         CardMedia,
         Modal,
         Grid,
         Button,
         Box,
         Typography  
       }from '@mui/material';
import API from '../../api/axios';

const CardHistory = ({exerciseActivity, removeData, pathView}) => {   

    //state
    const [activitiesTypeData, setActivitiesTypeData] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        getActivitiesTypeById();
    }, [reload]);

    //for axios call api
    const activityTypeRoute = "api/activity-type";
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}`}

    // //Handle Modal popup
    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => {
        setOpen2(false);
        setReload(!reload);
    };
    // modal style
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

    const getActivitiesTypeById = async () => {   
        const id = exerciseActivity.activity_type_id;
        const response = await API.get(`${activityTypeRoute}/${id}`, {headers: headers}); // [GET] https://localhost:5000/api/activity-type
        console.log("response: ", response.data.data)
        // set member here
        if (response.status === 200 && response.data.data) {
            setActivitiesTypeData(response.data.data);
        }
    };

    return (



        <Grid item key={exerciseActivity._id} xs={12} sm={6} md={4}>
            <Card

                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardActions>
                    <input type="hidden" id="id" value={exerciseActivity._id} />
                    {/* <input type="hidden" id="id" value={activitiesTypeData} /> */}
                    <Button size="small">View</Button>
                    <button onClick={() => pathView(exerciseActivity._id)} className="text-grey pr-5 flex justify-start items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z" /></svg>
                    </button>

                    <Button size="small">Delete</Button>
                    <button onClick={handleOpen2} className="text-grey pr-5 flex justify-start items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd" /></svg>
                    </button>
                    {/* <button
             onClick={handleOpen}
             className="rounded-4xl text-white bg-red text-sm w-full px-5 py-2.5 text-center"
            >
             Delete Account
            </button> */}
                    <Modal
                        className="self-center"
                        open={open2}
                        onClose={handleClose2}
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
                            
                                //  className="rounded-4xl text-white bg-red text-sm w-full px-5 py-2.5 text-center"
                                className="outline-0 pl-5 placeholder-white border-transparent rounded-4xl bg-pink text-white text-sm block w-full p-2.5"
                            >
                                Delete for sure
                            </button>
                            <Typography>

                            </Typography>
                            <button
                                onClick={() => handleClose2()} 
                                className="rounded-4xl text-white bg-pink text-sm w-full px-5 py-2.5 text-center mt-3" 
                            >
                                 Cancel
                            </button>
                            {/* <DeleteButtonNested /> */}
                        </Box>
                    </Modal>
                </CardActions>

                <CardMedia
                    component="div"
                    sx={{
                        // 16:9
                        pt: '56.25%',
                    }}
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
                        Type: {activitiesTypeData.name}
                    </Typography>
                    <Typography>
                        Duration: {exerciseActivity.hour}:{exerciseActivity.minute}
                    </Typography>
                    <Typography>
                        Distance: {exerciseActivity.distance}
                    </Typography>
                    <Typography>
                        Calories: {exerciseActivity.calories}
                    </Typography>
                    <Typography>
                        Date: {exerciseActivity.date}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>)
}

export default CardHistory