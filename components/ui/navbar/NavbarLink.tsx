import React from "react";
import Link from "next/link";

import { Text } from "@chakra-ui/react";

export interface NavbarLinkProps {
  href: string;
  label: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = (props) => {
  const { href, label } = props;

  return (
    <Link href={href}>
      <Text as="span" cursor="pointer" color="black" fontSize="24px" fontFamily="roboto" fontWeight={500}>
        {label}
      </Text>
    </Link>
  );
};

export default NavbarLink;
