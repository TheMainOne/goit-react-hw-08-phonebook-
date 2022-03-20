// import toast from "react-hot-toast";
import { deleteContact } from "redux/store/contacts/contacts-operations";
import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { ListItem } from "./ContactItem.styled";


export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <ListItem>
      <p>
        {name} : {number}
      </p>
       <Tooltip title="Delete" onClick={() => onDeleteContact(id)}>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
    </ListItem>
  );
};
