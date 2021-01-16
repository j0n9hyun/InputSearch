import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  padding: 8px;
  margin: 8px;
`;

const PhoneInfo = ({ name }) => {
  console.log({ name });
  return (
    <div>
      <Container>
        <li>{name}</li>
        {/* <li>{phone}</li> {id} 하이 */}
      </Container>
    </div>
  );
};

export default PhoneInfo;
