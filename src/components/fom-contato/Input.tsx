import React from 'react';
type IInputProps = React.ComponentProps<'input'> & {
  label: string;
  backgroundColor: 'bg-cyan-50' | 'bg-fuchsia-50' | 'bg-yellow-50';
};
const Input = ({label, name, backgroundColor, ...props}: IInputProps) => {
  return (
    <div className="mb-4">
      <label className="text-sm block " htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        className={`form-select w-full block rounded-xl focus:ring-black 
        ${backgroundColor} focus:border-4 focus:border-black 
        border border-black text-black font-semibold focus:bg-transparent`}
        type="text"
        {...props}
      />
    </div>
  );
};
export default Input;
