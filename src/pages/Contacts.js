import Form from "../components/Form";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import s from "./styles.module.css";

export default function Contacts() {
  return (
    <>
      <h1 className={s.title}>Your phonebook</h1>
      <Form />
      <Filter />
      <ContactList />
    </>
  );
}
