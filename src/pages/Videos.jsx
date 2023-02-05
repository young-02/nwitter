import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Videos() {
  const [text, setText] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    navigate(`/videos/${text}`);
  };

  return (
    <>
      <div>Vidoes</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="vidoe id "
          value={text}
          onChange={handleChange}
        />
      </form>
    </>
  );
}
