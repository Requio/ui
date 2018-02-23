import React from 'react';

const Proc = ({ proc }) => (
  <div>
    <div>{proc.title}</div>
    <div>Tasks: {proc.tasks.length}</div>
  </div>
);

export default Proc;
