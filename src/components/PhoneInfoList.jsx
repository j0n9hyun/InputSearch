import React from 'react';
import PhoneInfo from './PhoneInfo';

const PhoneInfoList = ({ data }) => {
  if (!data) return <h1>데이터가 없습니다!</h1>;
  const list = data.map((info) => <PhoneInfo info={info} key={info.id} />);
  return <div>{list}</div>;
};

export default PhoneInfoList;
