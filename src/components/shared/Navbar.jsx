import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Navmenu from "./Navmenu";
import Nav from "../../pages/ActivityType/Nav"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Navbar = ({ drawerWidth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Clearing localStorage as an example

    //after loged out show alert success.
    Swal.fire({
      icon: 'success',
      title: 'Logged out successfully!',
      timer: 1500,
      timerProgressBar: true,
      didClose: () => {
        navigate("/login");
      }
    });

  };


  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
    >
      {/* <Toolbar className="flex justify-evenly">
        <img src="../public/images/logoRemoveBg.png" className="object-cover" />
        <Typography variant="h6" noWrap component="div">
          Sport App
        </Typography>
        <Navmenu />
      </Toolbar> */}
      <Nav/>
      <button onClick={handleLogout}>Logout</button>
    </AppBar>
  );
};

export default Navbar;
