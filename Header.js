import React, { useState } from 'react';

const Header = ({ onAddTask }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAddTask(text);
      setText('');
    }
  };

  return (
    <header>
      <h1>Task Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>
    </header>
  );
};

export default Header;
