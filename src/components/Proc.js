import React from 'react';

const Proc = ({ proc }) => (
  <div>
    <div>{proc.title}</div>
    <div>Tasks: {proc.tasks.length}</div>
    <input value={proc.title} onChange={proc.change(proc.TITLE)} />
    {proc.tasks.map(task => (
      <div key={task.id}>Action: {task.action.title}</div>
    ))}
    {!proc.isSaved && <button onClick={proc.save}>Save</button>}
    {proc.isSaving && 'Saving...'}
  </div>
);

export default Proc;
