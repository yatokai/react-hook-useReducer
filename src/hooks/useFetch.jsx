import { useState } from 'react';

const useFetch = (initialData) => {
  const [value, setValue] = useState(initialData);

  const setBBB = () => setValue('BBB');
  const setCCC = () => setValue('CCC');
  const setDDD = () => setValue('DDD');
  return [value, setBBB, setCCC, setDDD];
};

export default useFetch;
