import React from "react";
import { Box, Text, HStack, Button } from "@chakra-ui/react";

function NavBar() {
  return (
    <Box>
      <Text fontSize="5xl">Star War</Text>
      <HStack>
        <Button>Planets</Button>
        <Button>People</Button>
      </HStack>
    </Box>
  );
}

export default NavBar;
