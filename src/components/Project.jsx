import { ChatIcon, ExternalLinkIcon, PlusSquareIcon } from "@chakra-ui/icons";
import {
  Container,
  Grid,
  Heading,
  Box,
  Image,
  Button,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import man1 from "../assets/man1.jpg";

function Project() {
  return (
    <Container
      textAlign={"center"}
      maxW="90%"
      mt="10px"
      minH={500}
      as="section"
      paddingTop={5}
    >
      <Heading color={"teal"} mt={10}>
        My Projects
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={9}
        mt={20}
      >
        <Box
          boxShadow={"0 0 10px 0 rgba(0,0,0,0.2)"}
          h={350}
          bg={"white"}
          borderRadius={10}
          borderTop={"5px solid teal"}
          w={{ base: 230, md: 300 }}
        >
          <Image
            src={man1}
            boxSize="260px"
            borderRadius={10}
            mt={7}
            ml={5}
            objectFit={"cover"}
            className={"scale"}
          />
          <Stack mt={3} ml={8} direction="row" spacing={4} align="center">
            <Button leftIcon={<ChatIcon />} colorScheme="teal" variant="ghost">
              Comment
            </Button>

            <Button
              colorScheme="teal"
              rightIcon={<ExternalLinkIcon />}
              variant="ghost"
            >
              More
            </Button>
          </Stack>
        </Box>
        <Box
          boxShadow={"0 0 10px 0 rgba(0,0,0,0.2)"}
          h={350}
          bg={"white"}
          borderRadius={10}
          borderTop={"5px solid teal"}
          w={{ base: 230, md: 300 }}
        >
          <Image
            src={man1}
            boxSize="260px"
            borderRadius={10}
            mt={7}
            ml={5}
            objectFit={"cover"}
            className={"scale"}
          />
          <Stack mt={3} ml={8} direction="row" spacing={4} align="center">
            <Button leftIcon={<ChatIcon />} colorScheme="teal" variant="ghost">
              Comment
            </Button>

            <Button
              colorScheme="teal"
              rightIcon={<ExternalLinkIcon />}
              variant="ghost"
            >
              More
            </Button>
          </Stack>
        </Box>
        <Box
          boxShadow={"0 0 10px 0 rgba(0,0,0,0.2)"}
          h={350}
          bg={"white"}
          borderRadius={10}
          borderTop={"5px solid teal"}
          w={{ base: 230, md: 300 }}
        >
          <Image
            src={man1}
            boxSize="260px"
            borderRadius={10}
            mt={7}
            ml={5}
            objectFit={"cover"}
            className={"scale"}
          />
          <Stack mt={3} ml={8} direction="row" spacing={4} align="center">
            <Button leftIcon={<ChatIcon />} colorScheme="teal" variant="ghost">
              Comment
            </Button>

            <Button
              colorScheme="teal"
              rightIcon={<ExternalLinkIcon />}
              variant="ghost"
            >
              More
            </Button>
          </Stack>
        </Box>
        <Box
          boxShadow={"0 0 10px 0 rgba(0,0,0,0.2)"}
          h={350}
          bg={"white"}
          borderRadius={10}
          borderTop={"5px solid teal"}
          w={{ base: 230, md: 300 }}
        >
          <Image
            src={man1}
            boxSize="260px"
            borderRadius={10}
            mt={7}
            ml={5}
            objectFit={"cover"}
            className={"scale"}
          />
          <Stack mt={3} ml={8} direction="row" spacing={4} align="center">
            <Button leftIcon={<ChatIcon />} colorScheme="teal" variant="ghost">
              Comment
            </Button>

            <Button
              colorScheme="teal"
              rightIcon={<ExternalLinkIcon />}
              variant="ghost"
            >
              More
            </Button>
          </Stack>
        </Box>
        <Box
          boxShadow={"0 0 10px 0 rgba(0,0,0,0.2)"}
          h={350}
          borderRadius={10}
          bg={"white"}
          borderTop={"5px solid teal"}
          w={{ base: 230, md: 300 }}
        >
          <Image
            src={man1}
            boxSize="260px"
            borderRadius={10}
            mt={7}
            ml={5}
            objectFit={"cover"}
            className={"scale"}
          />
          <Stack mt={3} ml={8} direction="row" spacing={4} align="center">
            <Button leftIcon={<ChatIcon />} colorScheme="teal" variant="ghost">
              Comment
            </Button>

            <Button
              colorScheme="teal"
              rightIcon={<ExternalLinkIcon />}
              variant="ghost"
            >
              More
            </Button>
          </Stack>
        </Box>
        <Box
          boxShadow={"0 0 10px 0 rgba(0,0,0,0.2)"}
          h={350}
          borderRadius={10}
          bg={"white"}
          borderTop={"5px solid teal"}
          w={{ base: 230, md: 300 }}
        >
          <Image
            src={man1}
            boxSize="260px"
            borderRadius={10}
            mt={7}
            ml={5}
            objectFit={"cover"}
            className={"scale"}
          />
          <Stack mt={3} ml={8} direction="row" spacing={4} align="center">
            <Button leftIcon={<ChatIcon />} colorScheme="teal" variant="ghost">
              Comment
            </Button>

            <Button
              colorScheme="teal"
              rightIcon={<ExternalLinkIcon />}
              variant="ghost"
            >
              More
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Container>
  );
}

export default Project;
