import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/logo.svg";
import ProfessionalRegisterModal from "./ProfessionalRegisterModal";
import ProviderRegisterModal from "./ProviderRegisterModal";
import LoginModal from "./LoginModal";


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 12,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    // "& .MuiMenuItem-root": {
    //   "& .MuiSvgIcon-root": {
    //     fontSize: 14,
    //     color: theme.palette.text.secondary,
    //     marginRight: theme.spacing(1.5),
    //   },
    //   "&:active": {
    //     backgroundColor: alpha(
    //       theme.palette.primary.main,
    //       theme.palette.action.selectedOpacity
    //     ),
    //   },
    // },
  },
}));
const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showProfessionalModal, setShowProfessionalModal] = useState(false);
  const [showProviderModal, setShowProviderModal] = useState(false);
  const[showLoginModal,setShowLoginModal]=useState(false);
  const handleProfessionalClick = () => {
    setShowProfessionalModal(true);
    setShowProviderModal(false);
    handleMenuClose();
  };

  const handleProviderClick = () => {
    setShowProviderModal(true);
    setShowProfessionalModal(false);
    handleMenuClose();
  };
  const handleProviderClose=()=>{
    setShowProviderModal(false);
  }
  const handleProfessionalClose=()=>{
    setShowProfessionalModal(false);
  }


  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLoginClick=()=>{
    setShowLoginModal(true);
  }
  const handleLoginModalClose=()=>{
    setShowLoginModal(false);
  }

  return (
    <div className="nav-bar">
      <AppBar sx={{ backgroundColor: "inherit", position: "sticky" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={handleMenuClick}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ marginRight: "5px", backgroundColor: "#00B5B1" }}
            >
              Register
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleProfessionalClick} disableRipple>
                Healthcare Professional
              </MenuItem>
              <MenuItem onClick={handleProviderClick} disableRipple>
                Healthcare Providers
              </MenuItem>
            </StyledMenu>
            <ProfessionalRegisterModal
              open={showProfessionalModal}
              onClose={handleProfessionalClose}
            />
            <ProviderRegisterModal
              open={showProviderModal}
              onClose={handleProviderClose}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00B5B1",
                color: "white",
                marginLeft: "",
              }}
              onClick={handleLoginClick}
            >
              Login
            </Button>
            <LoginModal open={showLoginModal} onClose={handleLoginModalClose}/>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
