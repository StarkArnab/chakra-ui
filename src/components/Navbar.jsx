import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex as="nav" p="10px" alignItems="center" mb="40px">
      <Heading as="h1">Tasks</Heading>
      <Spacer />
      <HStack gap="10px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>mario@nintendo.com</Text>
        <Button colorScheme="blue">Logout</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
