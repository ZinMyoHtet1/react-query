import { HStack, Button, Text } from "@chakra-ui/react";

function Pagination(props) {
  const { page, setPage, data, isPlaceholderData } = props.props;
  return (
    <HStack spacing={3} mb="10px">
      <Button
        bg="black"
        border="2px solid white"
        color="white"
        onClick={() => setPage((old) => Math.max(old - 1, 1))}
        isDisabled={page === 1}
      >
        Previous
      </Button>
      <Text color="yellow">{page}</Text>
      <Button
        bg="black"
        border="2px solid white"
        color="white"
        onClick={() => {
          if (!isPlaceholderData && data?.next) setPage((old) => old + 1);
        }}
        isDisabled={isPlaceholderData || !data?.next}
      >
        Next
      </Button>
    </HStack>
  );
}

export default Pagination;
