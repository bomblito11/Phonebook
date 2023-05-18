import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
// import PropTypes from 'prop-types';
import { addContact } from 'redux/operation';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ name, number }));
      form.reset();
    }
  };

  return (
    <div className={css.formContainer}>
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <label className={css.formLabel}>
          Name
          <input
            type="text"
            name="name"
            className={css.contactName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.formLabel}>
          Number
          <input
            type="tel"
            name="number"
            className={css.contactName}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

// ContactForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

export default ContactForm;
