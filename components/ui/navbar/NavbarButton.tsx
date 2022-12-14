import React from "react";

// import Link from "next/link";
import { Button, Link, Text } from "@chakra-ui/react";
import { BiDownload } from "react-icons/bi";

export interface NavbarButtonProps {
  href: string;
  label: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = (props) => {
  const { href, label } = props;

  return (
    <Link href={href} target="_blank" _hover={{}} _focusVisible={{}}>
      <Button
        leftIcon={<BiDownload size={18} />}
        iconSpacing={4}
        h={8}
        bg="#214B6B"
        fontSize="sm"
        borderRadius="full"
        _hover={{ bg: "#245072" }}
        paddingInline={6}
      >
        <Text as="span" cursor="pointer" fontWeight={600}>
          {label}
        </Text>
      </Button>
    </Link>
  );
};

export default NavbarButton;
