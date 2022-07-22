import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";

const Notification = () => {
  return (
    <PopoverContent backgroundColor="rgb(246,245,244)">
      <PopoverArrow />
      <PopoverCloseButton />

      <Tabs>
        <TabList>
          <Tab width="50%">Highlight</Tab>
          <Tab width="50%">Activity</Tab>
        </TabList>

        <TabPanels>
          <TabPanel padding="45px">
            <p>
              Important news, product updates, and milestones associated with
              your account will appear here.
            </p>
          </TabPanel>
          <TabPanel padding="45px">
            <p>Activity associated with your account will appear here.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </PopoverContent>
  );
};

export default Notification;
