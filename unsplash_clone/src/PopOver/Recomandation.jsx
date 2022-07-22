import {
  Box,
  Button,
  Heading,
  Image,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Recomandation = () => {
  return (
    <>
      <PopoverContent
        zIndex={4}
        w="950px"
        border="1px solid lightgrey"
        backgroundColor="rgb(246,245,244)"
      >
        <PopoverHeader fontWeight="semibold" border="none"></PopoverHeader>

        <Box textAlign="left" m="10px">
          <Heading fontSize="20px">Trending Searches</Heading>
          <br />
          <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="gray" variant="outline" gap="0.5rem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-graph-up-arrow"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                />
              </svg>{" "}
              <Text>violet petal</Text>
            </Button>
            <Button colorScheme="gray" variant="outline" gap="0.5rem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-graph-up-arrow"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                />
              </svg>{" "}
              <Text> yellow-flowers</Text>
            </Button>
            <Button colorScheme="gray" variant="outline" gap="0.5rem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-graph-up-arrow"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                />
              </svg>{" "}
              <Text>animals</Text>
            </Button>
            <Button colorScheme="gray" variant="outline" gap="0.5rem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-graph-up-arrow"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                />
              </svg>{" "}
              <Text> home</Text>
            </Button>
            <Button colorScheme="gray" variant="outline" gap="0.5rem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-graph-up-arrow"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                />
              </svg>{" "}
              <Text>sunset</Text>
            </Button>
          </Stack>
        </Box>

        <PopoverBody borderBottom="2px solid grey">
          <Box textAlign="left" m="10px">
            <Heading fontSize="20px">Trending Topics</Heading>
            <br />

            <Stack direction="row" spacing={4} align="center">
              <Button colorScheme="gray" variant="outline">
                <Image
                  boxSize="40px"
                  objectFit="cover"
                  src="https://images.unsplash.com/photo-1655912129421-599b5707dd6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"
                  alt="Dan Abramov"
                />{" "}
                Health & Wellness
              </Button>
              <Button colorScheme="gray" variant="outline">
                <Image
                  boxSize="40px"
                  objectFit="cover"
                  src="https://images.unsplash.com/photo-1637690713397-18ec606e987e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
                  alt="Dan Abramov"
                />
                Travel
              </Button>
              <Button colorScheme="gray" variant="outline">
                <Image
                  boxSize="40px"
                  objectFit="cover"
                  src="https://images.unsplash.com/photo-1616832880334-b1004d9808da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
                  alt="Dan Abramov"
                />
                Street Photography
              </Button>
              <Button colorScheme="gray" variant="outline">
                <Image
                  boxSize="40px"
                  objectFit="cover"
                  src="https://images.unsplash.com/photo-1657429534111-c866ac1d82c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="Dan Abramov"
                />
                Athletics
              </Button>
              <Button colorScheme="gray" variant="outline">
                <Image
                  boxSize="40px"
                  objectFit="cover"
                  src="https://images.unsplash.com/photo-1657065220746-3d7d863b5054?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="Dan Abramov"
                />
                Arts & Culture
              </Button>
            </Stack>
          </Box>
          <br />
          <Box textAlign="left">
            <Heading fontSize="20px">Trending Collections</Heading>
            <br />
            <Stack direction="row" spacing={4} align="center">
              <Button colorScheme="gray" variant="outline">
                church
              </Button>
              <Button colorScheme="gray" variant="outline">
                Mute and pastel
              </Button>
              <Button colorScheme="gray" variant="outline">
                Spring
              </Button>
              <Button colorScheme="gray" variant="outline">
                MockUps
              </Button>
              <Button colorScheme="gray" variant="outline">
                Light Tones
              </Button>
            </Stack>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </>
  );
};

export default Recomandation;
