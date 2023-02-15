import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Heading,
  Box,
  Input,
  Stack,
  Button,
  InputGroup,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AtSignIcon,
  PlusSquareIcon,
  LockIcon,
  EmailIcon,
} from "@chakra-ui/icons";

function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const newData = Object.fromEntries(data.entries());
    updateStarte(newData);
  };
  const updateStarte = (newData) => {
    setUser({ ...user, ...newData });
  };

  const toast = useToast();
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
          w={{ base: "90%", md: "35%" }}
          h={450}
          marginX={{ base: "auto", md: "auto", lg: "auto" }}
          borderRadius={10}
          boxShadow={"0 0 10px 0 rgba(0,0,0,0.2)"}
          borderTop={"5px solid teal"}
          p={5}
          
        >
          <Heading as="h3" mt={5} fontSize={30} color={"teal"}>
            Register
          </Heading>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4} mt={10}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PlusSquareIcon color="gray.300" />}
                />
                <Input type="tel" border={"1px solid teal"} name="name" placeholder="Your name" />
              </InputGroup>

              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<AtSignIcon color="gray.300" />}
                />
                <Input border={"1px solid teal"} type="tel" name="email" placeholder="Your email" />
              </InputGroup>

              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon color="gray.300" />}
                />
                <Input type="tel" border={"1px solid teal"} name="password" placeholder="Password" />
              </InputGroup>

              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon color="gray.300" />}
                />
                <Input
                  type="tel"
                  name="repeatPassword"
                  placeholder="Repat Password"
                  border={"1px solid teal"}
                />
              </InputGroup>
            </Stack>
            <Button
              mt={10}
              w={"full"}
              variant='solid'
              type="submit"
              colorScheme={"teal"}
              onClick={() =>
                toast({
                  title: "Account created.",
                  description: "You will redirected to login page.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                  position: "top-right",
                  icon: <EmailIcon />,
                })
              }
            >
              Register
            </Button>
          </form>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Form;
