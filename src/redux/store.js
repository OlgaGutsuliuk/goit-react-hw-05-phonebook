import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { tellContactsReducer } from "./tellContactsReducer";
import { filterContactsReducer } from "./tellContactsReducer";

const rootReducer = combineReducers({
  telContacts: tellContactsReducer,
  filter: filterContactsReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
