import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactsSuccess,
  fetchContactsSuccess,
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

export const contacts = combineReducers({
  items,
});
