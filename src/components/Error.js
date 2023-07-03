import React from "react";


import { NavLink } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const Error = () => {
  return (
    <FullScreenSection
    minHeight="366px"
    isDarkBackground="false"
    backgroundColor="#486048">
        <h1>This Page Doesn't Exists</h1>
        <NavLink to="/">
          <Button className="btn_go_back"> Go Back</Button>
        </NavLink>
    </FullScreenSection>
  );
};


export default Error;
