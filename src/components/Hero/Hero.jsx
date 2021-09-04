import React from "react";
import { VStack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import ResumeMenu from "./ResumeMenu";

export default function Hero() {
  const handleEmail = () => {
    const anchor = document.createElement("a");
    anchor.href = "mailto:codetann@gmail.com";
    anchor.target = "_blank";
    anchor.click();
  };

  return (
    <VStack h="75vh" justify="center" align="left" spacing="2rem" w="100%">
      <Heading>Hello 👋, I am</Heading>
      <Heading size="3xl" color="blue.200">
        Tanner Thomas
      </Heading>

      <Text>
        I'm a self-taught frontend developer based in Salt Lake City, Utah. My
        goal is to create engaging experiences for users, with a fine balance of
        technology and design.
      </Text>
      <HStack>
        <Button onClick={handleEmail} colorScheme="blue">
          Contact Me
        </Button>
        <ResumeMenu />
      </HStack>
    </VStack>
  );
}
