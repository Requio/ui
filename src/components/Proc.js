import React from 'react';

const Proc = ({ proc }) => {
  return (
    <div>
      <div>PROC page</div>
      <div>Tasks: {proc.tasks.length}</div>
    </div>
  );
};

export default Proc;
