import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="blue" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "blue.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "blue.400" }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@nintendo.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              lorem ipsum lorem ipsum
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              lorem ipsum lorem ipsum
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="blue.400" />
              lorem
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="blue.400" />
              lorem
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red" />
              lorem
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="blue.400" />
              lorem
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
