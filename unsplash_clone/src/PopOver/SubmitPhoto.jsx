import {
  Box,
  Button,
  Checkbox,
  Flex,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { useState, useRef } from "react";
function SubmitPhoto({ btnRef, onOpen, onClose, isOpen, scrollBehavior }) {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const [scrollBehavior, setScrollBehavior] = React.useState('inside')

  // const btnRef = React.useRef(null)
  const [t, setT] = useState(false);
  const ref = useRef(null);

  const handleChange = (event) => {
    setT(event.target.checked);
  };

  console.log(t);
  return (
    <>
      {/* <Button mt={3} ref={btnRef} onClick={onOpen}>
          Trigger modal
        </Button> */}

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
        //   size="xl"
        size="80%"
      >
        <ModalOverlay />
        <ModalCloseButton />
        <ModalContent>
          <ModalBody>
            <Box width="80%" margin="auto" backgroundColor="rgb(246,245,244)">
              <Flex gap="1rem" mt="35px">
                <Box width="56%">
                  <Text fontSize="45px" fontWeight="bold">
                    Hi 👋
                  </Text>

                  <p>
                    Thanks for contributing to Unsplash! You’re awesome. To save
                    you time and increase your chance of being featured, please
                    ensure that your photos meet our{" "}
                    <u>submission guidelines</u>.
                  </p>

                  <br />
                  <br />
                  <Text fontSize="13px">
                    Note: Every photo on Unsplash is published under the{" "}
                    <u> Unsplash License </u> – which allows people to use
                    photos{" "}
                    <strong>
                      {" "}
                      from Unsplash for free, including for commercial purposes,
                      without attributing the photographer on Unsplash.
                    </strong>{" "}
                    <u>Learn more.</u>{" "}
                  </Text>
                </Box>
                <Box width="44%">
                  <Img
                    width="500px"
                    src="https://unsplash-assets.imgix.net/uploader/photo-stack@2x.png?auto=format&fit=crop&q=60"
                  />
                </Box>
              </Flex>
              <br />
              <br />

              <SimpleGrid columns={3} gap="3rem" mb="30px">
                <Flex gap="1.5rem">
                  <Box>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40px"
                      height="40px"
                      color="grey"
                      fill="currentColor"
                      class="bi bi-card-image"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                    </svg>
                  </Box>
                  <Text fontSize="13px">
                    Only upload high quality photos. For a standard landscape
                    orientation photo,<u> 5 megapixels</u> is at least{" "}
                    <u>2,500 by 2,000 pixels in size.</u>{" "}
                  </Text>
                </Flex>
                <Box>
                  <Flex gap="1.5rem">
                    <Box>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40px"
                        height="40px"
                        color="grey"
                        fill="currentColor"
                        class="bi bi-check-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </Box>
                    <Text fontSize="13px">
                      Photos are <u>clear, original</u> and are not over edited.
                      Photos do not contain nudity or violent imagery. Unsplash
                      is a place for people of all ages.
                    </Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex gap="1.5rem">
                    <Box>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        color="grey"
                        fill="currentColor"
                        class="bi bi-c-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
                      </svg>
                    </Box>
                    <Text fontSize="13px">
                      You must <u>own the rights</u> to any photo you share on
                      Unsplash. You can read more about this in our Terms.
                    </Text>
                  </Flex>
                </Box>
              </SimpleGrid>
            </Box>

            <br />

            <Box width="380px" float="right">
              <Checkbox
                value={t}
                onChange={handleChange}
                size="md"
                colorScheme="green"
                defaultChecked
              >
                I understand and agree
              </Checkbox>{" "}
              &nbsp;{" "}
              {t ? (
                <Button bgColor="black" color="white" mt="-7px">
                  Start uploding
                </Button>
              ) : (
                <Button mt="-7px">Start uploding</Button>
              )}{" "}
            </Box>

            <br />
            <br />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SubmitPhoto;
