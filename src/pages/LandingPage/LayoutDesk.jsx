import React from 'react'
import Navbar from './Nav'

export const LayoutDesk = ({children}) => {
  return (
    <Navbar>
        {children}
    </Navbar>
  )
}

