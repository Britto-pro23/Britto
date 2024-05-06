import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import logo from "../assets/logo.svg";
import "./ProfessionalRegisterModal.css";
import OtpModal from "./OtpModal";
import LoginModal from "./LoginModal";

const ProfessionalRegisterModal = ({ open, onClose }) => {
  const [showOTPModal, setShowOTPModal] = useState(false);
  const[showLoginModal,setShowLoginModal]=useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const handleGetOTP = () => {
    setShowOTPModal(true);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log(formData);
//   };
  const handleResendOTP = () => {
    // Handle resend OTP
  };
  const handleLoginModal=()=>{
    setShowLoginModal(true);
  }
  return (
    <>
    {!showOTPModal &&( 
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            width: "30%",
            backgroundColor: "#ffffff",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            padding: "20px",
          }}
        >
          <div>
            <img src={logo} alt="logo" />
          </div>
          <Typography variant="h5" gutterBottom>
            Register Now
          </Typography>
          <Typography className="otpdesc" variant="p">
            Please provide your details and mobile number to receive a one-time
            password (OTP) for account verification
          </Typography>
            <form onSubmit={handleGetOTP}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                variant="outlined"
                margin="normal"
                value={formData.firstName}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                variant="outlined"
                margin="normal"
                value={formData.lastName}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                margin="normal"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                variant="outlined"
                margin="normal"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "#00B5B1" }}
              >
                Get OTP
              </Button>
            </form>
            <Typography variant="subtitle2" >
              Already having a Account{" "}
              <Typography component="span"
              sx={{ cursor: "pointer", color: "blue" }} onClick={handleLoginModal}>Login</Typography>
            </Typography>
            </Box>
            </Modal>
        )}
          {showOTPModal && (
            <OtpModal
              open={true}
            //   onClose={() => setShowOTPModal(false)}
              onEdit={() => setShowOTPModal(true)}
              resendOTP={handleResendOTP}
            />
          )}
          <LoginModal open={showLoginModal} onClose={()=>{setShowLoginModal(false)}}/>
    </>
  );
};

export default ProfessionalRegisterModal;
