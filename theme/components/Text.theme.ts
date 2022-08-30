import { ComponentStyleConfig } from "@chakra-ui/react";

const TextTheme: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 400,
  },
  variants: {
    mainTitle: {
      as: "span",
      cursor: "pointer",
      color: "primary.500",
      fontSize: "3xl",
      fontWeight: 400,
      fontFamily: "body",
    },
  },
};

export default TextTheme;
