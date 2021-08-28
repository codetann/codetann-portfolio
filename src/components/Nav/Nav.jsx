import React from "react";
import { Link, Heading, IconButton, HStack, Spacer } from "@chakra-ui/react";
import { GithubIcon, LinkedInIcon } from "../Icons/Icons";

const Logo = () => (
  <HStack spacing="0">
    <Heading>TT</Heading>
    <Heading color="blue.200">.</Heading>
  </HStack>
);

export default function Nav() {
  return (
    <HStack w="100%">
      <Logo />
      <Spacer />
      <HStack spacing="1rem">
        <Link>Blog</Link>
        <IconButton icon={<GithubIcon />} />
        <IconButton icon={<LinkedInIcon />} />
      </HStack>
    </HStack>
  );
}
