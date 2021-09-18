import React from "react";
import { Heading, HStack, Text, VStack, Wrap } from "@chakra-ui/react";
import {
  ReactIcon,
  JavaScirptIcon,
  HTMLIcon,
  CSSIcon,
  SassIcon,
  NodeIcon,
  GitIcon,
  PythonIcon,
  PostGreSQLIcon,
  SvelteIcon,
} from "../Icons/Icons";

const Icons = [
  { name: "React", icon: ReactIcon },
  { name: "JavaScript", icon: JavaScirptIcon },
  { name: "HTML 5", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "Sass", icon: SassIcon },
  { name: "NodeJS", icon: NodeIcon },
  { name: "Git", icon: GitIcon },
  { name: "Python", icon: PythonIcon },
  { name: "PostGreSQL", icon: PostGreSQLIcon },
  { name: "Svelte", icon: SvelteIcon },
];

export default function About() {
  return (
    <VStack w="100%" align="left" pb="8rem">
      <Heading>✏️ Skills</Heading>
      <Text pb="2rem" opacity=".7">
        Technologies I've worked with.
      </Text>
      <Wrap w="100%" spacing="1rem" justify="space-between">
        {Icons.map((icon) => (
          <VStack
            bg="whiteAlpha.100"
            h="6rem"
            w="6rem"
            align="center"
            justify="center"
            shadow="md"
            rounded="md"
          >
            <icon.icon />
            <Text fontSize="12px" opacity=".8">
              {icon.name}
            </Text>
          </VStack>
        ))}
      </Wrap>
    </VStack>
  );
}
