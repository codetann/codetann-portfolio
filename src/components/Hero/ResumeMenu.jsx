import React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function ResumeMenu() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Resume
      </MenuButton>
      <MenuList>
        <MenuItem>PDF</MenuItem>
        <MenuItem>Google Doc</MenuItem>
        <MenuItem>HTML</MenuItem>
      </MenuList>
    </Menu>
  );
}
