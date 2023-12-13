import React from 'react';

const Tab = ({ label, onClick, active }) => {
  return (
    <div
      className={`tab ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}

export default Tab;
