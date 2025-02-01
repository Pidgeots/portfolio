import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="#F0FFF0"
      minHeight="350px"
      display="flex"
      flexDirection="column"
      transition="0.3s ease-in-out"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Image src={imageSrc} alt={title} width="100%" />

      <VStack align="start" spacing={3} p={5} flex="1">
        <Heading as="h3" size="md" color="black">
          {title}
        </Heading>

        <Text fontSize="md" color="gray.600">
          {description}
        </Text>
        <Spacer />
        <HStack spacing={2} align="center" cursor="pointer">
          <Link
            href={link}
            isExternal
            fontWeight="bold"
            color="gray.600"
            fontSize="sm"
            _hover={{ color: "blue.400" }}
          >
            See project{" "}
            <FontAwesomeIcon icon={faArrowRight} size="1x" color="gray" />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
