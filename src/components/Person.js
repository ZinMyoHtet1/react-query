import React from "react";
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

function Person(people) {
  console.log(people);
  return (
    <SimpleGrid column="4" gap="10px" minChildWidth="250px">
      {people.people.map((person, index) => (
        <Box
          key={index}
          p="20px"
          bg="black"
          mt="10px"
          borderRadius="5px"
          border="3px solid lightgray"
        >
          <Heading size="md" color="brown">
            {person.name}
          </Heading>
          <Text fontSize="md" color="gray">
            height - {person.height}
          </Text>
          <Text fontSize="md" color="gray">
            mass - {person.mass}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default Person;
