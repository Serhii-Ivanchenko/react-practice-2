import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const handleInput = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        onChange={handleInput}
        value={text}
      />
    </form>
  );
};
