import React from "react";

import { Box, Button, Stack, Text, useMediaQuery } from "@chakra-ui/react";

import Section from "../../components/section/Section";

const GetQuotation = () => {
  const [isMobile] = useMediaQuery("(min-width: 1280px)");

  return (
    <Section paddingY={24}>
      <Stack gap={6} p={{ base: 10, md: 16 }} h={347} bg="#FAF4EF" borderTopRightRadius="100px" justify="center">
        <Text fontSize={{ base: "30px", md: "64px" }} color="black">
          Get your <br style={{ display: !isMobile ? "block" : "none" }} /> quotation today
        </Text>
        <Stack direction={{ base: "column", md: "row" }} gap={{ base: 2, md: 10 }}>
          <Button
            variant="unstyled"
            borderRadius="none"
            fontFamily="roboto"
            fontSize="24px"
            fontWeight="500"
            bg="black"
            color="text.200"
            p={2}
            w={214}
            h={54}
          >
            Quote me
          </Button>
          <Button
            variant="unstyled"
            borderRadius="none"
            fontFamily="roboto"
            fontSize="24px"
            fontWeight="500"
            bg="text.200"
            color="black"
            p={2}
            w={214}
            h={54}
          >
            Contact Sales
          </Button>
        </Stack>
      </Stack>
    </Section>
  );
};

export default GetQuotation;
