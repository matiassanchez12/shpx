import { type ThemeConfig, extendTheme } from "@chakra-ui/react";

import { LinkTheme, TextTheme } from "./components";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        minHeight: "100vh",
        margin: 0,
        backgroundColor: "text.200",
        color: "black",
        overflowX: "hidden",
      },
    },
  },
  fonts: {
    body: "DM Serif Display, serif",
    roboto: "Roboto, sans-serif",
  },
  colors: {
    text: {
      200: "#FFFFFF",
      300: "#737373",
      400: "#4B4B4B",
    },
    background: "#E5E5E5",
    black: "#4B4B4B",
    grey: "#737373",
    blackLight: "rgba(75, 75, 75, 0.5)",
  },
  components: {
    Link: LinkTheme,
    Text: TextTheme,
  },
});

const exportedObject = { config, theme };

export default exportedObject;
