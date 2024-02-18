import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Navmenu from "./Navmenu";
import Nav2 from "./Nav2";
import Nav from "../../pages/ActivityType/Nav";

const Navbar = ({ drawerWidth }) => {
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
<<<<<<< HEAD
      <Nav />
=======
      <Nav2/>
>>>>>>> 7b5a7987b1889593877867d23262b846a66d8400
    </AppBar>
  );
};

export default Navbar;
