import React from 'react';

const Proc = ({ proc }) => {
  return (
    <div>
      <div>{proc.title}</div>
      <div>Tasks: {proc.tasks.length}</div>
      <input value={proc.title} onChange={proc.change(proc.TITLE)} />
      {proc.tasks.map(task => (
        <div key={task.id}>Action: {task.action.title}</div>
      ))}
    </div>
  );
};

export default Proc;
