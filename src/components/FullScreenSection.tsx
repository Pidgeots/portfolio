import { ReactNode } from "react";
import { VStack, StackProps } from "@chakra-ui/react";

interface FullScreenSectionProps extends StackProps {
  children: ReactNode;
  isDarkBackground?: boolean;
}

const FullScreenSection = ({
  children,
  isDarkBackground,
  ...boxProps
}: FullScreenSectionProps) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" w="100%" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
