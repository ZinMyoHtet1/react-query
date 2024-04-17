import React from "react";
import { Box, Text, HStack, Button } from "@chakra-ui/react";

function NavBar() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      borderBottom="1px solid gray"
      w="100%"
      p="20px"
      alignItems="center"
    >
      <Text fontSize="5xl" mb="10px" color="white" fontWeight="500">
        Star War
      </Text>
      <HStack spacing={3}>
        <Button as="a" href="/">
          Planets
        </Button>
        <Button as="a" href="/people">
          People
        </Button>
      </HStack>
    </Box>
  );
}

export default NavBar;
