import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const normalizedContacts = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedContacts)
  );

  return visibleContacts.map(({ name, id, number }) => {
    return <ContactItem key={id} name={name} id={id} number={number} />;
  });
};

export default ContactList;
