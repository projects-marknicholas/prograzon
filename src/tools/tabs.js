import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  }

  return (
    <div className="tabs">
      <div className="tab-list">
        {children.map((child, index) => (
          React.cloneElement(child, {
            active: index === activeTab,
            onClick: () => handleClick(index),
            key: index
          })
        ))}
      </div>
      <div className="tab-content">
        {children[activeTab].props.children}
      </div>
    </div>
  );
}

export default Tabs;
