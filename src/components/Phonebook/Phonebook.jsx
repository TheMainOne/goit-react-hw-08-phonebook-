// import { useEffect } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/store/contacts/contacts-operations";

export const Phonebook = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const contacts = useSelector(state => state.contacts.items);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);


    return (
        <ul>
            {contacts && isLoggedIn && contacts.map(contact => <li key={contact.id}><p>name: {contact.name} - number: {contact.number}</p></li>)}
        </ul>
    )
}