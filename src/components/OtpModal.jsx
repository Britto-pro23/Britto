import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import logo from "../assets/logo.svg";

const OtpModal = ({ open, resendOTP, onEdit }) => {
  const [otpTimer, setOtpTimer] = useState(30);
  useEffect(() => {
    let timer = otpTimer;
    const interval = setInterval(() => {
      timer--;
      setOtpTimer(timer);
      if (timer === 0) {
        clearInterval(interval);
        // Handle timer expiration
      }
    }, 1000);
    if (open) {
        setOtpTimer(30);
      }

    return () => clearInterval(interval);
  }, [open]);
  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // Handle OTP submission
  };
  return (
    <Modal open={open}>
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" />
        <Typography variant="h5" gutterBottom>
          Enter OTP
        </Typography>
        <Typography variant="body1" gutterBottom>
          Enter the OTP received on your mobile number.
        </Typography>
        <IconButton
          onClick={onEdit}
        >
          <EditIcon />
        </IconButton>

        <form onSubmit={handleOTPSubmit}>
          <TextField
            fullWidth
            label="OTP"
            name="otp"
            variant="outlined"
            margin="normal"
          />
          {otpTimer > 0 ? (
          <Typography variant="body1" gutterBottom>
            Time left: {otpTimer} seconds
          </Typography>
        ) : (
          <Typography variant="body1" gutterBottom>
            Resend OTP <Link onClick={resendOTP}>here</Link>
          </Typography>
        )}
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#00B5B1" }}
          >
            Submit
          </Button>
        </form>
        
      </Box>
    </Modal>
  );
};

export default OtpModal;
