// import toast from "react-hot-toast";
import { deleteContact } from "redux/store/contacts/contacts-operations";
import { useDispatch } from "react-redux";

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <li>
      <p>
        {name} : {number}
      </p>
      <button
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        delete
      </button>
    </li>
  );
};
