import { useState } from "react";
import {
  VStack,
  HStack,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

export function Contact() {
  return (
    <VStack w="100%" p="2rem 0">
      <Heading>📧 Get In Touch</Heading>
      <Text maxW="xl" textAlign="center" opacity=".7">
        I am currently looking for new opportunities! Whether you have a
        question or just want to say hi, I would love to hear from you!
      </Text>
      <VStack w="100%" maxW="xl" spacing="2rem">
        <form>
          <Input
            required
            placeholder="Name"
            mb="2rem"
            mt="2rem"
            _focus={{ borderColor: "teal.200", borderWidth: "2px" }}
          />
          <Input required placeholder="Email" mb="2rem" />
          <Textarea required placeholder="Message" minH="10rem" mb="2rem" />
          <HStack w="100%" justify="end">
            <Button type="submit">Submit</Button>
          </HStack>
        </form>
      </VStack>
    </VStack>
  );
}
