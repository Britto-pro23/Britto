import React, { useState } from "react";
import "./Header.css";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import banner from "../assets/headbanner.png";
import { Container } from "@mui/material";
import ProfessionalRegisterModal from "./ProfessionalRegisterModal";
// import image from "../assets/images/image.png";
const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
  };
  const userimages = [
    {
      id: 1,
      image: "image",
    },
  ];

  return (
    <div>
      <Container fixed>
        <div className="head">
          <div className="head-main">
            <h2>
              Enhancement of Your value system with <br /> professional growth
              in a conducive <br /> healthcare environment
            </h2>
            <Typography className="typo-content" variant="subtitle2">
              Are you a dedicated health professional with a passion to explore
              the world while <br /> practicing your expertise? Look no further!
              Med Connect is your gateway for <br /> worldwide opportunities
              that match your skills and aspirations.
            </Typography>
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{ width: "249px", backgroundColor: "#00B5B1" }}
              endIcon={<ArrowForwardIcon />}
            >
              Register with us
            </Button>
            <div>
              {userimages.map((image, index) => {
                <div key={index}>
                  <img src={image} alt="userimg" />
                </div>;
              })}
              <p>
                Already, over 12,000 medical professionals trust MedConnect to
                fuel their career journey. You're in good company!
              </p>
            </div>
          </div>
          <div className="banner">
            <img className="banner-img" src={banner} alt="banner" />
          </div>
        </div>
      </Container>

      
      <ProfessionalRegisterModal open={openModal} onClose={()=>{
        setOpenModal(false) 
      }}/>

      <div className="head-final">
        <Container fixed>
          <div className="head-final-1">
            <div>
              <h4>
                We understands your unique skills, specialties, and career
                aspirations.
              </h4>
            </div>
            <div>
              <div>
                Unlock your true potential by exploring a wide range of
                positions in prestigious hospitals, cutting-edge research
                facilities, private practices, and more. Your dream career is
                just a click away!
              </div>
              <div>
                <h5>
                  12k+ <span>Onboarded</span>
                </h5>
                <h5>
                  200+ <span>Hospitals</span>
                </h5>
                <h5>
                  400+ <span>Vacancies</span>
                </h5>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Box className="head-last" sx={{mt:5,mb:5}}>
        <div>
          <h6>Find 2000+ jobs from best hospitals</h6>
        </div>
        <div className="head-last-img">
          <img
            src="https://assets-global.website-files.com/61c2ffeef77762ff2480618d/61c99cc7b023a8563f0547e5_kauvery.jpeg"
            alt="kauvery"
          />
          <img
            src="https://content.jdmagicbox.com/comp/narasaraopet/c1/9999p8647.8647.210716132521.w2c1/catalogue/sims-hospital-prakash-nagar-narasaraopet-hospitals-yh4a55mkwx.jpg"
            alt="kauvery"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56xzlakMPBPQDa2XJRLBX7uYh6QmScKD4UipylhCwVg&s"
            alt="kauvery"
          />
          <img
            src="https://yt3.googleusercontent.com/Uv7bCYsW9IO2ops6VSA12vnIkDPq_dJpg7neKT1zYzYchFsG9MW1tUD0BZ5r09GN2KbHfc7u=s900-c-k-c0x00ffffff-no-rj"
            alt="kauvery"
          />
          <img
            src="https://i.pinimg.com/originals/2b/26/f5/2b26f567d7efe70c180006de6cbb1e6b.png"
            alt="kauvery"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/c/c5/Apollo_Hospitals_Logo.svg"
            alt="kauvery"
          />
        </div>
      </Box>
    </div>
  );
};

export default Header;
