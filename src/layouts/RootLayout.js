import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { Container } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const defaultQueryOptions = {
  staleTime: 60000,
  cacheTime: 18000,
};

queryClient.setDefaultOptions(defaultQueryOptions);

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container centerContent maxW="4xl" minH="100vh" pt="20px">
        <NavBar />
        <Outlet />
      </Container>
    </QueryClientProvider>
  );
}

export default RootLayout;
