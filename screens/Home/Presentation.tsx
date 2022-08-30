import React from "react";
import Image from "next/image";

import { Box, Stack, Text, useMediaQuery } from "@chakra-ui/react";

import Section from "../../components/section/Section";

const origin = typeof window === "undefined" ? "" : window.location.origin;

const Presentation = () => {
  const [isMobile] = useMediaQuery("(min-width: 1280px)");

  return (
    <Section paddingY={10} paddingXmd={0}>
      <Stack
        position="absolute"
        bottom={{ base: 28, md: 0 }}
        left={{ base: 6, md: "initial" }}
        background="rgba(255, 255, 255, 0.78)"
        backdropFilter="blur(5px)"
        justifyContent="center"
        zIndex={999}
        gap={2}
        h={{ base: 215, md: "initial" }}
      >
        <Text
          fontSize={{ base: 30, md: 64 }}
          lineHeight={{ base: "30px", md: "66px" }}
          color="#4B4B4B"
          w={{ base: 230, md: 460 }}
        >
          Modern Interior for your <br />
          Dream House
        </Text>
        <Text
          fontSize={{ base: "11.5px", md: 24 }}
          fontFamily="roboto"
          fontWeight={400}
          color="#737373"
          w={{ base: 180, md: 350 }}
        >
          We custom make design to suits your needs.
        </Text>
      </Stack>
      <Stack position="relative" left={{ base: "15%", md: "initial" }} alignItems="end" zIndex={1}>
        <Box w={{ base: 537, md: 900 }} h={{ base: 365, md: 650 }}>
          <Image
            src={`${origin}/assets/image.png`}
            alt="img"
            width={900}
            height={600}
            style={{
              width: isMobile ? "537" : "900",
              height: isMobile ? "365" : "600",
            }}
          />
        </Box>
      </Stack>
    </Section>
  );
};

export default Presentation;