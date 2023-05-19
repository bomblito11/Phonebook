import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { NavLink } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.registerFormContainer}>
      <h1 className={css.registerHeader}>Welcome!</h1>
      <p className={css.registerInfo}>Sign in to your account</p>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input type="text" name="name" className={css.input} />
        </label>
        <label className={css.label}>
          Email
          <input type="email" name="email" className={css.input} />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" className={css.input} />
        </label>
        <button type="submit" className={css.registerButton}>
          Register
        </button>
      </form>
      <div className={css.logInContainer}>
        <p className={css.registerInfo}>Already have an account?</p>
        <NavLink to="/login">Log In</NavLink>
      </div>
    </div>
  );
};
