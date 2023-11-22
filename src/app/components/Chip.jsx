import React from 'react';

const Button = ({ background, style, children }) => {
  const bgColorClass = background || 'bg-blue-400';

  return (
    <div
      className={`inline-flex items-center justify-center select-none whitespace-nowrap rounded-full py-2 px-1.5 lg:px-2.5 font-sans text-xs lg:text-sm font-bold leading-none text-white ${bgColorClass}`}
      style={style}
    >
      <div className="flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default Button;
