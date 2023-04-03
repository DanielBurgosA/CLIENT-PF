import { Box, Heading } from "@chakra-ui/react";

export default function ExecutePayment() {
  return (
    <Box
      bg="#ff6b6b"
      p={6}
      borderRadius="md"
      boxShadow="md"
      textAlign="center"
    >
      <Heading as="h1" size="lg" color="white">
      Payment canceled
      </Heading>
    </Box>
  );
}
