import {
  Text,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Flex,
  Heading,
  HStack,
  Button,
  Divider,
} from "@chakra-ui/react";
import { data } from "../../data/db";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";

export default function Dashboard() {
  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {data?.tasks?.map((item) => {
        return (
          <Card
            key={item?.id}
            borderTop="8px"
            borderColor="blue.400"
            bg="white"
          >
            <CardHeader>
              <Flex gap={5}>
                <Box w="50px" h="50px">
                  <Text>AV</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="sm">
                    {item?.title}
                  </Heading>
                  <Text>by {item?.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500">
              <Text>{item?.description}</Text>
            </CardBody>

            <Divider borderColor="gray.200" />

            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        );
      })}
    </SimpleGrid>
  );
}
