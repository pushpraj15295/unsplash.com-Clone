import {
  Box,
  Button,
  Flex,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Popover,
  PopoverTrigger,
  Spacer,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import "../App.css";

import React, { useRef, useState } from "react";
import unIcon from "../icons/icon1.png";
import bell from "../icons/bell.png";
import hemb from "../icons/hemb.png";
import search from "../icons/search.png";
import imgsearch from "../icons/imgs.png";

import Notification from "../PopOver/Notification.jsx";
import Profile from "../PopOver/Profile.jsx";
import SubmitPhoto from "../PopOver/SubmitPhoto.jsx";
import ExtraLink from "../PopOver/ExtraLink";
import Recomandation from "../PopOver/Recomandation";
import Menubar from "./Menubar";

//////////////////////////////////////////////////////////////////////////////////
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const btnRef = useRef(null);

  return (
    <Box width="100%" position="fixed" zIndex="20" bgColor="rgb(255,255,255)">
      <Box height="60px" width="99%">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginTop="10px"
        >
          <Box width="33px" marginLeft="25px" cursor="pointer">
            {" "}
            <Img src={unIcon} />
          </Box>
          {/* <Spacer/> */}
          <InputGroup width="950px">
            <InputLeftElement
              //   pointerEvents='none'
              color="rgb(238,238,238)"
              className="border-ba"
              fontSize="1.2em"
              children={
                <Img
                  cursor="pointer"
                  width="18px"
                  color="lightgray"
                  src={search}
                />
              }
            />

            <Popover>
              <PopoverTrigger className="border-ba">
                <Input
                  placeholder="     Search free high resolution-photos"
                  borderRadius="40px"
                  bgColor="rgb(238,238,238)"
                />
              </PopoverTrigger>

              <Recomandation />
            </Popover>

            <InputRightElement
              color="rgb(238,238,238)"
              fontSize="1.8em"
              className="border-ba"
              children={
                <Img
                  cursor="pointer"
                  width="18px"
                  color="lightgray"
                  src={imgsearch}
                />
              }
            />
          </InputGroup>

          <Box cursor="pointer">
            {" "}
            <Text className="border-ba" fontSize="md" color="rgb(128,123,158)">
              Advertise
            </Text>
          </Box>
          <Box cursor="pointer">
            {" "}
            <Text className="border-ba" fontSize="md" color="rgb(128,123,158)">
              Blog
            </Text>
          </Box>

          <Box>
            {" "}
            <Button
              className="border-ba"
              cursor="pointer"
              color="rgb(128,123,158)"
              variant="outline"
              ref={btnRef}
              onClick={onOpen}
            >
              Submit a photo
            </Button>
            <SubmitPhoto
              isOpen={isOpen}
              onClose={onClose}
              onOpen={onOpen}
              btnRef={btnRef}
              scrollBehavior={scrollBehavior}
            />
          </Box>

          <Box width="20px" cursor="pointer">
            <Popover placement="bottom-end">
              <PopoverTrigger className="border-ba">
                <Img src={bell} />
              </PopoverTrigger>
              <Notification />
            </Popover>
          </Box>
          <Box
            cursor="pointer"
            bgColor="lightgrey"
            color="grey"
            border="1px solid lightgrey"
            width="32px"
            height="32px"
            borderRadius="50px"
          >
            <Popover placement="bottom-end">
              <PopoverTrigger>
                <i class="fa-solid fa-user"></i>
              </PopoverTrigger>
              <Profile />
            </Popover>
          </Box>
          <Box cursor="pointer" width="25px">
            <Popover placement="bottom-end">
              <PopoverTrigger className="border-ba">
                <Img color="rgb(238,238,238)" src={hemb} />
              </PopoverTrigger>

              <ExtraLink />
            </Popover>
          </Box>
        </Flex>
      </Box>
      <Menubar />
    </Box>
  );
};

export default Navbar;
