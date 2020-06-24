import React from 'react';
import useInputs from './../hooks/useInputs';
import useFetch from './../hooks/useFetch';

const CustomHook = () => {
  const [form, updateForm, resetForm] = useInputs({
    name: '',
    nickname: '',
  });
  const [todo, setBBB, setCCC, setDDD] = useFetch('AAAA');
  const { name, nickname } = form;
  return (
    <div>
      <h1>Name: {name}</h1>
      <input type="text" name="name" onChange={updateForm} value={name} />

      <h1>Nickname: {nickname}</h1>
      <input
        type="text"
        name="nickname"
        onChange={updateForm}
        value={nickname}
      />
      <br />
      <button onClick={resetForm}>Reset Form</button>
      <hr />
      <h1>{todo}</h1>
      <button onClick={setBBB}>Set BBB</button>
      <button onClick={setCCC}>Set CCC</button>
      <button onClick={setDDD}>Set DDD</button>
    </div>
  );
};

export default CustomHook;
