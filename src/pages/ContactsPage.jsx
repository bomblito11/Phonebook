import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operation';
import { Filter } from 'components/Filter/Filter';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <div>{isLoading && 'Loading...'}</div>

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
