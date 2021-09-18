import React from "react";
import { Heading, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import Project from "./Project";

const personProjects = [
  {
    title: "My Links",
    desc: "A linktree clone, showcasing links to my verious sites. The link is placed in your social media bio allowing friends and family to connect with what matters most.",
    tags: ["React", "Chakra-UI", "Netlify"],
    github: "https://github.com/codetann/linktree-clone",
    demo: "https://romantic-swartz-914e81.netlify.app/",
  },
  {
    title: "Pixels",
    desc: "A free stock photo web app, based on the pexels API. This project provides the ability to save your favorite images with the power of local storage.",
    tags: ["React", "Pexels API", "React Hooks", "React-Router"],
    github: "https://github.com/codetann/pixels-portfolio",
    demo: "https://6035474117e47b09cf8fc69b--cranky-noether-5d469c.netlify.app/",
  },
  {
    title: "Join A Room",
    desc: "A simple chatroom application, which provides users with the ability to choose a username, room name, and connect with their friends.",
    tags: ["React", "Express", "Socket.io", "NodeJS", "Heroku", "Sass"],
    github: "https://github.com/codetann/join-a-room",
    demo: "https://join-a-room-app.herokuapp.com/",
  },
  {
    title: "Qwiz",
    desc: "A web application made for trivia. Allows users to pick a category, difficulty, and nickname. Saves the users score and nickname to firebase.",
    tags: ["React", "Styled-Components", "Firebase", "React-Router"],
    github: "https://github.com/codetann/QWIZ",
    demo: "https://infallible-hypatia-374001.netlify.app/",
  },
  {
    title: "Shortly",
    desc: "A free online url shortening tool, that allows users to enter any url and have a shortend version returned.",
    tags: ["Svelte", "Express", "MongoDB"],
    github: "https://github.com/codetann/shortly",
    demo: "https://stly.us",
  },
];

export default function Projects() {
  return (
    <VStack w="100%" align="left" pb="8rem">
      <Heading>📂 Projects</Heading>
      <Text pb="2rem" opacity=".7">
        Collection of personal projects.
      </Text>
      <SimpleGrid columns={[1, 1, 2]} spacing="2rem">
        {personProjects.map((project) => (
          <Project
            title={project.title}
            desc={project.desc}
            tags={project.tags}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}
