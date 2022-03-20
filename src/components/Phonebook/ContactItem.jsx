// import toast from "react-hot-toast";
import { deleteContact } from "redux/store/contacts/contacts-operations";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';


export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <li>
      <p>
        {name} : {number}
      </p>
      <Button variant="contained"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        delete
      </Button>
    </li>
  );
};
