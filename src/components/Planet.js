import React from "react";
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

function Planet(planets) {
  console.log(planets);
  return (
    <SimpleGrid column="4" gap="10px" minChildWidth="250px">
      {planets.planet.map((planet, index) => (
        <Box
          key={index}
          p="20px"
          bg="black"
          mt="10px"
          borderRadius="5px"
          border="3px solid lightgray"
        >
          <Heading size="md" color="brown">
            {planet.name}
          </Heading>
          <Text fontSize="md" color="gray">
            population - {planet.population}
          </Text>
          <Text fontSize="md" color="gray">
            terrain - {planet.terrain}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default Planet;
