import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Flex } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: marat.rahin@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Pidgeots",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/marat-lakhin/",
  },
  {
    icon: faTelegram,
    url: "https://t.me/pidgeots",
  },
];

function usePrevious(val) {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
}

const Header = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [hidden, setHidden] = useState(false);
  const prevScrollY = usePrevious(scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (prevScrollY !== undefined) {
        setHidden(currentScrollY > prevScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, prevScrollY]);

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
      zIndex={100}
      transform={hidden ? "translateY(-200px)" : "translateY(0)"}
      transition="transform 0.3s ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <Flex
          px={[4, 8, 16]}
          py={[2, 4]}
          justifyContent="space-between"
          alignItems="center"
          flexDir={["column-reverse", "row"]}
          gap={[4, 0]}
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick("projects")}>Projects</a>
              <a onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </Flex>
      </Box>
    </Box>
  );
};
export default Header;
