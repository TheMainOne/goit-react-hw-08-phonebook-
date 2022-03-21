import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "redux/store/Filter/FilterSlice";
import { fetchContacts } from "redux/store/contacts/contacts-operations";
import { addContact } from "redux/store/contacts/contacts-operations";
import { ContactListItem } from "./ContactItem";
import Filter from "components/Filter/Filter";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

export const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  const onSearchInput = (event) => {
    const inputValue = event.target.value;

    dispatch(changeFilter(inputValue));
  };

  const filteredContacts = () => {
    if (contacts) {
      const contactsWithFilterQuery = contacts.filter(
          (contact) => 
              contact.name.toLowerCase().includes(filter.toLowerCase()) ||
                  contact.number.includes(filter.toLowerCase())
          );
      return contactsWithFilterQuery;
    }
  };
    
    const contactsWithFilterQuery = filteredContacts();

  return (
    <>
      {isLoggedIn && (
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={(event) => {
            event.preventDefault();
            const name = event.target.elements.text.value.trim();
            const number = event.target.elements.number.value.trim();
            const filterName = contacts.filter(
              (contact) => contact.name === name
            );
            const contact = {
              name,
              number,
            };

            if (filterName.length > 0) {
              toast.error(`${name} is already in phonebook`);
              return;
            }

            if (name !== "" && number !== "") {
              dispatch(addContact(contact));
              toast.success(`${name} has been successfully added to phonebook`);
            }
          }}
        >
          <TextField type="text" name="text" label="Name" variant="outlined" />
          <TextField
            type="phone"
            name="number"
            label="Number"
            variant="outlined"
          />
          <Button type="submit" variant="contained" style={{ height: 55 }}>
            Add contact
          </Button>
        </Box>
      )}
      <Filter onSearchInput={onSearchInput} />

          <List sx={{ width: "100%", maxWidth: 360 }} aria-label="contacts">
               {!contacts ||
        (contacts.length === 0 && (
          <p>No contacts added yet</p>
                  ))}
        {contacts &&
          isLoggedIn && contactsWithFilterQuery.length > 0 ? contactsWithFilterQuery.map((contact) => (
            <ContactListItem key={contact.id} {...contact} />
          )) : <p>No contact found</p>}
      </List>
    </>
  );
};
