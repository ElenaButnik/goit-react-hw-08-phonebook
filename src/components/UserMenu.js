import { useDispatch, useSelector } from "react-redux";
import { getUsername } from "../redux/auth/auth-selectors";
import { logOut } from "../redux/auth/auth-operations";
import s from "./contacts.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUsername);

  return (
    <div className={s.container}>
      <span className={s.name}>Hello, {userName}!</span>
      <button
        type="button"
        className={s.btn}
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </button>
    </div>
  );
}
