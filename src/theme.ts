import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      bg: "#263238",
      accent: "#A5D6A7",
      card: "#F0FFF0",
      headerBg: "#18181b",
    },
    alert: {
      success: "#81C784",
      error: "#FF8A65",
    },
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "brand.headerBg",
      },
    },
  },
  transitions: {
    duration: {
      default: "0.3s",
    },
  },
});

export default theme;
