import { PhoneIcon } from "@chakra-ui/icons";
import ContactForm from "../../components/ContactForm/ContactForm";
import Contacts from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import { Heading, Box, Flex } from "@chakra-ui/react";

import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Phonenook</title>
      </Helmet>

      <Box w={["100%", "600px"]} m={"0 auto"} p={"16px"} pt={"128px"}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={"24px"}
          mb={"48px"}
        >
          <PhoneIcon fontSize={["32px", "64px"]} />
          <Heading fontSize={["32px", "64px"]}>PhoneBook</Heading>
        </Flex>

        <Box mb={"32px"}>
          <ContactForm />
        </Box>
        <Box mb={"16px"}>
          <Filter />
        </Box>
        <Box p={"16px"} borderRadius={"20px"}>
          <Contacts />
        </Box>
      </Box>
    </>
  );
};

export default Home;