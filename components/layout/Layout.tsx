import React from "react";

import { Flex, VStack } from "@chakra-ui/react";

import navbarLinks from "../ui/navbar/links";
import Navbar from "../ui/navbar/Navbar";

import LayoutHead, { LayoutHeadProps } from "./LayoutHead";

interface LayoutProps {
  headProps?: LayoutHeadProps;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { headProps, children } = props;

  return (
    <>
      <VStack role="main" spacing={0}>
        {/* SEO Head */}
        <LayoutHead {...headProps} />

        {/* Navbar */}
        <Navbar titlePage="SHPX" links={navbarLinks} paddingXbase={6} paddingXmd={0} />

        {/* Main Content */}
        <Flex flexDir="column" width="full">
          {children}
          {/* Footer */}
        </Flex>
      </VStack>
    </>
  );
};
