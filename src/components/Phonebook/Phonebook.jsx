import { useEffect } from "react";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/store/contacts/contacts-operations";
import { addContact } from "redux/store/contacts/contacts-operations";
import { ContactListItem } from "./ContactItem";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';



export const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const contacts = useSelector((state) => state.contacts.items);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
      <>
          {isLoggedIn && <Box
                  component="form"
                  sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                  onSubmit={(event) => {
                      event.preventDefault()
                      const name = event.target.elements.text.value.trim();
                      const number = event.target.elements.number.value.trim();
                      const filterName = contacts.filter(contact => contact.name === name);
                      const contact = {
                          name,
                          number,
                      }

                      if (filterName.length > 0) {
                          toast.error(`${name} is already in phonebook`);
                          return;
                      }

                      if (name !== '' && number !== '') {
                          dispatch(addContact(contact));
                          toast.success(`${name} has been successfully added to phonebook`);

                      }
                  }}
    >
        <TextField type='text' name='text' label="Name" variant="outlined"/>
      <TextField type='phone' name='number' label="Number" variant="outlined"/>
              <Button type="submit" variant="contained" style={{ height: 55 }}>Add contact</Button>
          </Box>}   
                  <TextField id="standard-basic" label="Filter" variant="standard" />
          <List
      sx={{ width: '100%', maxWidth: 360 }}
      aria-label="contacts"
          >
           {contacts &&
                  isLoggedIn && contacts.map(contact => <ContactListItem key={contact.id} {...contact} />)}   
    </List>     
         
    </>
  );
};