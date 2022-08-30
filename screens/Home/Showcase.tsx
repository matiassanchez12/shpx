import React from "react";

import { Box, Button, Image, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import Section from "../../components/section/Section";

const origin = typeof window === "undefined" ? "" : window.location.origin;

const Showcase = () => {
  const [isMobile] = useMediaQuery("(min-width: 1280px)");

  return (
    <Section paddingY={6} paddingXbase={6}>
      <Box
        bg="#FAF4EF"
        w={{ base: "full", md: 500 }}
        h={{ base: 86, md: 207 }}
        position="absolute"
        right={{ base: 6, md: 0 }}
        left={{ base: 0, md: 0 }}
        top={20}
      />
      <Stack gap={16} direction={{ base: "column", md: "row" }}>
        <Stack flex={2} align={{ base: "end", md: "start" }}>
          <Image
            src={`${origin}/assets/${!isMobile ? "showcasesmobile" : "showcases"}.png`}
            alt="img"
            width={!isMobile ? "356px" : "735px"}
            height={!isMobile ? "377px" : "764px"}
            position="relative"
            left={6}
          />
        </Stack>
        <Stack flex={1} position="relative" left={{ base: 0, md: 6 }}>
          <Stack gap={{ base: 6, md: 12 }} justify="center" h="full">
            <Text fontSize={{ base: "30px", md: "64px" }} fontWeight="400" color="text.400">
              Showcase
            </Text>
            <Text
              fontSize={{ base: "20px", md: "24px" }}
              fontWeight="400"
              color="text.300"
              textAlign="start"
              maxW={{ base: 300, md: "full" }}
              fontFamily="roboto"
            >
              Lorem ipsum dolor sit amet,
              <br style={{ display: !isMobile ? "none" : "block" }} /> consectetur adipiscing elit. A,{" "}
              <br style={{ display: !isMobile ? "none" : "block" }} /> eleifend viverra nam libero tellus. <br />
              Luctus ornare ac, dolor tempor <br style={{ display: !isMobile ? "none" : "block" }} /> pellentesque nec.
            </Text>
            <Stack direction="row" gap={2}>
              <Button
                variant="unstyled"
                bg="rgba(250, 244, 239, 0.5)"
                w={{ base: 50, md: 70 }}
                h={{ base: 50, md: 70 }}
                display="flex"
                alignItems="center"
                borderRadius="none"
              >
                <AiOutlineArrowLeft fontSize={22} />
              </Button>
              <Button
                variant="unstyled"
                bg="#FAF4EF"
                w={{ base: 50, md: 70 }}
                h={{ base: 50, md: 70 }}
                display="flex"
                alignItems="center"
                borderRadius="none"
              >
                <AiOutlineArrowRight fontSize={22} />
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Section>
  );
};

export default Showcase;
