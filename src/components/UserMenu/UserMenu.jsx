import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button
        type="button"
        className={`${css.btn} ${css.btnDefault} ${css.btnSm}`}
        onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </div>
  );
};
