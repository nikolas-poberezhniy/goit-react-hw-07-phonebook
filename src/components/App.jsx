import React, { useState, useEffect } from 'react';
import { Section } from './Section/Section';
import { nanoid } from 'nanoid';
import { SavingForm } from './SavingForm/SavingForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './FilterField/FilterField';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterValue = e => {
    setFilter(e.target.value);
  };

  const handelSubmit = e => {
    const contact = {
      id: nanoid(),
      name: e.name,
      phone: e.number,
    };

    if (
      contacts.map(e => e.name.toLowerCase()).includes(e.name.toLowerCase())
    ) {
      alert(`${e.name} already exist`);
      return;
    }
    setContacts(prevState => [contact, ...prevState]);
  };

  const deleteLine = e => {
    setContacts(prev => {
      return prev.filter(contactsItem => contactsItem.id !== e.target.name);
    });
  };

  const filterNormilized = filter.trim();
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterNormilized)
  );

  return (
    <>
      <Section title="Phonebook">
        <SavingForm handelSubmit={handelSubmit} />
      </Section>

      <Section title="Contacts">
        <Filter filter={filterValue} />
        <ContactList
          visibleContacts={visibleContacts}
          deleteLine={deleteLine}
        />
      </Section>
    </>
  );
}
