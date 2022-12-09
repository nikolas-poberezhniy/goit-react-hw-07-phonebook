import { AppWrapp } from './App.styled';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <AppWrapp>
      <h1>Phonebook</h1>
      <Phonebook />
      <h3>Contacts</h3>

      <Filter />
      <Contacts />
    </AppWrapp>
  );
}
