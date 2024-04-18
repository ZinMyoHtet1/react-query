import { useQuery, keepPreviousData } from "@tanstack/react-query";
import React, { useState } from "react";
import Planet from "../components/Planet";
import { Heading, Box } from "@chakra-ui/react";
import Pagination from "../components/Pagination";

const fetchPlanets = async (page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

function Planets() {
  const [page, setPage] = useState(1);
  const { data, status, isPlaceholderData } = useQuery({
    queryKey: ["planets", page],
    queryFn: () => fetchPlanets(page),
    placeholderData: keepPreviousData,
  });
  return (
    <Box w="100%" px="10px" mt="10px">
      <Pagination props={{ page, setPage, data, isPlaceholderData }} />
      <Heading size="lg" color="yellow">
        Planets
      </Heading>
      {status === "pending" ? <div>loading...</div> : null}
      {status === "success" && data.results && <Planet planet={data.results} />}
      {status === "error" ? <div>error</div> : null}
    </Box>
  );
}

export default Planets;
