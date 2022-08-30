import React from "react";

import { Grid, Stack, useMediaQuery } from "@chakra-ui/react";
import { Carousel, Provider } from "chakra-ui-carousel";
import { AnimatePresence, motion } from "framer-motion";

import { Product } from "../../../types";

import Item from "./Item";

interface Props {
  filteredItems: Product[];
  initialItems: Product[];
  setFilteredItems: (products: Product[]) => void;
  selectedItem: string;
}

export const TabBody: React.FC<Props> = (props) => {
  const { filteredItems, selectedItem, initialItems, setFilteredItems } = props;
  const [isResponsive] = useMediaQuery("(max-width: 956px)");

  React.useEffect(() => {
    if (selectedItem === "all") {
      return setFilteredItems(initialItems);
    }

    setFilteredItems(initialItems.filter((product) => product.type === selectedItem));
  }, [selectedItem]);
  // gracias ariel por el contacto, pero
  return (
    <>
      {!isResponsive ? (
        <Grid
          as={motion.div}
          layout
          templateColumns="repeat(auto-fit, 366px)"
          gap={12}
          rowGap={24}
          marginTop={12}
          justifyContent={{ base: "center", md: "start" }}
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              return <Item key={index} product={item} />;
            })}
          </AnimatePresence>
        </Grid>
      ) : (
        <Stack marginTop={12} justify="center" align="center">
          <AnimatePresence>
            <Provider>
              <Carousel gap={0}>
                {filteredItems.map((item, index) => {
                  return <Item key={index} product={item} />;
                })}
              </Carousel>
            </Provider>
          </AnimatePresence>
        </Stack>
      )}
    </>
  );
};
