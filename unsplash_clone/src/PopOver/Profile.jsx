import {
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  Button,
} from "@chakra-ui/react";
import React from "react";

const Profile = () => {
  return (
    <PopoverContent width="200px" backgroundColor="rgb(246,245,244)">
      <PopoverArrow />
      {/* <PopoverCloseButton /> */}

      <PopoverHeader border="none">
        <Button
          mb="3px"
          width="100%"
          cursor="pointer"
          color="rgb(128,123,158)"
          variant="outline"
          border="none"
        >
          View profile
        </Button>{" "}
        <br />
        <Button
          mb="3px"
          width="100%"
          cursor="pointer"
          color="rgb(128,123,158)"
          variant="outline"
          border="none"
        >
          Stats
        </Button>{" "}
        <br />
        <Button
          mb="3px"
          width="100%"
          cursor="pointer"
          color="rgb(128,123,158)"
          variant="outline"
          border="none"
        >
          Account setting
        </Button>{" "}
        <br />
      </PopoverHeader>
      <PopoverBody>
        <Button
          width="100%"
          cursor="pointer"
          color="rgb(128,123,158)"
          variant="outline"
          border="none"
        >
          Logout@xyz.com
        </Button>
      </PopoverBody>
    </PopoverContent>
  );
};

export default Profile;
