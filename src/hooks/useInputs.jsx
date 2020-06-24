import { useState } from 'react';

export default function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);
  const updateForm = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(newForm);
  };

  const resetForm = () => {
    setForm(
      Object.keys(form).reduce((a, b) => {
        return { ...a, [b]: '' };
      }, {}),
    );
  };
  return [form, updateForm, resetForm];
}
