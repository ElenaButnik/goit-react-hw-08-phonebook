import React, { useEffect } from "react";
import style from "./contacts.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getThunkData, deleteThunkData } from "../redux/contacts/operations";
import { getFilteredContacts } from "../redux/contacts/selectors";

export default function ContactList() {
  const dispatch = useDispatch();
  const filterContacts = useSelector(getFilteredContacts);

  useEffect(() => {
    dispatch(getThunkData());
  }, [dispatch]);

  return (
    <ul className={style.list}>
      {filterContacts.map(({ id, name, number }) => (
        <li className={style.listItem} key={id}>
          {name}: {number}
          <button
            type="button"
            className={style.btnDelete}
            id={id}
            onClick={() => {
              dispatch(deleteThunkData(id));
              dispatch(getThunkData());
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
