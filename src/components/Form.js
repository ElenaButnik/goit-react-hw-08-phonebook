import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addThunkData } from "../redux/contacts/operations";
import { getContact } from "../redux/contacts/selectors";
import s from "./contacts.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();
  
  
  const handleChangeInput = (e) => {
   if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addThunkData({ name, number,  id: uuidv4 () }));
      setName("");
      setNumber("");
     
    }
  };

  return (
      <>
        <form
          className={s.form}
          onSubmit={handleSubmit}
        >
          <label>Name</label>
          <input
          className={s.input}
            value={name}
            autoComplete="off"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChangeInput}
          />
          <label>Number</label>
          <input
            className={s.input}
          value={number}
            autoComplete="off"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChangeInput}
          />
          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </form>
      </>
    );

}
