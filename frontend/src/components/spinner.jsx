
import { Flex, Spinner, Text } from "@chakra-ui/react";

function LoadingScreen() {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
      bg="gray.100"
    >
      <Spinner size="xl" thickness="2px" speed="0.65s" color="teal.500" />
      <Text mt={4} fontSize="lg" color="gray.600">
        Loading...
      </Text>
    </Flex>
  );
}

export default LoadingScreen;
