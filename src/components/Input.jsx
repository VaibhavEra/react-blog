import React, { forwardRef, useId } from "react";

const Input = function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="width-full">
      {label && (
        <label className="block mb-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        id={id}
        ref={ref}
        {...props}
      />
    </div>
  );
};

export default Input;
