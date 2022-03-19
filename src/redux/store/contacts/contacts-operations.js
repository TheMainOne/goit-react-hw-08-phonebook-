import axios from "axios";
import {
  //   addContactsError,
  //   addContactsSuccess,
  //   addContactsRequest,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  //   deleteContactsRequest,
  //   deleteContactsError,
  //   deleteContactsSuccess,
  //   changeFilter,
} from "./contacts-actions";

// GET @ /tasks
export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

// // POST @ /tasks
// const addTodo = (description) => (dispatch) => {
//   const todo = {
//     description,
//     completed: false,
//   };

//   dispatch(addTodoRequest());

//   axios
//     .post("/tasks", todo)
//     .then(({ data }) => dispatch(addTodoSuccess(data)))
//     .catch((error) => dispatch(addTodoError(error.message)));
// };

// // DELETE @ /tasks/:id
// const deleteTodo = (todoId) => (dispatch) => {
//   dispatch(deleteTodoRequest());

//   axios
//     .delete(`/tasks/${todoId}`)
//     .then(() => dispatch(deleteTodoSuccess(todoId)))
//     .catch((error) => dispatch(deleteTodoError(error.message)));
// };

// // PATCH @ /tasks/:id
// const toggleCompleted =
//   ({ id, completed }) =>
//   (dispatch) => {
//     const update = { completed };

//     dispatch(toggleCompletedRequest());

//     axios
//       .patch(`/tasks/${id}`, update)
//       .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
//       .catch((error) => dispatch(toggleCompletedError(error.message)));
//   };

// const todosOperations = {
//   fetchContacts,
// };
// export default todosOperations;
