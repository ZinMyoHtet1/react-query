import React from "react";
import { Box, Text, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

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
      <Text fontSize="5xl" mb="10px" color="yellow" fontWeight="500">
        Star War
      </Text>
      <HStack spacing={3}>
        <NavLink className="link-button" to="/">
          Planets
        </NavLink>
        <NavLink className="link-button" to="/people">
          People
        </NavLink>
      </HStack>
    </Box>
  );
}

export default NavBar;
