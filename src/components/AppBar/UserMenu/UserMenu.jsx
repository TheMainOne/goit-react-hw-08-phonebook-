import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/store/auth/auth-operations';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.auth.user.name)

  return (
      <div>
    {name && <img src={'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_7_2.png'} alt="avatar" width="32" />}
      <span>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => {
        dispatch(operations.logOut())
      }}>
        Выйти
      </button>
    </div>
  );
}