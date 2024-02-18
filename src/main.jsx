import ReactDOM from "react-dom/client";
import "./index.css";

// font inter
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Authentication/Login/Login.jsx";
import SignUp from "./pages/Authentication/SignUp/SignUp.jsx";
import ActivityType from "./pages/ActivityType/ActivityType.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import CreateExercise from "./pages/Exercise/CreateExercise/CreateExercise.jsx";
import RunTimeExercise from "./pages/Exercise/CreateExercise/RunTimeExercise.jsx";
import SummaryExercise from "./pages/Exercise/CreateExercise/SummaryExercise.jsx";
import EditExercise from "./pages/Exercise/EditExercise/EditExercise.jsx";
import History from "./pages/History/History.jsx";

import EmailVerification from "./pages/Authentication/ForgotPassword/EmailVerification.jsx";
import ForgotPassword from "./pages/Authentication/ForgotPassword/ForgotPassword.jsx";
import CreateNewPassword from "./pages/Authentication/ForgotPassword/CreateNewPassword.jsx";

import LandingPageDesk1 from "./pages/LandingPage/LandingPageDesk1.jsx";

import ErrorPage from "./pages/ErrorPage.jsx";
import DashboardLayout from "./components/layouts/DashboardLayout";
import EditProfile from "./pages/Editprofile/EditProfile.jsx";

import ExerciseActivityLayout from "./components/layouts/ExerciseActivityLayout.jsx";
import UserList from "./pages/User/List.jsx";
import TrackingExerciseForm from "./pages/Exercise/CreateExercise/TrackingExerciseForm.jsx";
import Swipers from "./pages/LandingPage/Swipers.jsx";

import Running from "./pages/ActivityType/Running.jsx";
import Walking from "./pages/ActivityType/Walking.jsx";
import Yoga from "./pages/ActivityType/Yoga.jsx";
import WeigtTraining from "./pages/ActivityType/WeightTraining.jsx";
import Swimming from "./pages/ActivityType/swimming.jsx";
import InputFrom from "./pages/Authentication/SignUp/InputFrom.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageDesk1 />,
  },
  {
    path: "/swiper",
    element: <Swipers />,
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/activity-type",
    element: <ActivityType />,
  },
  {
    path: "/email-verification/:source",
    element: <EmailVerification />,
  },
  {
    path: "/create-new-password",
    element: <CreateNewPassword />,
  },
  {
    path: "/landingPageDesk1",
    element: <LandingPageDesk1 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/activity-type",
    element: <ActivityType />,
  },
  {
    path: "/activity-running",
    element: <Running />,
  },
  {
    path: "/activity-walking",
    element: <Walking />,
  },
  {
    path: "/activity-swimming",
    element: <Swimming />,
  },
  {
    path: "/activity-weight-training",
    element: <WeigtTraining />,
  },
  {
    path: "/activity-yoga",
    element: <Yoga />,
  },
  {
    path: "/exercise-create",
    element: <CreateExercise />,
  },
  {
    path: "/exercise-edit",
    element: <EditExercise />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/exercise-activity",
    element: <ExerciseActivityLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "create",
        element: <CreateExercise />,
      },
      {
        path: "create-form",
        element: <TrackingExerciseForm />,
      },
      {
        path: "run-time",
        element: <RunTimeExercise />,
      },
      {
        path: "summary",
        element: <SummaryExercise />,
      },      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
