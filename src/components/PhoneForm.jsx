import React, { useState } from 'react';

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
    </form>
  );
};

export default PhoneForm;
