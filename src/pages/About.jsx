import React from 'react'
import { Container, Heading, Box } from "@chakra-ui/react";

function About() {
  return (
    <Container
    textAlign={"center"}
    maxW="90%"
    mt="10px"
    minH={500}
    bg="gray.200"
    as="section"
  >
    <Box pt={250}>
      <Heading color={"teal"}>This is contact page</Heading>
    </Box>
  </Container>
  )
}

export default About