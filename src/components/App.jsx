import React, { Component } from 'react';
import { Section } from './Section/Section';
import { nanoid } from 'nanoid';
import { SavingForm } from './SavingForm/SavingForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './FilterField/FilterField';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    if (localStorage.contacts) {
      this.setState({ contacts: JSON.parse(localStorage.contacts) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
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
