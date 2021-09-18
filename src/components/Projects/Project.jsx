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
  const handleLink = (link) => {
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = link;
    a.click();
    a.remove();
  };

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
        <Heading size="lg">{title}</Heading>
        <Spacer />
        <Button size="sm" colorScheme="teal" onClick={() => handleLink(github)}>
          Github
        </Button>
        <Button size="sm" onClick={() => handleLink(demo)}>
          Demo
        </Button>
      </HStack>
      <Wrap>
        {tags.map((tag) => (
          <Tag colorScheme="teal">{tag}</Tag>
        ))}
      </Wrap>
      <Text opacity=".7">{desc}</Text>
    </VStack>
  );
}
