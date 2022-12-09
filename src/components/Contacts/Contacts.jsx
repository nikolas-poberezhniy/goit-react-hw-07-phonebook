import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getNameFilter,
  getIsLoading,
  getError,
} from '../../redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactBlock, ListOfContacts } from './Contacts.styled';
import { deleteContact } from 'redux/operations';

export const getVisibleContacts = (contacts, filteredName) => {
  if (!filteredName) {
    return contacts;
  }
  const normalizedFilter = filteredName?.toLowerCase();
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  return filteredContacts;
};

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts) ?? [];
  const filteredName = useSelector(getNameFilter);
  const visibleContacts = getVisibleContacts(contacts, filteredName);

  console.log('contacts', visibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = item => dispatch(deleteContact(item.id));

  return (
    <ContactBlock>
      <div style={{ height: '10px' }}>
        {isLoading && !error && <b>Request in progress...</b>}
      </div>
      <ListOfContacts>
        {contacts.length > 0 &&
          visibleContacts.map(item => (
            <li key={item.id}>
              {item.name}: {item.phone}
              <button type="button" onClick={() => handleDelete(item)}>
                Delete
              </button>
            </li>
          ))}
      </ListOfContacts>
    </ContactBlock>
  );
}
