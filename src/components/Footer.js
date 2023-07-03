import React from "react";
import {Box, Flex, Image} from "@chakra-ui/react";
import Card from "./Card";

const Footer = () => {
  const projects = [
    {
      title: "Greek salad",
      price:"$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      getImageSrc: () => require("../images/photo1.jpg"),
    },
    {
      title: "Bruchetta",
      price:"$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      getImageSrc: () => require("../images/photo2.jpg"),
    },
    {
      title: "Lemon Dessert",
      price:"$5.00",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      getImageSrc: () => require("../images/photo3.jpg"),
    },
  ];
  return (
    <Box backgroundColor="#18181b">
      <footer>
      <Box
        display="grid"
        gridTemplateColumns="repeat(4,minmax(0,1fr))"
        gridGap={8} className="footerBody"
      >
    
          <div className="footerContent">
          <Image src={require("../images/Mario_Adrian.jpg")} className="card-image"/>
          
          </div>
          <div className="footerContent">
            <h1>Doormat Navigation</h1>
            <p>Home</p>
            <p>About</p>
            <p>menu</p>
            <p>Reservations</p>
            <p>Order Online</p>
            <p>Login</p>
            </div>
          <div className="footerContent">
            <h1>Contact</h1>
            <p>Adress</p>
            <p>Phone number</p>
            <p>Email</p>
          </div>
          <div className="footerContent">
            <h1>Social Media Links</h1>
            <p>Adress</p>
            <p>Phone number</p>
            <p>Email</p>
          </div>
          <div style={{color:"#fff"}}><p>fjfjh</p></div>
        

      </Box>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Dipak • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
