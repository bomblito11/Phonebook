import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ handleFilter }) => {
  return (
    <>
      <label className={css.contactLabel}>
        Find contacts by name
        <input
          style={{ width: 150 }}
          onChange={handleFilter}
          name="filter"
          type="text"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        ></input>
      </label>
    </>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
