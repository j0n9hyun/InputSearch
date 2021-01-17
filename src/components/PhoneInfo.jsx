import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  padding: 8px;
  margin: 8px;
`;

const PhoneInfo = (props) => {
  const [edit, setEdit] = useState(false);
  // const [change, setChange] = useState('');
  const { name, phone } = props.info;
  console.log({ name, phone });

  const handleRemove = () => {
    const { info, onRemove } = props;
    onRemove(info.id);
  };

  const handleUpdate = () => {
    setEdit(!edit);
  };

  // const handleChange = (e) => {
  //   setChange(e.target.value);
  // };

  return (
    <Container>
      {edit ? (
        <>
          <div>
            <input value={name} />
          </div>
          <div>
            <input />
          </div>
        </>
      ) : (
        <>
          <div>
            <b>{name}</b>
          </div>
          <div>{phone}</div>
        </>
      )}
      <button onClick={handleRemove}>삭제</button>
      <button onClick={handleUpdate}>{edit ? '적용' : '수정'}</button>
    </Container>
  );
};

export default PhoneInfo;
