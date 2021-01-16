import React, { useState } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

const App = () => {
  const [inform, setInform] = useState([]);
  let [id, setId] = useState(0);
  const handleCreate = (data) => {
    setInform(inform.concat({ ...data, id: id++ }));
    setId(id);
    console.log(data);
  };
  return (
    <div>
      <PhoneForm onCreate={handleCreate} />
      <PhoneInfoList data={inform} />
    </div>
  );
};

export default App;
