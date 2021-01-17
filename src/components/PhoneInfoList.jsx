import React from 'react';
import PhoneInfo from './PhoneInfo';

const PhoneInfoList = ({ data, onRemove, onUpdate }) => {
  if (!data) return <h1>데이터가 없습니다!</h1>;
  const list = data.map((info) => (
    <PhoneInfo
      onRemove={onRemove}
      onUpdate={onUpdate}
      info={info}
      key={info.id}
    />
  ));
  return <div>{list}</div>;
};

export default PhoneInfoList;
