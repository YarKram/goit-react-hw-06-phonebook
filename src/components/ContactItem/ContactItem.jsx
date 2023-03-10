import PropTypes from 'prop-types';
import { Item, DeleteButton } from './ContactItem.styled';

import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

const ContactItem = ({ name, id, number }) => {
  const dispatch = useDispatch();
  return (
    <Item key={id}>
      {name}: {number}
      <DeleteButton
        key={nanoid()}
        onClick={() => {
          dispatch(removeContact(id));
        }}
      >
        Delete
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
