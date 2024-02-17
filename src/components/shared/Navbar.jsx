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
        {/* <img src="../public/images/logoRemoveBg.png" className="object-cover" /> */}
        <Typography variant="h6" noWrap component="div">
          Sport App
        </Typography>
        <Navmenu />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
