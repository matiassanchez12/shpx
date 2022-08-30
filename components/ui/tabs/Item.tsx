import React from "react";

import { GridItem, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { Product } from "../../../types";

interface Props {
  product: Product;
}

const Item: React.FC<Props> = ({ product }) => {
  return (
    <Stack minH={500} width={{ base: "full", md: 366 }} align="center">
      <GridItem
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        as={motion.div}
        layout
        bg="#FAF4EF"
        borderBottomLeftRadius="50px"
        position="relative"
        height={{ base: 363, md: 420 }}
        width={{ base: 306, md: 366 }}
      >
        <Stack position="relative" height={420} width={366}>
          <Stack flex={1} paddingInline={10} lineHeight={1} position="relative" bottom={-38}>
            <Text color="text.400" fontSize={{ base: "26px", md: "36px" }}>
              {product.name}
            </Text>
            <Text color="text.300" fontSize={{ base: "20px", md: "24px" }}>
              {product.price}
            </Text>
          </Stack>
          <Stack
            flex={1}
            align={{ base: "baseline", md: "center" }}
            h="full"
            w="full"
            onDragStart={(e) => {
              e.preventDefault();
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              loading="lazy"
              position="relative"
              left={6}
              bottom={product.bottom}
            />
          </Stack>
        </Stack>
      </GridItem>
    </Stack>
  );
};

export default Item;
