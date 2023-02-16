import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, TimeIcon } from "@chakra-ui/icons";
import { Configuration, OpenAIApi } from "openai";

function Chatbot() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const blankRef = useRef(null);

  const getResponse = async () => {
    const configuration = new Configuration({
      organization: "org-hGs4tZBO2p7ktqxJ9OBXZfl4",
      apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);
    if (message.length < 5) {
      setData((prev) => [
        ...prev,
        {
          message: "Sorry, did you say something?",
          type: "bot",
          time: "12:20",
        },
      ]);
    }
    if (message && message.length > 5) {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 100,
        temperature: 0.9,
      });

      setData((prev) => [
        ...prev,
        {
          message: response.data.choices[0].text,
          type: "bot",
          time: "12:20",
        },
      ]);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage(e);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!message) return;

    setData((prev) => [
      ...prev,
      {
        message: message,
        type: "man",
        time: "12:20",
      },
    ]);
    setMessage("");
    console.log(data);

    await getResponse();
  };
  const scrollToBottom = () => {
    blankRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [data]);

  return (
    <Container
      textAlign={"center"}
      maxW="90%"
      mt="10px"
      minH={500}
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
          border={"1px solid teal"}
          p={5}
        >
          <Flex flexDir={"column"} fontFamily={"monospace"}>
            <Heading
              borderRadius={10}
              h="50px"
              p={2}
              textAlign={"start"}
              color={"white"}
              fontSize={20}
              pt={3}
              pl={5}
              bg={"teal"}
              fontWeight={"bold"}
            >
              🤖 Linda
            </Heading>
            <Box h="300px" textAlign={"center"} overflow={"auto"}>
              {data.length ? (
                data.map((item, index) => {
                  return (
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <Box
                          key={index}
                          bg={item.type === "bot" ? "gray.100" : "white"}
                          color={"teal"}
                          textAlign={item.type === "man" ? "end" : "start"}
                          borderRadius={10}
                          p={2}
                          m={2}
                          border={"1px solid teal"}
                        >
                          {item.type === "bot" ? "🤖 " : ""}
                          {item.message} {item.type === "man" ? "😊" : ""}
                        </Box>
                        <Heading
                          fontSize={11}
                          textAlign={item.type === "man" ? "end" : "start"}
                          color={"teal"}
                        >
                          🕝{item.time}
                        </Heading>
                      </motion.div>
                    </>
                  );
                })
              ) : (
                <Heading color={"teal"} fontSize={15} mt={"150px"}>
                  🤖 <br />
                  Hi, I'm Linda, <br />
                  your personal assistant.
                  <br /> How can I help you?
                </Heading>
              )}

              <div ref={blankRef} />
            </Box>
            <form>
              <Box h="50px" position={"relative"}>
                <Input
                  variant={"unstyled"}
                  value={message}
                  p={2}
                  color={"teal"}
                  bg={"gray.100"}
                  border="1px solid teal"
                  mt={3}
                  placeholder={"Your Messages.."}
                  onChange={(e) => setMessage(e.target.value)}
                  overflowWrap={true}
                  w={{base: 200, md: 300}}
                  mr={20}
                />
                <Button
                  leftIcon={<ArrowRightIcon />}
                  colorScheme="teal"
                  variant="solid"
                  position={"absolute"}
                  top={3}
                  right={2}
                  borderRadius={30}
                  pr={2}
                  py={5}
                  type={"submit"}
                  onClick={sendMessage}
                  onKeyDown={handleKeyDown}
                ></Button>
              </Box>
            </form>
          </Flex>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Chatbot;
