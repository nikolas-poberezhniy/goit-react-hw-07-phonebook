import React, { Component } from 'react';
// import { Formik, Form, Field } from 'formik';

export class SavingForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.currentTarget.value });
  };

  stateReset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handelSubmit(this.state);
    this.stateReset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="nameField">
          Name
          <input
            id="nameField"
            onChange={this.onInputChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label htmlFor="numberField">
          Number
          <input
            id="numberField"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onInputChange}
            value={this.state.number}
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
