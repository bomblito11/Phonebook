import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className={css.homeContainer}>
      <h1 className={css.homeHeader}>Welcome to the Phonebook App</h1>
      <p className={css.homeInfo}>Store and manage your contacts with ease.</p>
      <NavLink to="/contacts" className={css.homeLink}>
        Get Started
      </NavLink>
    </div>
  );
};
