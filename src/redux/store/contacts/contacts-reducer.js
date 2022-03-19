import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  //   addContactsError,
  addContactsSuccess,
  //   addContactsRequest,
  //   fetchContactsRequest,
  fetchContactsSuccess,
  //   fetchContactsError,
  //   deleteContactsRequest,
  //   deleteContactsError,
  deleteContactsSuccess,
} from "./contacts-actions";

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  //   [toggleCompletedSuccess]: (state, { payload }) =>
  //     state.map((todo) => (todo.id === payload.id ? payload : todo)),
});

// const loading = createReducer(false, {
//   [fetchTodosRequest]: () => true,
//   [fetchTodosSuccess]: () => false,
//   [fetchTodosError]: () => false,
//   [addTodoRequest]: () => true,
//   [addTodoSuccess]: () => false,
//   [addTodoError]: () => false,
//   [deleteTodoRequest]: () => true,
//   [deleteTodoSuccess]: () => false,
//   [deleteTodoError]: () => false,
//   [toggleCompletedRequest]: () => true,
//   [toggleCompletedSuccess]: () => false,
//   [toggleCompletedError]: () => false,
// });

// const filter = createReducer("", {
//   [changeFilter]: (_, { payload }) => payload,
// });

// const error = createReducer(null, {});

export const contacts = combineReducers({
  items,
});
