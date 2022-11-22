import React, { useState, useEffect } from 'react';

import { Section } from './Section/Section';
import { SavingForm } from './SavingForm/SavingForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './FilterField/FilterField';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export function App() {
  return (
    <>
      <Section title="Phonebook">
        <SavingForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
