import React from "react"
import { Box, 
         Container, 
         ThemeProvider, 
} from "@mui/material"

import createExercise from "/images/createExercise.jpg"
import { theme } from "../../../theme"
import { Link } from "react-router-dom"
import Stopwatch from "../../../components/StopWatch/Stopwatch"

const RunTimeExercise = () => {

  let percent_loading = "45%";
  return (
<>
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            height: "100vh",
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
            <div className="mb-5 flex flex-col w-full">
              <div className="flex justify-center">
                <img className="w-80 h-full object-cover" src={createExercise} alt="The group of women are running" />
              </div>
            </div>

            {/* progress bar */}
            <div className="relative mb-8">
              <div className="rounded-full border border-pink p-1">
                <div className="flex h-6 items-center justify-center rounded-full bg-pink text-xs leading-none" style={{width: percent_loading}}>
                  <span className="p-1 text-black">{percent_loading}</span>
                </div>
              </div>
            </div>

           <div classname="mb-6 w-60">
              <p>Consistency <br />is the key to success in exercising.</p>
           </div>

           <Stopwatch />

            <div className="flex gap-44">
              <button type="submit" 
                className="mb-6 text-white rounded-4xl bg-pink text-lg w-full py-1 text-center"
              >
                <Link href="/activity-type" color='primary.white' underline="none">
                  Quit
                </Link>
              </button>
              <button type="submit" 
                className="mb-6 text-white rounded-4xl bg-pink text-lg w-full py-1 text-center"
              >
                <Link to="/exercise-activity/summary" color='primary.white' underline="none">
                  End
                </Link>
              </button>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    </>
      )
}

export default RunTimeExercise