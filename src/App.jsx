import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardLayout from "./components/layouts/DashboardLayout";
import History from './pages/History/History.jsx';
import SignUp from './pages/Authentication/SignUp/SignUp.jsx';
import ActivityType from "./pages/ActivityType/ActivityType.jsx";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/history" element={<DashboardLayout />}>
          <Route index element={<History />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/activity-type" element={<ActivityType />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
