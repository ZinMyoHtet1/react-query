import React from "react";
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

function Planet(planets) {
  console.log(planets);
  return (
    <SimpleGrid column="4" gap="10px" minChildWidth="250px">
      {planets.planet.map((planet) => (
        <Box p="20px" bg="whitesmoke" mt="10px" borderRadius="5px">
          <Heading size="md">{planet.name}</Heading>
          <Text fontSize="md">population - {planet.population}</Text>
          <Text fontSize="md">terrain - {planet.terrain}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default Planet;
