import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import success from "../assets/images/success.png";
import "./ProviderRegisterModal.css";
import Autocomplete from "@mui/material/Autocomplete";
const ProviderRegisterModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    hospitalname: "",
    hospitalcategory: "",
    email: "",
    ceaNumber: "",
    location: "",
    reppersontype: null,
    repname: "",
    designation: "",
    imrNumber: "",
    contactNumber: "",

    // Add more fields as needed
  });
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      agreedTerms: e.target.checked,
    }));
  };
  const handleSuccessModalClose = () => {
    setSuccessModalOpen(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessModalOpen(true);
    console.log(formData); // You can handle form submission here
  };
  const top100Films = [
    { label: 'Medical'},
    { label: 'Non-Medical'},
  ]

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxHeight: "90%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            overflow: "auto",
            borderRadius: "8px",
            outline: "none",
            "& .MuiIconButton-root": {
              position: "absolute",
              top: "8px",
              right: "8px",
            },
          }}
        >
          <IconButton onClick={onClose} sx={{ zIndex: 1 }}>
            <CloseIcon />
          </IconButton>
          <form onSubmit={handleSubmit}>
            <div>
              <Typography variant="h5" component="h2">
                Register as a Healthcare Provider
              </Typography>
              <TextField
                label="Hospital Name"
                name="hospitalname"
                value={formData.hospitalname}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                sx={{ width: "350px", height: "60px" }}
              />
              
              <Autocomplete
                disablePortal
                options={top100Films}
                getOptionLabel={(option) => option.label}
                value={top100Films.find(option => option.label === formData.reppersontype) || null}
                onChange={(event, newValue) => {
                  setFormData((prevData) => ({
                    ...prevData,
                    reppersontype: newValue ? newValue.label : null,
                  }));
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Rep Person Type" variant="outlined" sx={{width:"350px"}} />
                )}
                clearIcon={null} 
              />

              <TextField
                label="CEA Number"
                name="ceaNumber"
                value={formData.ceaNumber}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                sx={{ width: "350px", height: "60px" }}
              />
              <TextField
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                sx={{ width: "350px", height: "60px" }}
              />
            </div>
            <div
              style={{
                borderBottom: "1px solid #ccc",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            ></div>
            <div>
              <Typography variant="h6" component="h2">
                Representing Person details
              </Typography>
              <InputLabel
                htmlFor="rep-person-type-select"
                sx={{
                  width: "50%",
                }}
              >
                Representing person type*
              </InputLabel>
              <Select
                label="Rep Person Type"
                id="rep-person-type-select"
                labelId="rep-person-type-label"
                name="reppersontype"
                value={formData.reppersontype}
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                sx={{ width: "350px", height: "60px" }}
              >
                <MenuItem value={1}>Multinationality</MenuItem>
                <MenuItem value={2}>Local</MenuItem>
                <MenuItem value={3}>Specialities</MenuItem>
              </Select>
              <TextField
                label="Representing Person Name"
                name="repname"
                value={formData.repname}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                sx={{ width: "350px", height: "60px" }}
              />
              <TextField
                label="Designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                sx={{ width: "350px", height: "60px" }}
              />
              <TextField
                label="IMR Number"
                name="imrNumber"
                value={formData.imrNumber}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                sx={{ width: "350px", height: "60px" }}
              />
              <TextField
                label="Contact Number"
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                sx={{ width: "350px", height: "60px" }}
              />
            </div>
            <div
              style={{
                borderBottom: "1px solid #ccc",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            ></div>
            <Typography variant="h6">Add New Password</Typography>
            <div>
              <TextField
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Confirm Password"
                type="password"
                margin="normal"
                variant="outlined"
              />
              <br />
              <Typography variant="p" className="pass">
                The password must contain 6-12 characters including at least one
                uppercase letter, one lowercase letter, and one symbol.
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.agreedTerms || false}
                    onChange={handleCheckboxChange}
                  />
                }
                label="I agree to Med Connect’s Terms and Conditions and Privacy Policy and Default mailer and communications settings governing the use of Med connect"
              />
            </div>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
      <Modal open={successModalOpen} onClose={handleSuccessModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
            borderRadius: "8px",
            outline: "none",
          }}
        >
          <img src={success} alt="sucess" />
          <Typography variant="h5" component="h2">
            You have Successfully registered
          </Typography>
          <Button onClick={handleSuccessModalClose} variant="contained">
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ProviderRegisterModal;
