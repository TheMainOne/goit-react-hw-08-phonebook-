import { useEffect } from "react";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/store/contacts/contacts-operations";
import { addContact } from "redux/store/contacts/contacts-operations";
import { ContactListItem } from "./ContactItem";
import Button from '@mui/material/Button';


export const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const contacts = useSelector((state) => state.contacts.items);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
      <>
          <ul>
                 {contacts &&
                  isLoggedIn && contacts.map(contact => <ContactListItem key={contact.id} {...contact} />)}     
                                   </ul>
       {isLoggedIn && <form onSubmit={(event) => {
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
              }
          }}>
              <p>Please add a new contact here</p>
        <label>
          Name
          <input type="text" name="text" />
        </label>
        <label>
          Number
          <input type="phone" name="number" />
              </label>
              <Button variant="contained" type="submit">add contact</Button>
      </form>}   

    </>
  );
};