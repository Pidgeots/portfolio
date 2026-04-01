import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="brand.headerBg">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Marat &bull; &copy; {new Date().getFullYear()}</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
