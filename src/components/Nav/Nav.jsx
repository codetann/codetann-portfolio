import React from "react";
import { Link, Heading, IconButton, HStack, Spacer } from "@chakra-ui/react";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "../Icons/Icons";

const Logo = () => (
  <HStack spacing="0">
    <Heading>TT</Heading>
    <Heading color="teal.200">.</Heading>
  </HStack>
);

export default function Nav() {
  const handleClick = (link) => {
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.target = "_blank";
    anchor.click();
  };

  return (
    <HStack w="100%">
      <Logo />
      <Spacer />
      <HStack spacing="1rem">
        {/* <Link onClick={() => handleClick("https://dev.to/codetann")}>Blog</Link> */}
        <IconButton
          onClick={() => handleClick("https://github.com/codetann")}
          icon={<GithubIcon />}
        />
        <IconButton
          onClick={() =>
            handleClick("https://www.linkedin.com/in/tanner-thomas/")
          }
          icon={<LinkedInIcon />}
        />
        <IconButton
          onClick={() => handleClick("https://twitter.com/codetann")}
          icon={<TwitterIcon />}
        />
      </HStack>
    </HStack>
  );
}
