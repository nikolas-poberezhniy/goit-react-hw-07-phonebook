import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'john a', phone: '123' },
      { id: nanoid(), name: 'marry', phone: '123' },
      { id: nanoid(), name: 'nick', phone: '123' },
      { id: nanoid(), name: 'lick', phone: '123' },
    ],
    filter: '',
  };

  filter = e => {
    this.setState({ filter: e.target.value });
  };

  handelSubmit = e => {
    e.preventDefault();

    const todo = {
      id: nanoid(),
      name: e.target.nameField.value,
      phone: e.target.phoneField.value,
    };

    if (
      this.state.contacts.map(e => e.name).includes(e.target.nameField.value)
    ) {
      alert('пшел');
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
    const visibleToDos = this.state.contacts.filter(({ name }) =>
      name.includes(this.state.filter)
    );

    return (
      <>
        <form onSubmit={this.handelSubmit}>
          <input type="text" name="nameField" />
          <br></br>
          <input type="text" name="phoneField" />
          <button type="submit">submit</button>
        </form>
        <h3>поиск</h3>
        <input type="text" onChange={this.filter} />
        <div>
          {visibleToDos.map(e => {
            return (
              <p key={e.id}>
                {e.name}:{e.phone}
                <button name={e.id} onClick={this.delete}>
                  {' '}
                  удалить
                </button>
              </p>
            );
          })}
        </div>
      </>
    );
  }
}
