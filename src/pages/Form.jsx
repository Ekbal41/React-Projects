import React, { useRef, useState } from "react";
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
    console.log("its here");
    setUser({ ...user, ...newData });
    console.log(user);
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
      <Box
        pt={250}
        bg={"white"}
        w={{ base: "90%", md: "35%" }}
        h={450}
        marginX={{ base: "auto", md: "auto", lg: "auto" }}
        borderRadius={10}
        boxShadow={"0 0 10px 0 rgba(0,0,0,0.2)"}
        border={"1px solid teal"}
        p={5}
      >
        <Heading as="h3" color={"teal"}>
          Register
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4} mt={10}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<PlusSquareIcon color="gray.300" />}
              />
              <Input type="tel" name="name" placeholder="Your name" />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AtSignIcon color="gray.300" />}
              />
              <Input type="tel" name="email" placeholder="Your email" />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<LockIcon color="gray.300" />}
              />
              <Input type="tel" name="password" placeholder="Password" />
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
              />
            </InputGroup>
          </Stack>
          <Button
            mt={10}
            w={"full"}
            variant="outline"
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
    </Container>
  );
}

export default Form;
