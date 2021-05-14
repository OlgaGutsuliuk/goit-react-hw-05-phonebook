import { createReducer } from "@reduxjs/toolkit";
import { getAllContacts, addContacts, deleteContacts, filterContacts } from "./tellContactsAction";

export const tellContactsReducer = createReducer([], {
  [getAllContacts]: (_, { payload }) => payload,
  [addContacts]: (state, { payload }) => [...state, payload],
  [deleteContacts]: (state, { payload }) => [...state.filter(contact => contact.id !== payload)]
});

export const filterContactsReducer = createReducer("", {
  [filterContacts]: (_, { payload }) => payload
});
