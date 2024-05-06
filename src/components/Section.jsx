import { Typography } from "@mui/material";
import React, { useState } from "react";
import "./Section.css";
import advantages from "../assets/images/advantages.png";
import downloadplay from "../assets/images/downloadgoogleplay.svg";
import downloadapp from "../assets/images/downloadappstore.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Section = () => {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <div className="section-head">
        <Typography variant="h5">
          Empowering Health Professionals: Global Opportunities, <br />{" "}
          World-Class Salaries, and Career Growth
        </Typography>
        <div>
          <Typography variant="h6">World-Class Salary Awaits You</Typography>
          <Typography variant="p">
            Elevate your career and financial prospects with our curated
            listings of healthcare positions that offer a world-class salary. We
            understand that your commitment to patient care deserves
            recognition, and we partner with esteemed institutions that value
            your skills and expertise. Your dedication should be rewarded, and
            we're here to ensure you receive the compensation you deserve.
          </Typography>
          <Typography variant="h6">World-Class Salary Awaits You</Typography>
          <Typography variant="p">
            Elevate your career and financial prospects with our curated
            listings of healthcare positions that offer a world-class salary. We
            understand that your commitment to patient care deserves
            recognition, and we partner with esteemed institutions that value
            your skills and expertise. Your dedication should be rewarded, and
            we're here to ensure you receive the compensation you deserve.
          </Typography>
          <Typography variant="h6">World-Class Salary Awaits You</Typography>
          <Typography variant="p">
            Elevate your career and financial prospects with our curated
            listings of healthcare positions that offer a world-class salary. We
            understand that your commitment to patient care deserves
            recognition, and we partner with esteemed institutions that value
            your skills and expertise. Your dedication should be rewarded, and
            we're here to ensure you receive the compensation you deserve.
          </Typography>
          <Typography variant="h6">World-Class Salary Awaits You</Typography>
          <Typography variant="p">
            Elevate your career and financial prospects with our curated
            listings of healthcare positions that offer a world-class salary. We
            understand that your commitment to patient care deserves
            recognition, and we partner with esteemed institutions that value
            your skills and expertise. Your dedication should be rewarded, and
            we're here to ensure you receive the compensation you deserve.
          </Typography>
          <Typography variant="h6">World-Class Salary Awaits You</Typography>
          <Typography variant="p">
            Elevate your career and financial prospects with our curated
            listings of healthcare positions that offer a world-class salary. We
            understand that your commitment to patient care deserves
            recognition, and we partner with esteemed institutions that value
            your skills and expertise. Your dedication should be rewarded, and
            we're here to ensure you receive the compensation you deserve.
          </Typography>
          <Typography variant="h6">World-Class Salary Awaits You</Typography>
          <Typography variant="p">
            Elevate your career and financial prospects with our curated
            listings of healthcare positions that offer a world-class salary. We
            understand that your commitment to patient care deserves
            recognition, and we partner with esteemed institutions that value
            your skills and expertise. Your dedication should be rewarded, and
            we're here to ensure you receive the compensation you deserve.
          </Typography>
        </div>
      </div>
      <div>
        <div className="job-specification">
          <Typography variant="h5">
            Discover jobs across all specializations
          </Typography>
        </div>
        <div className="video-profile">
          <img
            src="https://www.vidyard.com/media/video-on-websites-1920x1080-1-1024x576.jpg"
            alt="video"
            className="video-image"
          />
          <Typography variant="h4">
            Increase your hiring prospects by adding a video profile
          </Typography>
          <Typography variant="p" sx={{ color: "rgba(0, 0, 0, 0.86)" }}>
            Record or upload your video resume to get hired faster,by using a
            video resume you will get the recruiter attention easily
          </Typography>
        </div>
      </div>
      <div>
        <Typography variant="h6">
          Join over 2000+ Beneficiaries using Med Connect
        </Typography>
        <Typography variant="p">
          Our mission is to create Worldwide opportunities for health
          professionals. We love building beautiful and useful Community in the
          Medical sector. Here’s what some of them have to say about their
          experience with us
        </Typography>
      </div>
      <div>
        <img src={advantages} alt="advantages" className="advantages" />
      </div>
      <div>
        <Typography variant="h5">Frequently Asked Questions</Typography>
        <div>
          <Accordion expanded={expanded} onChange={handleExpand}>
            <AccordionSummary
              expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded} onChange={handleExpand}>
            <AccordionSummary
              expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded} onChange={handleExpand}>
            <AccordionSummary
              expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="download">
        <Typography variant="h5">Download MedConnect for free</Typography>
        <Typography variant="subtitle2">
          Downloads available in App store and Play store
        </Typography>
        <img src={downloadapp} alt="appstore" className="download-logo" />
        <img src={downloadplay} alt="playstore" className="download-logo" />
      </div>
    </div>
  );
};

export default Section;
