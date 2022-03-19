import axios from "axios";
import {
  addContactsError,
  addContactsSuccess,
  addContactsRequest,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactsRequest,
  deleteContactsError,
  deleteContactsSuccess,
  //   changeFilter,
} from "./contacts-actions";

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

export const addContact = (description) => (dispatch) => {
  dispatch(addContactsRequest());

  axios
    .post("/contacts", description)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch((error) => dispatch(addContactsError(error.message)));
};

export const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactsSuccess(contactId)))
    .catch((error) => dispatch(deleteContactsError(error.message)));
};
