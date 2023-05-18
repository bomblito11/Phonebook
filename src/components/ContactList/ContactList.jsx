import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operation';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactsContainer}>
      <ul className={css.contactList}>
        {contacts
          .filter(el => {
            return el.name.toLowerCase().includes(filter.toLowerCase());
          })
          .map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button
                type="button"
                className={css.deleteButton}
                onClick={() => handleDelete(contact.id)}
                style={{ marginLeft: 10 }}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
