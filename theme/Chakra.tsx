import React from "react";
import { GetServerSideProps } from "next";

import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme";

interface Props {
  children: React.ReactNode;
}

export const Chakra: React.FC<Props> = ({ children }) => {
  return <ChakraProvider theme={theme.theme}>{children}</ChakraProvider>;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
};
