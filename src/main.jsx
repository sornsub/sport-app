import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// font inter
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Login from './pages/Login/Login.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import ActivityType from './pages/ActivityType/ActivityType.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import CreateExercise from './pages/Exercise/CreateExercise/CreateExercise.jsx';
import EditExercise from './pages/Exercise/EditExercise/EditExercise.jsx';
import DeleteExercise from './pages/Exercise/DeleteExercise/DeleteExercise.jsx';
import History from './pages/History/History.jsx';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import EmailVerification from './pages/Authentication/ForgotPassword/EmailVerification.jsx';
import ForgotPassword from './pages/Authentication/ForgotPassword/ForgotPassword.jsx';
import CreateNewPassword from './pages/Authentication/ForgotPassword/CreateNewPassword.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/activity-type',
    element: <ActivityType />
  },
  {
    path: '/email-verification',
    element: <EmailVerification />
  },
  {
    path: '/create-new-password',
    element: <CreateNewPassword />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/exercise-create',
    element: <CreateExercise />
  },
  {
    path: '/exercise-edit',
    element: <EditExercise />
  },
  {
    path: '/exercise-delete',
    element: <DeleteExercise />
  },
  {
    path: '/history',
    element: <History />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
