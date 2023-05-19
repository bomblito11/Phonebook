import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operation';
import { Filter } from 'components/Filter/Filter';
import css from './ContactsPage.module.css';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.phonebookContainer}>
      <h1
        style={{
          fontSize: '34px',
          textAlign: 'center',
          fontFamily: 'Montserrat',
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <div>{isLoading && 'Loading...'}</div>

      <h2
        style={{
          fontSize: '24px',
          textAlign: 'center',
          fontFamily: 'Montserrat',
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
};
