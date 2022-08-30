import React from "react";

import { Box, Image, Stack, Text, useMediaQuery } from "@chakra-ui/react";

import Section from "../../components/section/Section";

const origin = typeof window === "undefined" ? "" : window.location.origin;

const Presentation = () => {
  const [isMobile] = useMediaQuery("(min-width: 1280px)");

  return (
    <Section paddingY={10} paddingXmd={0}>
      <Stack
        position="absolute"
        bottom={{ base: 28, md: 8 }}
        left={{ base: 16, md: 28 }}
        background="rgba(255, 255, 255, 0.78)"
        backdropFilter="blur(5px)"
        justifyContent="center"
        zIndex={999}
        gap={2}
        p={{ base: 2, md: 6 }}
        h={{ base: 215, md: 450 }}
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
      <Stack position="relative" left={{ base: "150px", md: "initial" }} alignItems="end" zIndex={1}>
        <Box w={{ base: 537, md: 900 }} h={{ base: 365, md: 650 }}>
          <Image
            src={`${origin}/assets/${!isMobile ? "presentationres" : "image"}.png`}
            alt="img"
            width={"full"}
            height={"full"}
            objectFit="contain"
          />
        </Box>
      </Stack>
      <Box
        w={400}
        position="absolute"
        display={{ base: "none", md: "block" }}
        right={0}
        top={36}
        bg="#FAF4EF"
        h={207}
      ></Box>
    </Section>
  );
};

export default Presentation;
