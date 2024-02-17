import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Navmenu from "./Navmenu";

const Navbar = ({ drawerWidth }) => {
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
    >
      <Toolbar className="flex justify-evenly">
<<<<<<< HEAD
        {/* <img src="../public/images/logoRemoveBg.png" className="object-cover" /> */}
        <Typography variant="h6" noWrap component="div">
          Sport App
=======
        <Typography variant="h6" noWrap component="div" >
          Permanent drawer
>>>>>>> e9e292e5961a92dc449176abe36fbd37393f2c37
        </Typography>
        <Navmenu />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
