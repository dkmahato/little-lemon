import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

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

const ProjectsSection = () => {
  return (
    <FullScreenSection
    minHeight="70vh"
      backgroundColor="#fff"
      isDarkBackground="true"
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h3" id="projects-section">
        This week specials!
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            price={project.price}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
