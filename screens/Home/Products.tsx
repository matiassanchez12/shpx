import React from "react";

import { Text } from "@chakra-ui/react";

import Section from "../../components/section/Section";
import { Tabs } from "../../components/ui";
import { Products as ProductsList } from "../../mocks";

const Products = () => {
  return (
    <Section paddingY={20}>
      <Tabs initialItems={ProductsList} titleTabs={["All", "Lamp", "Chair", "Table", "Sofa"]} />
    </Section>
  );
};

export default Products;
