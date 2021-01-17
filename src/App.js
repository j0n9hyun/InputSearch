import React, { useState } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

const App = () => {
  const [inform, setInform] = useState([]);
  let [id, setId] = useState(0);
  const handleCreate = (data) => {
    setInform(inform.concat({ ...data, id: id++ }));
    setId(id);
    // console.log(data);
  };
  const handleRemove = (id) => {
    console.log(`${id}가(이) 삭제되었습니다`);
    setInform(inform.filter((info) => info.id !== id));
  };

  const handleUpdate = (id, data) => {
    // console.log(id, data);
    setInform(
      inform.map((info) => {
        if (info.id === id) {
          return {
            id,
            ...data,
          };
        }
        return info;
      })
    );
  };
  return (
    <div>
      <PhoneForm onCreate={handleCreate} />
      <PhoneInfoList
        data={inform}
        onRemove={handleRemove}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default App;
