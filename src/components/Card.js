import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title,price, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div className="cardDesign">
    <Image src={imageSrc} className="card-image"/>
      <div className="cardText">
        <div className="cardTitle">
          <Text>{ title}</Text><Text className="cardPrice">{price}</Text>
          
        </div>
        <Text className="cardDescription">{description }</Text>
      <Text className="cardBook">Order a delivery &nbsp; <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </div> 
    </div>);
};

export default Card;
