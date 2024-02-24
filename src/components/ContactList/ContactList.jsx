import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilter,
} from "../../redux/contacts/contactsSelectors";
import {
  deleteContact,
  fetchContacts,
  updateContact,
} from "../../redux/contacts/operations";
import {
  Button,
  Table,
  TableContainer,
  Td,
  Th,
  Thead,
  Tr,
  Tbody,
  Icon,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const filteredContacts = contacts
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th textAlign={"center"}>Name</Th>
            <Th textAlign={"center"}>Phone</Th>
            <Th textAlign={"center"}>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredContacts.map((contact) => (
            <Tr key={contact.id}>
              <Td textAlign={"center"}>{contact.name}</Td>
              <Td textAlign={"center"}>{contact.number}</Td>
              <Td textAlign={"center"}>
                <Button
                  _hover={{ bg: "rgba(235, 89, 89, 0.1)" }}
                  bg={"transparent"}
                  color={"rgba(235, 89, 89)"}
                  onClick={() => dispatch(deleteContact(contact.id))}
                  gap={"8px"}
                >
                  <DeleteIcon />
                  Delete
                </Button>
                <Button
                  _hover={{ bg: "rgba(80, 113, 202, 0.1)" }}
                  bg={"transparent"}
                  color={"#5071ca"}
                  onClick={() =>
                    dispatch(
                      updateContact({
                        contactId: contact.id,
                        name: "zed",
                        number: "123456",
                      })
                    )
                  }
                  gap={"8px"}
                >
                  <EditIcon />
                  Edit
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
};