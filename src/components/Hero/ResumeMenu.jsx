import React from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function ResumeMenu() {
  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "tanner-thomas-resume.pdf";
    anchor.target = "_blank";
    anchor.download = "tanner-thomas-resume.pdf";
    anchor.click();
  };
  const handleDoc = () => {
    const anchor = document.createElement("a");
    anchor.href =
      "https://docs.google.com/document/d/1DC7w8broXlPSnnYdm8k48Na-M9Kx8fiw6nFnKyNZ9SI/edit?usp=sharing";
    anchor.target = "_blank";
    anchor.click();
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Resume
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleDownload}>PDF</MenuItem>
        <MenuItem onClick={handleDoc}>Google Doc</MenuItem>
        <MenuItem>HTML</MenuItem>
      </MenuList>
    </Menu>
  );
}
