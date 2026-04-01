import { Component, ErrorInfo, ReactNode } from "react";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          minH="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="brand.bg"
          color="white"
        >
          <VStack spacing={4}>
            <Heading size="lg">Something went wrong</Heading>
            <Text>Please try refreshing the page.</Text>
            <Button
              onClick={() => window.location.reload()}
              bg="brand.card"
              color="brand.bg"
            >
              Refresh
            </Button>
          </VStack>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
