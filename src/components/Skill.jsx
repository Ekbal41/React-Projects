import { Box, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import React from "react";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import django from "../assets/django.png";
import java from "../assets/java.png";

import python from "../assets/python.png";

function Skill() {
  return (
    <>
      <Flex
        mt={20}
        border={"2px solid teal"}
        p={5}
        alignItems={"center"}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box flex={2}>
          <Heading color={"teal"}>My Skills</Heading>
          <Heading fontSize={15}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            obcaecati, hic facilis deleniti doloremque ab dolorem sunt aliquid
            magni dignissimos!
          </Heading>
        </Box>
        <Grid
          flex={2}
          templateColumns={{
            base: "repeat(5, 1fr)",
            md: "repeat(5, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          p={5}
          as={"section"}
        >
          <Image
            src={react}
            boxSize={{ base: "50", md: "100" }}
            color={"teal"}
          />
          <Image
            src={javascript}
            boxSize={{ base: "50", md: "100" }}
            color={"teal"}
          />
          <Image
            src={java}
            boxSize={{ base: "50", md: "100" }}
            color={"teal"}
          />
          <Image
            src={django}
            boxSize={{ base: "50", md: "100" }}
            color={"teal"}
          />
          <Image
            src={python}
            boxSize={{ base: "50", md: "100" }}
            color={"teal"}
          />
        </Grid>
      </Flex>
    </>
  );
}

export default Skill;
