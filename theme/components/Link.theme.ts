import { ComponentStyleConfig } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";

const LinkTheme: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "none",
    fontWeight: 500,
    fontFamily: "roboto",
  },
  variants: {
    customLink: (props: StyleFunctionProps) => ({
      bg: "transparent",
      padding: "0",
      fontSize: "lg",
      transition: "all .4s ease-in-out",
      textDecoration: "none !important",
      borderBottom: "3px solid transparent",
      _hover: {
        borderBottom: `3px solid white`,
      },
    }),
  },
};

export default LinkTheme;
