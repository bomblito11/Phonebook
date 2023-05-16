import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filter, handleDelete }) => {
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

ContactList.propTypes = {
  handleDelete: PropTypes.func.isRequired,
};
