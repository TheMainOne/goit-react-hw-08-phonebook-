import toast from "react-hot-toast";
import { deleteContact } from "redux/store/contacts/contacts-operations";
import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  return (
      <ListItem disablePadding>
        <ListItemButton>
        <ListItemText primary={`${name}: ${number}`} />
              <Tooltip title="Delete" onClick={() => {
        onDeleteContact(id);
        toast.success(`${name} has succesfully deleted`);
      }}>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
        </ListItemButton>
      </ListItem>
  );
};


