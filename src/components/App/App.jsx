import ContactList from 'components/ContactList/ContactList';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';

const App = () => {
  return (
    <div style={{ marginLeft: 20 }}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <br />
      <ContactList />
    </div>
  );
};

export default App;
