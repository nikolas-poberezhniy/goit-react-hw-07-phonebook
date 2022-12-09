import React from 'react';
import { PhonebookForm, PhonebookWrapp } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from 'redux/operations';

export default function Phonebook() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    const existingArray = contacts.filter(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (existingArray.length === 0) {
      dispatch(addContact({ name, phone }));
    } else {
      alert(`${name} is already in contacts.`);
    }

    form.reset();
  };

  return (
    <PhonebookWrapp>
      <PhonebookForm onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <div>
          <input type="submit" value="Add contact" />
        </div>
      </PhonebookForm>
    </PhonebookWrapp>
  );
}
