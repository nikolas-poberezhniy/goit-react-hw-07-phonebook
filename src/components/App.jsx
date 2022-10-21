import React, { Component } from 'react';
import { Section } from './Section/Section';
import { nanoid } from 'nanoid';
import { SavingForm } from './SavingForm/SavingForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './FilterField/FilterField';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'John', phone: '123456789' },
      { id: nanoid(), name: 'Marry', phone: '234567890' },
      { id: nanoid(), name: 'Nick', phone: '345678901' },
      { id: nanoid(), name: 'Dick', phone: '456789012' },
    ],
    filter: '',
  };

  filter = e => {
    this.setState({ filter: e.target.value });
  };

  handelSubmit = e => {
    const todo = {
      id: nanoid(),
      name: e.name,
      phone: e.number,
    };

    if (
      this.state.contacts
        .map(e => e.name.toLowerCase())
        .includes(e.name.toLowerCase())
    ) {
      alert(`${e.name} already exist`);
      return;
    }
    this.setState(prevState => ({
      contacts: [todo, ...prevState.contacts],
    }));
  };

  delete = e => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(
        contactsItem => contactsItem.id !== e.target.name
      ),
    }));
  };

  render() {
    const filterNormilized = this.state.filter.trim();
    const visibleContacts = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterNormilized)
    );

    return (
      <>
        <Section title="Phonebook">
          <SavingForm handelSubmit={this.handelSubmit} />
        </Section>

        <Section title="Contacts">
          <Filter filter={this.filter} />
          <ContactList
            visibleContacts={visibleContacts}
            deleteLine={this.delete}
          />
        </Section>
      </>
    );
  }
}
