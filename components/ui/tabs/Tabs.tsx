import React from "react";

import { Tabs as TabsChakra } from "@chakra-ui/react";

import { Product } from "../../../types";

import { TabBody, TabList } from "./index";

interface Props {
  initialItems: Product[];
  titleTabs: string[];
}

export const Tabs: React.FC<Props> = (props) => {
  const { initialItems, titleTabs } = props;
  const [filteredItems, setFilteredItems] = React.useState<Product[]>([]);
  const [selectedItem, setSelectedItem] = React.useState("all");

  const handleChangeTab = (tab: string) => setSelectedItem(tab);

  return (
    <TabsChakra variant="unstyled">
      <TabList tabs={titleTabs} selectedTab={selectedItem} handleChangeTab={handleChangeTab} />

      <TabBody
        initialItems={initialItems}
        filteredItems={filteredItems}
        setFilteredItems={setFilteredItems}
        selectedItem={selectedItem}
      />
    </TabsChakra>
  );
};
