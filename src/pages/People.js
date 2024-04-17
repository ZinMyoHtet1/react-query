import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Pagination from "../components/Pagination";
import React, { useState } from "react";
import Person from "../components/Person";
import { Heading, Box } from "@chakra-ui/react";

const fetchPeople = async (page) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  return res.json();
};

function People() {
  const [page, setPage] = useState(1);
  const { data, status, isPlaceholderData } = useQuery({
    queryKey: ["people", page],
    queryFn: () => fetchPeople(page),
    placeholderData: keepPreviousData,
  });
  console.log(data?.results);
  return (
    <Box w="100%" px="10px" mt="10px">
      <Pagination props={{ page, setPage, data, isPlaceholderData }} />
      <Heading size="lg" color="yellow">
        People
      </Heading>
      {status === "pending" ? <div>loading...</div> : null}
      {status === "success" && data.results && <Person people={data.results} />}
      {status === "error" ? <div>error</div> : null}
    </Box>
  );
}

export default People;
