import React from "react";
import {
  VStack,
  HStack,
  Heading,
  Text,
  Tag,
  Spacer,
  Button,
  Wrap,
} from "@chakra-ui/react";

export default function Project({ title, desc, tags, github, demo }) {
  return (
    <VStack
      w="100%"
      align="left"
      spacing="2rem"
      bg="whiteAlpha.100"
      p="2rem"
      rounded="md"
      shadow="md"
    >
      <HStack>
        <Heading size="lg" fontStyle="italic">
          {title}
        </Heading>
        <Spacer />
        <Button size="sm" colorScheme="blue">
          Github
        </Button>
        <Button size="sm">Demo</Button>
      </HStack>
      <Wrap>
        {tags.map((tag) => (
          <Tag colorScheme="blue">{tag}</Tag>
        ))}
      </Wrap>
      <Text>{desc}</Text>
    </VStack>
  );
}
