import { Container, Heading, Box, Flex, Spacer, Grid } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CalculetorContext } from "../context/CalContext";
import Btn from "../components/Btn";
import { motion } from "framer-motion";

function Contact() {
  const { calc, setCalc } = useContext(CalculetorContext);
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0,".","D" , "="],
  ];
  return (
    <Container
      textAlign={"center"}
      maxW="90%"
      mt="10px"
      minH={500}
      bg="gray.200"
      as="section"
      paddingTop={5}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
      <Box
        pt={250}
        bg={"white"}
        w={{base: "90%", md: '35%'}}
        h={450}
        marginX={{base: "auto", md: 'auto', lg: 'auto'}}
        borderRadius={10}
        boxShadow={"0 0 10px 0 rgba(0,0,0,0.2)"}
        border={"1px solid teal"}
        p={5}
      >
        <Flex flexDir={"column"} justifyContent={"space-between"}>
          <Flex
            h={20}
            textAlign={"start"}
            color={"teal"}
            fontWeight={'bold'}
            flexDir={"column"}
           p={3}
            borderRadius={10}
            border={"1px solid teal"}
            mb={4}
            bg={"gray.100"}
            
            overflow={"hidden"}
          >
            <Heading>{calc.num}</Heading>
            <Heading
            fontSize={18}
            fontFamily={"monospace"}
            marginLeft={1}
            textAlign={"end"}
            >{calc.result}</Heading>
          </Flex>

          <Grid h={310} borderRadius={10} border={"1px solid teal"} p={3} templateColumns='repeat(4, 1fr)' gap={3}  >
            {btnValues.flat().map((btn, i) => (
              <Btn value={btn} key={i} />
            ))}
          </Grid>
        </Flex>
      </Box>
      </motion.div>
    </Container>
  );
}

export default Contact;
