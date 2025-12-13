import React from 'react';

const Button = ({
  children,
  onClick,
  disabled = false,
  className = '',
  showArrow = true,
  ...props
}) => {
  const buttonClasses = `
    bg-gradient-to-r from-[#0A1D43] to-[#36D399]
    text-white px-10 py-3 text-base font-medium 
    shadow-xl hover:shadow-2xl transform hover:-translate-y-1
    transition-all duration-300 ease-in-out rounded-lg
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  return (
    <button
      className={buttonClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      <span className="flex items-center justify-center gap-2 transition-all duration-300 ease-in-out">
        {children}
        {showArrow && (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </span>
    </button>
  );
};

export default Button;
