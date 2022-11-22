import { Section } from './Section/Section';
import { SavingForm } from './SavingForm/SavingForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './FilterField/FilterField';

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
