import { useQuery } from "@tanstack/react-query";
import React from "react";
import Planet from "../components/Planet";
import { Heading, Box } from "@chakra-ui/react";

const fetchPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/planets/");
  return res.json();
};

function Planets() {
  const { data, status } = useQuery({
    queryKey: ["planets"],
    queryFn: fetchPlanets,
  });
  console.log(data?.results);
  return (
    <Box w="100%" px="10px" mt="10px">
      <Heading size="lg" color="white">
        Planets
      </Heading>
      {status === "pending" ? <div>loading...</div> : null}
      {status === "success" && data.results && <Planet planet={data.results} />}
      {status === "error" ? <div>error</div> : null}
    </Box>
  );
}

export default Planets;
