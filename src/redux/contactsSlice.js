import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = {
  contacts: [
    { id: 123, name: 'Kolya', phone: 123 },
    { id: 23, name: 'Kolya', phone: 123 },
  ],
};

// const contactsInitialState = [
//   { id: 123, name: 'Kolya', phone: 123 },
//   { id: 23, name: 'Kolya', phone: 123 },
// ];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, phone) {
        return {
          payload: {
            name,
            phone,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        task => task.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
