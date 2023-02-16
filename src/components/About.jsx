import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Progress,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import man2 from "../assets/man2.jpg";


function About() {
  return (
    <>
      <Flex
        as={"section"}
        mt={20}
        mb={10}
        borderRadius={30}
        justifyContent={"space-between"}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box flex={1} p={5}  >
          <Image
            src={man2}
           
            boxSize="300px"
            border={"5px solid teal"}
            mt={10}
            borderRadius="full"
            objectFit="cover"
            className="ImgHover"
            zIndex={10}
          />
        </Box>
        <Box flex={{base: "1", md:"2"}} p={5}>
          <Heading mb={5} color="teal">
            About Me
          </Heading>
          <Heading mb={5} fontSize={18}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quo,
            adipisci explicabo animi cupiditate rem?
          </Heading>
          <Heading mb={5} color="teal">
            My Skills
          </Heading>
          <Stack spacing={5}>
            <Progress colorScheme="teal" size="md" value={70} />
            <Progress colorScheme="teal" size="md" value={80} />
            <Progress colorScheme="teal" size="md" value={90} />
            <Progress colorScheme="teal" size="md" value={78} />
          </Stack>
          <Button colorScheme="teal" variant="outline" mt={5}>
            Hire Me
          </Button>
        </Box>
      </Flex>
    </>
  );
}

export default About;
