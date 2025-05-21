import React from 'react';

const BottomWidgets = ({ children, columns }) => {
  return (
    <div className="bottom-widgets">
      <div className={`bottom-widgets__grid bottom-widgets__grid--${columns}-cols`}>
        {React.Children.map(children, (child, index) => (
          <div className="bottom-widgets__item" key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomWidgets;