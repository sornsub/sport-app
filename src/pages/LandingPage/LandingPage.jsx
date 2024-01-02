import React from 'react'
import landingPage1 from '/images/landingPage1.jpg'
import landingPage2 from '/images/landingPage2.jpg'
import landingPage3 from '/images/landingPage3.jpg'
import landingPage4 from '/images/landingPage4.jpg'
import landingPage5 from '/images/landingPage5.jpg'

const LandingPage = () => {
  return (
    <>
        <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
                <img src={landingPage1} className="w-full" alt="Landing Page 1" />
            </div> 
            <div id="item2" className="carousel-item w-full">
                <img src={landingPage2} className="w-full" />
            </div> 
            <div id="item3" className="carousel-item w-full">
                <img src={landingPage3} className="w-full" />
            </div> 
            <div id="item4" className="carousel-item w-full">
                <img src={landingPage4}  className="w-full" />
            </div>
        </div> 
        <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a> 
            <a href="#item2" className="btn btn-xs">2</a> 
            <a href="#item3" className="btn btn-xs">3</a> 
            <a href="#item4" className="btn btn-xs">4</a>
        </div>
    </>
  )
}

export default LandingPage