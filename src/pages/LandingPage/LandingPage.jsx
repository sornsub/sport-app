import React from 'react'
import Slider from '@mui/material/Slider';
import './LandingPage.css';


const LandingPage = () => {
  return (
    <>
      <div className='bold underline'>LandingPage</div>
      <div>
        <Slider defaultValue={30} />
        <Slider defaultValue={30} className="slider" />
      </div>
    </>
  )
}

export default LandingPage