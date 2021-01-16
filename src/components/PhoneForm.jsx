import React, { useState } from 'react';
import PhoneInfo from './PhoneInfo';

const PhoneForm = ({ onCreate }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const nameHandleChange = (e) => {
    setName(e.target.value);
  };
  const phoneHandleChange = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name, phone });
    setName('');
    setPhone('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name='name'
        onChange={nameHandleChange}
        value={name}
        placeholder='이름'
      />
      <input
        name='phone'
        onChange={phoneHandleChange}
        value={phone}
        placeholder='번호'
      />
      <button type='submit'>등록</button>
      {name}
      {phone}
      <PhoneInfo name={handleSubmit} />
    </form>
  );
};

export default PhoneForm;
