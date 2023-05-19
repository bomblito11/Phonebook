import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { NavLink } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.loginFormContainer}>
      <h1 className={css.loginHeader}>Welcome!</h1>
      <p className={css.loginInfo}>Sign in to your account</p>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <input type="email" name="email" className={css.input} />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" className={css.input} />
        </label>
        <button type="submit" className={css.logInButton}>
          Log In
        </button>
      </form>
      <div className={css.signUpContainer}>
        <p className={css.loginInfo}>Don`t have an account already?</p>
        <NavLink to="/register">Sign Up</NavLink>
      </div>
    </div>
  );
};
