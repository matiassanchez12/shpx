import React from "react";

import { Select, Stack, Tab, TabList as TabListChakra, Text, useMediaQuery } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";

interface Props {
  tabs: string[];
  selectedTab: string;
  handleChangeTab: (tab: string) => void;
}

export const TabList: React.FC<Props> = (props) => {
  const { tabs, selectedTab, handleChangeTab } = props;
  const [isResponsive] = useMediaQuery("(max-width: 956px)");

  return (
    <Stack direction={{ sm: "row", md: "column" }} justify="space-between">
      <Text fontWeight={400} fontSize={{ base: "30px", md: "64px" }} align={{ base: "center", md: "start" }}>
        Products
      </Text>
      <TabListChakra justifyContent="center" alignItems="center">
        {!isResponsive ? (
          tabs.map((title) => (
            <Tab key={title} onClick={() => handleChangeTab(title.toLowerCase())}>
              <Text
                fontFamily="roboto"
                fontSize="24px"
                color={selectedTab === title.toLowerCase() ? "black" : "blackLight"}
                fontWeight={500}
              >
                {title}
              </Text>
            </Tab>
          ))
        ) : (
          <Stack>
            <Select
              onChange={(e) => handleChangeTab(e.target.value)}
              fontFamily="roboto"
              fontSize="20px"
              fontWeight={500}
              variant="unstyled"
              textAlign="center"
              icon={<MdArrowDropDown />}
            >
              {tabs.map((title, index) => (
                <option value={title.toLowerCase()} key={index} style={{ backgroundColor: "white" }}>
                  {title}
                </option>
              ))}
            </Select>
          </Stack>
        )}
      </TabListChakra>
    </Stack>
  );
};
