import { createAction } from '@reduxjs/toolkit';

export const getAllContacts = createAction('tellContacts/getAllContacts')
export const addContacts = createAction('tellContacts/addContacts')
export const deleteContacts = createAction('tellContacts/deleteContacts')
export const filterContacts= createAction('tellContacts/filterContacts')

