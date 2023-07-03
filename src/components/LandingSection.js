import React from "react";
import { Avatar, Button, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import styled from "@emotion/styled";
import restauranfood from '../images/restauranfood.jpg'
import { NavLink } from "react-router-dom";

const heading = "Little Lemon";
const subHeading = "Chicago";
const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    minHeight="366px"
    isDarkBackground="false"
    backgroundColor="#486048">
    <div style={{width:"75vw",fontFamily:"initial",display:"flex",marginBottom:"20px"}}>
      <div>
      <Heading><div style={{color:"#F4CE14",fontFamily:"initial"}}>{heading}</div></Heading>
      <h1 style={{lineHeight:"2",fontSizeL:"20px"}}>{subHeading}</h1>
      <div style={{width:"35%",lineHeight:"1.5",paddingBottom:"15px"}}><p>{content}</p></div>
      <NavLink to="/reservations">
        <Button colorScheme="yellow" style={{fontFamily:"sans-serif"}}>
                Reserve a table
              </Button>
        </NavLink>
      </div>
      <div>
        <img src={restauranfood} style={{width:"15rem",height:"18rem",position:"absolute",borderRadius:"15px",right:"11rem"}}/>
      </div>
    </div>
  </FullScreenSection>
);

export default LandingSection;
