import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Heading, Input, Textarea } from "@chakra-ui/react";
import React from "react";

function Conatct() {
  return (
    <Container
      textAlign={"center"}
      maxW="90%"
      mt="100px"
      minH={500}
      as="section"
      paddingTop={5}
     
    >
      <Box
      bg={"white"}
      borderTop={"5px solid teal"}
      p={{base: "4", md: "10", lg: "10"}}
      borderRadius={30}
      boxShadow={"0 0 10px 0 rgba(0,0,0,0.2)"}
      color={"teal"}
      >
        <Heading color={"teal"}>Conatct Me</Heading>
        <Box px={{md:"40"}} mt={{base:"40px"}}>
          <Input
            type="text"
            mb={5}
            border={"2px solid teal"}
            placeholder={"Your nmae.."}
          />
          <Input
            type="email"
            mb={5}
            border={"2px solid teal"}
            placeholder={"Your email.."}
          />
          <Textarea
            type="email"
            mb={5}
            border={"2px solid teal"}
            placeholder={"Write me anything.."}
          />
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="solid"
           mr={600}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Conatct;
