import { useState, useEffect, MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, HStack, Flex } from "@chakra-ui/react";
import usePrevious from "../hooks/usePrevious";
import { socials } from "../constants/content";

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

  const handleClick =
    (anchor: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
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
      backgroundColor="brand.headerBg"
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
          <nav aria-label="Social links">
            <HStack spacing={4}>
              {socials.map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav aria-label="Main navigation">
            <HStack spacing={8}>
              <a href="#projects-section" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contactme-section" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </Flex>
      </Box>
    </Box>
  );
};
export default Header;
