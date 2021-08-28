import React from "react";
import { Heading, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import Project from "./Project";

const personProjects = [
  {
    title: "Pixels",
    desc: "A free stock photo web app, based on the pexels API. This project provides the ability to save your favorite images with the power of local storage.",
    tags: ["React", "Pexels API", "React Hooks", "React-Router"],
    github: "",
    demo: "",
  },
  {
    title: "Join A Room",
    desc: "A simple chatroom application, which provides users with the ability to choose a username, room name, and connect with their friends.",
    tags: ["React", "Express", "Socket.io", "NodeJS", "Heroku", "Sass"],
    github: "",
    demo: "",
  },
  {
    title: "Qwiz",
    desc: "A web application made for trivia. Allows users to pick a category, difficulty, and nickname. Saves the users score and nickname to firebase.",
    tags: ["React", "Styled-Components", "Firebase", "React-Router"],
    github: "",
    demo: "",
  },
  {
    title: "Shortly",
    desc: "A free online url shortening tool, that allows users to enter any url and have a shortend version returned.",
    tags: ["Svelte", "Express", "MongoDB"],
    github: "",
    demo: "",
  },
];

export default function Projects() {
  return (
    <VStack w="100%" align="left">
      <Heading>Projects</Heading>
      <Text pb="2rem">Collection of personal projects.</Text>
      <SimpleGrid columns={[1, 1, 2]} spacing="2rem">
        {personProjects.map((project) => (
          <Project
            title={project.title}
            desc={project.desc}
            tags={project.tags}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}
