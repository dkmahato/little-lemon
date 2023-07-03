import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import logo from '../images/Logo.svg'

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#fff"
    >
      <Box color="black" maxWidth="1280px" margin="0 auto" fontWeight="bold">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <a href="/home"><img src={logo}/></a>
          </nav>
          <nav>
            <HStack spacing={4}>
              {/* Add links to Projects and Contact me section */}
              {/* <a href="/#contact-me" onClick={Header  } id='projects-section'>Projects</a> */}
              <a href="/" onClick={Header  } >Home</a>
              <a href="/about" onClick={Header  }>About</a>
              <a href="/menu" onClick={Header  } >Menu</a>
              <a href="/reservations" onClick={Header  } >Reservations</a>
              <a href="/order" onClick={Header  } >Order Online</a>
              <a href="/login" onClick={Header  } >Login</a>
              {/* <a href="/#projects" onClick={Header  } id='contactme-section'>Contact Me</a> */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
