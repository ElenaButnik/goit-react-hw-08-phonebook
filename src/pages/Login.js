import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./styles.module.css";
import { logIn } from "../redux/auth/auth-operations";

export default function LogInPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            title="Invalid email address"
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            pattern=".{8,}"
            title="Must contain at least 7 or more characters"
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={s.btn}>
          Login
        </button>
      </form>
    </div>
  );
}
