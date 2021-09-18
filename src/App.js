import React from "react";
import { VStack } from "@chakra-ui/layout";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Skills from "./components/About/Skills";
import Projects from "./components/Projects/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <VStack w="100%" minH="100vh" padding="2rem" align="center">
      <VStack w="100%" maxW="1200px">
        <Nav />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </VStack>
    </VStack>
  );
}

export default App;
