import React from "react";
import Link from "next/link";

import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Image,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import NavbarLink, { NavbarLinkProps } from "./NavbarLink";

interface Props {
  titlePage: string;
  links: NavbarLinkProps[];
  paddingXbase: number;
  paddingXmd: number;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

const Navbar: React.FC<Props> = ({ titlePage, links, paddingXbase, paddingXmd }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="nav" height={24} top={0} width="full" zIndex={"modal"}>
      <Container height="full" maxW="container.xl" paddingX={{ base: paddingXbase, md: paddingXmd }}>
        <Flex alignItems="center" height="full" justifyContent="space-between">
          <Link href="/">
            <Text as="span" cursor="pointer" color="black" fontSize="36px" fontWeight={400}>
              {titlePage}
            </Text>
          </Link>
          <Stack direction="row" display={{ base: "none", lg: "flex" }} spacing={12}>
            {links.map((link, index) => {
              return <NavbarLink key={index} href={link.href} label={link.label} />;
            })}
          </Stack>
          <Stack direction="row" display={{ base: "none", lg: "flex" }} gap={4}>
            <Icon as={IoSearchOutline} h={8} w={8} cursor="pointer" />
            <Icon as={AiOutlineShoppingCart} h={8} w={8} cursor="pointer" />
          </Stack>
          <Image
            _hover={{ cursor: "pointer" }}
            src={`${origin}/assets/navbtn.png`}
            alt="image"
            display={{ base: "flex", lg: "none" }}
            h={6}
            onClick={onOpen}
          />
        </Flex>
        <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
          <DrawerOverlay p={0} />
          <DrawerContent bg="text.200">
            <DrawerBody>
              <VStack mb={10} mt={4}>
                <Icon
                  _hover={{ cursor: "pointer" }}
                  as={FaWindowClose}
                  href={`${origin}/assets/navbtn.png`}
                  h={6}
                  position="absolute"
                  right={4}
                  w={6}
                  onClick={onClose}
                />
                <Stack align="center" pt={10} spacing={10}>
                  {links.map((link, index) => (
                    <NavbarLink key={index} href={link.href} label={link.label} />
                  ))}
                </Stack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </Box>
  );
};

export default Navbar;
