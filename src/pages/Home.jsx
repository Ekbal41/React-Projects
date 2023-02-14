import {
  Container,
  Flex,
  Box,
  Heading,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Hero from "../assets/hero.png";

function Home() {
  return (
    <Container
      as={"section"}
      maxW="90%"
      mt={5}
      bg="gray.200"
      borderRadius={5}
      color="#262626"
      h ='100%'
    >
      <Flex alignItems={"center"} flexDir={{ base: "column", md: "row" }}>
        <Box flex="1" p={5} mt={{md:'100px',}}>
          <Heading as="h1" mb={5}>
            Welcome to my mini project website.
            <br />
           
          </Heading>
          <Heading fontSize={20} mt={5} color="teal" as="h3">
            Lorem ipsum dolornt aliquid nulla perspiciatis sequi, eos nisi ecto.
            Lorem ipsum dolornt aliquid nulla perspiciatis sequi, eos nisi
            recusandae assumenda architecto.
          </Heading>
          <Stack direction="row" spacing={4} align="center" mt={10}>
            <Button colorScheme="teal" variant="solid" >
              Button
            </Button>
            <Button colorScheme="teal" variant="outline">
              Button
            </Button>
          </Stack>
        </Box>

        <Box boxSize="sm" flex="1" p={10}>
          <Image src={Hero} alt="Dan Abramov" />
        </Box>
      </Flex>
    </Container>
  );
}

export default Home;
