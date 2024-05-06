import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import logo from "../assets/logo.svg";
import ProfessionalRegisterModal from "./ProfessionalRegisterModal";
import OtpModal from "./OtpModal";

const LoginModal = ({ open, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showProfessionalModal, setShowProfessionalModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission
    console.log("Phone Number:", phoneNumber);
    setShowOtpModal(true);
    // onClose();
  };
  const handleRegisterClick = () => {
    setShowProfessionalModal(true);
  };
  return (
    <>
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
          <img src={logo} alt="logo" />
          <Typography variant="h5" gutterBottom>
            Welcome
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Please enter your mobile number to receive a one-time password (OTP)
            for login.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              margin="normal"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#00B5B1" }}
            >
              Login
            </Button>
          </form>
          <Typography variant="subtitle2">
            Don't have an account?{" "}
            <Typography
              component="span"
              sx={{ cursor: "pointer", color: "blue" }}
              onClick={handleRegisterClick} // Open register modal on click
            >
              Register here
            </Typography>
          </Typography>
          <OtpModal open={showOtpModal} />
          <ProfessionalRegisterModal
            open={showProfessionalModal}
            onClose={() => setShowProfessionalModal(false)}
          />
        </Box>
      </Modal>
    </>
  );
};

export default LoginModal;
