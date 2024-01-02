import React from 'react'
import Nav from './Nav.jsx'

const DashboardLayout = (children) => {
  return (
    <>
        <Nav />
        <div>{children}</div>
    </>
    
  )
}

export default DashboardLayout