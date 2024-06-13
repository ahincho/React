import { useState } from "react";

export const AddItem = ({ onAddItem }) => {
  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setValue('');
    onAddItem(value);
  };
  return (
    <form onSubmit = {onSubmit}>
      <input type = 'text' placeholder = 'Write item ...' value = {value} onChange = {onChange} />
    </form>
  );
};