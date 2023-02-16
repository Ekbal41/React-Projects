import { HamburgerIcon, CalendarIcon, AtSignIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import {
  Box,
  Icon,
  Flex,
  Spacer,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  return (
    <>
      <Flex
        px="20px"
        color={"white"}
        h="50px"
        fontWeight={"bold"}
        justifyContent={"center"}
        bg={"teal"}
        alignItems={"center"}
        cursor={"pointer"}
      >
        <Link to="/"> 🏡HOME</Link>
        <Spacer />
        <Flex>
          <Box display={{ base: "none", md: "block" }}>
            <Link to="/form">
              <Text marginRight={10}> 📝Form</Text>
            </Link>
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Link to="/calculetor">
              <Text marginRight={10}> 📟Calculetor</Text>
            </Link>
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Link to="/chatbot">
              <Text marginRight={10}> 🤖Chatbot</Text>
            </Link>
          </Box>

          <Icon
            onClick={onOpen}
            mt="5px"
            fontSize={20}
            display={{ base: "block", md: "none", lg: "none" }}
            as={HamburgerIcon}
          />
        </Flex>
      </Flex>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent cursor={"pointer"}>
          <DrawerHeader borderBottomWidth="1px">
            <Button colorScheme="teal" onClick={onClose} variant="outline">
              Close
            </Button>
          </DrawerHeader>

          <DrawerBody>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CalendarIcon} color="green.500" />
                About
              </ListItem>
              <ListItem>
                <ListIcon as={AtSignIcon} color="green.500" />
                Calculetor
              </ListItem>
              <ListItem>
                <ListIcon as={AtSignIcon} color="green.500" />
                Chatbot
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
